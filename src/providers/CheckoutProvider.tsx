import { PropsWithChildren, createContext, useContext, useState } from "react";
import { CheckoutInputs, CheckoutPayload } from "../types/type";
import {
  Control,
  FieldErrors,
  UseFormGetValues,
  useForm,
} from "react-hook-form";
import { checkout } from "../apis/payment";
import { useLocation, useNavigate } from "react-router-dom";
import { useCheckboxGroup, useToast } from "@chakra-ui/react";
import { checkoutPriceOption } from "../constants";
import qs from "query-string";

type CheckOutContextStateValues = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<CheckoutInputs, any>;
  getValues: UseFormGetValues<CheckoutInputs>;
  errors: FieldErrors<CheckoutInputs>;
  isValid: boolean;
  handleCheckout: ({
    amount,
    platform,
    payment_token,
    payment_intent,
    ccnumber,
    ccexp,
    cvv,
  }: Omit<
    CheckoutPayload,
    "firstName" | "lastName" | "email" | "phone"
  >) => Promise<void>;
  handleCreditCard: () => void;
  amount: number;
  optionValues: (string | number)[];
  getCheckboxProps: (options: {
    value: string | number;
    index: number;
  }) => Record<string, unknown>;
  isProcessing: boolean;
};

const CheckoutContext = createContext<CheckOutContextStateValues | null>(null);

export const CheckoutProvider = ({ children }: PropsWithChildren) => {
  // Prefill the form with query params
  const location = useLocation();
  const queryParams = qs.parse(location.search);

  const {
    control,
    getValues,
    formState: { errors, isValid },
    setError,
    clearErrors,
    handleSubmit,
  } = useForm<CheckoutInputs>({
    defaultValues: queryParams,
  });

  const { value: optionValues, getCheckboxProps } = useCheckboxGroup({
    defaultValue: [checkoutPriceOption["5_day_start"]],
  });

  const toast = useToast();

  const [isProcessing, setIsProcessing] = useState(false);

  const amount = optionValues.reduce(
    (acc, option) => Number(acc) + Number(option),
    0,
  ) as number;

  const navigate = useNavigate();

  const handleCheckout = async ({
    amount,
    platform,
    payment_token,
    payment_intent,
    ccnumber,
    ccexp,
    cvv,
  }: Omit<CheckoutPayload, "firstName" | "lastName" | "email" | "phone">) => {
    try {
      setIsProcessing(true);

      const [firstName, lastName, email, phone] = getValues([
        "firstName",
        "lastName",
        "email",
        "phone",
      ]);

      // TODO: Remove hard code amount after done testing
      amount = 0.01;

      const payload = {
        firstName,
        lastName,
        email,
        phone,
        amount,
        platform,
      } as CheckoutPayload;

      if (payment_token) {
        // Google Pay - NMI
        payload.payment_token = payment_token;
      } else if (ccnumber && ccexp && cvv) {
        // Credit Card - NMI
        payload.ccnumber = ccnumber;
        payload.ccexp = ccexp;
        payload.cvv = cvv;
      } else if (payment_intent) {
        // Apple Pay - Stripe
        payload.payment_intent = payment_intent;
      }

      const { data } = await checkout(payload);

      console.log("result", data.metadata.verify);

      // If success redirect to the verify page for auto login
      if (data?.message === "success") {
        data?.metadata?.verify && navigate(data.metadata.verify);
      } else {
        if (data?.metadata?.cardInfor) {
          console.log("cardInfor", data.metadata.cardInfor.responsetext);
          toast({
            title: "Payment failed.",
            description:
              data.metadata.cardInfor.responsetext +
              ". Please contact support.",
            position: "top-right",
            status: "error",
            duration: 10000,
            isClosable: true,
          });
        }
      }
    } catch (error) {
      console.log("Error checkout", error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCreditCard = handleSubmit(async () => {
    clearErrors("ccnumber");

    const [ccnumber, ccexp, cvv] = getValues(["ccnumber", "ccexp", "cvv"]);

    if (!ccnumber || !ccexp || !cvv) {
      setError("ccnumber", {
        type: "manual",
        message: "The card number is incomplete",
      });
    }

    if (!isValid) {
      handleSubmit(() => {});
      return;
    }

    await handleCheckout({
      amount: 0.01,
      platform: "nmi",
      ccnumber,
      ccexp,
      cvv,
    });
  });

  console.log("isValid", isValid);

  const providerValue = {
    control,
    getValues,
    errors,
    isValid,
    handleCheckout,
    handleCreditCard,
    amount,
    optionValues,
    getCheckboxProps,
    isProcessing,
  };

  return (
    <CheckoutContext.Provider value={providerValue}>
      {children}
    </CheckoutContext.Provider>
  );
};

export const useCheckout = (): CheckOutContextStateValues => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
};
