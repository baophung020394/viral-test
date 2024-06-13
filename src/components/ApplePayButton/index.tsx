import {
  Elements,
  PaymentRequestButtonElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import type { PaymentRequest } from "@stripe/stripe-js";
import { useEffect, useRef, useState } from "react";
import { createPaymentIntent } from "../../apis/payment";
import { useCheckout } from "../../providers/CheckoutProvider";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

type ApplePayButtonProps = {
  amount: number;
};

type CheckoutApplePayProps = {
  amount: number;
};

const ApplePayButton = ({ amount }: ApplePayButtonProps) => {
  return (
    <>
      {stripePromise && (
        <Elements stripe={stripePromise}>
          <CheckoutApplePay amount={amount} />
        </Elements>
      )}
    </>
  );
};

const CheckoutApplePay = ({ amount }: CheckoutApplePayProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const { handleCheckout, getValues } = useCheckout();

  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(
    null,
  );

  const amountRef = useRef<number>(amount);

  console.log("amount changed");

  // Init Stripe PaymentRequest
  useEffect(() => {
    if (stripe) {
      initStripePaymentRequest(stripe);
    }
  }, [stripe]);

  useEffect(() => {
    paymentRequest?.update({
      total: {
        label: `Viral Profit Course - ${Number(amount)}$ package`,
        amount: Number(amount) * 100,
      },
    });

    amountRef.current = amount;
  }, [amount]);

  const initStripePaymentRequest = (stripe: Stripe) => {
    // TODO Later when having the actual product, update accordingly here
    const paymentRequest = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: `Viral Profit Course - ${Number(amount)}$ package`,
        // TODO: Update total price of Stripe here
        amount: Number(amount) * 100,
      },
      disableWallets: ["link", "googlePay"],
    });

    // Check the availability of the Payment Request API.
    paymentRequest.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(paymentRequest);
        handleStripePaymentRequest(paymentRequest);
      }
    });
  };

  const handleStripePaymentRequest = (paymentRequest: PaymentRequest) => {
    paymentRequest.on("paymentmethod", async (ev) => {
      // Confirm the PaymentIntent without handling potential next actions (yet).

      if (!stripe || !elements) {
        // Stripe.js hasn't yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }

      try {
        const [firstName, lastName, email, phone] = getValues([
          "firstName",
          "lastName",
          "email",
          "phone",
        ]);

        const data = await createPaymentIntent({
          email,
          phone,
          firstName,
          lastName,
          amount: 0.01,
        });

        const { client_secret: clientSecret } = data;

        const { paymentIntent, error: confirmError } =
          await stripe!.confirmCardPayment(
            clientSecret,
            {
              payment_method: ev.paymentMethod.id,
            },
            { handleActions: false },
          );

        if (confirmError) {
          // Report to the browser that the payment failed, prompting it to
          // re-show the payment interface, or show an error message and close
          // the payment interface.
          ev.complete("fail");
          console.log("failed", confirmError);
        } else {
          ev.complete("success");
          console.log("paymentIntent.status)", paymentIntent.status);
          switch (paymentIntent.status) {
            case "succeeded":
              console.log("Success! Payment received.");

              await handleCheckout({
                amount: 0.01,
                platform: "stripe",
                payment_intent: paymentIntent.id,
              });

              break;

            case "processing":
              console.log(
                "Payment processing. We'll update you when payment is received.",
              );
              break;

            case "requires_payment_method":
              // Redirect your user back to your payment page to attempt collecting
              // payment again
              console.log("Payment failed. Please try another payment method.");
              break;

            default:
              console.log("Something went wrong.");
              break;
          }
        }
      } catch (error) {
        console.log("error", error);
        return;
      }
    });
  };

  return (
    <>
      {paymentRequest && (
        <PaymentRequestButtonElement options={{ paymentRequest }} />
      )}
    </>
  );
};

export default ApplePayButton;
