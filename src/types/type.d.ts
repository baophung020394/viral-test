import { questions } from "../constants";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Dict = { [key: string]: any };

type Question = (typeof questions)[0];

type PaymentIntentPayload = {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  amount: number;
};

type UpsellPayload = {
  payment_intent: string;
  amount: number;
};

type StripeUpSellInputs = {
  customer: string;
  payment_intent: string;
  amount: number;
};

type NMIPaymentPayload = {
  amount: string;
  first_name?: string;
  last_name?: string;
  payment_token?: string;
  customer_vault_id: string;
  paymentType?: string | null;
};

type PaymentPlatform = "nmi" | "stripe";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    CollectJS: any;
  }
}

type CheckoutPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  amount: number;
  platform?: PaymentPlatform;

  // Stripe
  payment_intent?: string;

  // NMI
  payment_token?: string;

  ccnumber?: string;
  ccexp?: string;
  cvv?: string;
};

type CheckoutInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  ccnumber?: string;
  ccexp?: string;
  cvv?: string;
};

type ResponseType = {
  options: Dict;
  message: string;
  statusCode: number;
  reasonStatusCode: number;
  metadata: Dict;
};
