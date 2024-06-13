import { PropsWithChildren, createContext, useContext, useState } from "react";
import { PaymentPlatform } from "../types/type";

type PaymentContextStateValues = {
  currentUser: User | null;
  setCurrentUser: (user: User) => void;
  paymentToken: string | null;
  setPaymentToken: (token: string) => void;
  paymentType: string | null;
  setPaymentType: (token: string) => void;
  paymentPlatForm: PaymentPlatform | null;
  setPaymentPlatForm: (platform: PaymentPlatform) => void;
};

type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
};

const PaymentContext = createContext<PaymentContextStateValues | null>(null);

export const PaymentProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>({
    first_name: "John",
    last_name: "Doe",
    email: "",
    id: Date.now().toString(),
  });
  const [paymentToken, setPaymentToken] = useState<string | null>(null);
  const [paymentType, setPaymentType] = useState<string | null>(null);
  const [paymentPlatForm, setPaymentPlatForm] =
    useState<PaymentPlatform | null>(null);

  const providerValue = {
    currentUser,
    setCurrentUser,
    paymentToken,
    setPaymentToken,
    paymentType,
    setPaymentType,
    paymentPlatForm,
    setPaymentPlatForm,
  };

  return (
    <PaymentContext.Provider value={providerValue}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePaymentState = (): PaymentContextStateValues => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
};
