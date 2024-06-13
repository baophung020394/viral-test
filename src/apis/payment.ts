import axios from "../libs/axios";
import {
  CheckoutPayload,
  Dict,
  NMIPaymentPayload,
  PaymentIntentPayload,
  UpsellPayload,
} from "../types/type";

export const processPayment = async ({
  amount,
  first_name,
  last_name,
  payment_token,
  customer_vault_id,
}: NMIPaymentPayload) => {
  const body: Dict = {
    amount,
    customer_vault_id,
  };

  if (payment_token) body["payment_token"] = payment_token;
  if (first_name) body["first_name"] = first_name;
  if (last_name) body["last_name"] = last_name;

  try {
    const response = await axios.post("/payment/checkout", body);
    return response;
  } catch (error) {
    console.log("Error processing payment", error);
  }
};

export const createPaymentIntent = async (payload: PaymentIntentPayload) => {
  try {
    const res = await axios.post("user/payment-intent", payload);
    return res.data;
  } catch (error) {
    console.log("Error creating payment intent", error);
  }
};

export const upsell = async (payload: UpsellPayload) => {
  try {
    await axios.post("/payment/upsell", payload);
  } catch (error) {
    console.log("Error upsell", error);
  }
};

export const checkout = async (payload: CheckoutPayload) => {
  return await axios.post("/user/checkout", payload);
};
