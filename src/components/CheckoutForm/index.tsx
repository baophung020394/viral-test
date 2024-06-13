import { Box, Button, Divider, Flex, Text, useToast } from "@chakra-ui/react";
import {
  PaymentRequestButtonElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { Dict } from "../../types/type";
import { usePaymentState } from "../../providers/ContextProvider";
import { createPaymentIntent, processPayment } from "../../apis/payment";
import { useNavigate } from "react-router-dom";
import { PaymentRequest, Stripe } from "@stripe/stripe-js";

/**
 * Payment Flow
 *
 * @host NMI
 *   - Normal credit:
 *     1. Click checkout button
 *     2. handleNMIPaymentRequest()
 *     3. Payment starts processing
 *     4. Collect.js callback
 *     5. handleSubmitCheckout()
 *     6. Send request to server
 *     7. Charge
 *     8. Navigate to upsell page
 *
 *   - Google Pay:
 *     1. Click Google Pay button
 *     2. Payment starts processing
 *     3. Collect.js callback
 *     4. handleSubmitCheckout()
 *     5. Send request to server
 *     6. Charge
 *     7. Navigate to upsell page
 *
 * @host Stripe
 *   - Apple Pay:
 *     1. Click Apple Pay button
 *     2. Payment starts processing
 *     3. PaymentRequest.on("paymentmethod") callback
 *     4. createPaymentIntent()
 *     5. confirmCardPayment()
 *     6. Charge
 *     7. Navigate to upsell page
 */

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const toast = useToast();

  const [paymentRequest, setPaymentRequest] = useState<PaymentRequest | null>(
    null,
  );

  const { setPaymentToken, currentUser, setPaymentType, setPaymentPlatForm } =
    usePaymentState();

  const [errorMessage, setErrorMessage] = useState<string | undefined>(
    undefined,
  );

  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  // Init Stripe PaymentRequest
  useEffect(() => {
    if (stripe) {
      initStripePaymentRequest(stripe);
    }
  }, [stripe]);

  // Collect.js
  useEffect(() => {
    configNMICollectJS();
  }, []);

  const initStripePaymentRequest = (stripe: Stripe) => {
    // TODO Later when having the actual product, update accordingly here
    const paymentRequest = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "Demo total",
        // TODO: Update total price of Stripe here
        amount: 100,
      },
      disableWallets: ["link"],
    });

    console.log("paymentRequest", paymentRequest);

    // Check the availability of the Payment Request API.
    paymentRequest.canMakePayment().then((result) => {
      console.log(result);
      if (result) {
        setPaymentRequest(paymentRequest);
        handleStripePaymentRequest(paymentRequest);
      }
    });
  };

  const configNMICollectJS = () => {
    window.CollectJS.configure({
      variant: "inline",
      // 1. Callback when processing NMI Card/Google Pay
      callback: (res: Dict) => {
        console.log("Success", res, res.tokenType, res.t);
        setPaymentType(res.tokenType);
        setPaymentToken(res.token);
        setPaymentPlatForm("nmi");
        setIsProcessing(false);

        handleSubmitCheckout(res.token);
      },
      fields: {
        googlePay: {
          selector: ".googlePayButton",
          emailRequired: true,
          buttonType: "buy",
          buttonColor: "default",
          buttonLocale: "en",
        },
        cvv: {
          placeholder: "CVV",
        },
        ccnumber: {
          placeholder: "Credit Card",
        },
        ccexp: {
          placeholder: "MM / YY",
        },
      },
      invalidCss: {
        color: "#B40E3E",
      },
      validCss: {
        color: "#14855F",
      },
      customCss: {
        height: "50px",
        "border-color": "#E2E8F0",
        "border-width": "2px",
        "margin-bottom": "10px",
        "border-radius": "6px",
        padding: "0 10px",
      },
      focusCss: {
        "border-color": "#1b7b6f91",
      },
      currency: "USD",
      country: "US",
      price: "0.01",
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
        const data = await createPaymentIntent({
          email: "viralprofit@gmail.com",
          firstName: "Viral",
          lastName: "Profit",
          amount: 100,
          phone: "123",
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
          setErrorMessage(confirmError.message);
        } else {
          ev.complete("success");

          switch (paymentIntent.status) {
            case "succeeded":
              console.log("Success! Payment received.");

              setPaymentPlatForm("stripe");
              sessionStorage.setItem("payment_intent", paymentIntent.id);
              navigate("/upsell");

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

  const handleNMIPaymentRequest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    window.CollectJS.startPaymentRequest();
  };

  const handleSubmitCheckout = async (paymentToken: string) => {
    const paymentRequest = {
      amount: "0.01",
      first_name: currentUser?.first_name,
      last_name: currentUser?.last_name,
      payment_token: paymentToken,
      customer_vault_id: currentUser?.id || "",
    };

    const result = await processPayment(paymentRequest);

    console.log("result", result);

    if (result?.data?.responsetext?.includes("Duplicate Customer Vault Id")) {
      const result2 = await processPayment({
        amount: "0.01",
        customer_vault_id: currentUser!.id,
      });

      console.log("result2", result2);
    }

    /**
     * 100: Approved
     * Others: Declined/Error
     * Reference: https://docs.nmi.dev/reference/response-codes
     */
    if (result?.data?.response_code === "100") {
      navigate("/upsell");
    } else {
      toast({
        title: "Payment Error",
        description: result?.data?.responsetext + ". Please contact support.",
        status: "error",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
    }
  };

  return (
    <Flex mt="1rem" alignItems="center" justifyContent="center">
      <Box as="form" w={{ base: "300px", md: "500px" }}>
        <Text mt="4" mb="4" color="teal.600">
          Use Digital Wallets
        </Text>

        <Box className="googlePayButton" />

        {paymentRequest && (
          <PaymentRequestButtonElement options={{ paymentRequest }} />
        )}
        <Divider mt="1rem" />

        <Text mt="12" mb="4" color="teal.600">
          Or enter credit card info
        </Text>
        <div id="ccnumber"></div>
        <div id="ccexp"></div>
        <div id="cvv"></div>

        <Flex justifyContent="center">
          <Button
            colorScheme="teal"
            mt="1rem"
            width="100%"
            type="submit"
            onClick={handleNMIPaymentRequest}
            isLoading={isProcessing}
            loadingText="Processing..."
          >
            Checkout
          </Button>
        </Flex>

        {errorMessage && <div>{errorMessage}</div>}
      </Box>
    </Flex>
  );
};

export default CheckoutForm;
