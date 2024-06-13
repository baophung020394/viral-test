import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { Dict } from "../../types/type";
import { useCheckout } from "../../providers/CheckoutProvider";

type GooglePayButtonProps = {
  amount: number;
};

const GooglePayButton = ({ amount }: GooglePayButtonProps) => {
  const { handleCheckout } = useCheckout();

  // Collect.js
  useEffect(() => {
    configNMICollectJS();
  }, [amount]);

  const configNMICollectJS = () => {
    window.CollectJS.configure({
      variant: "inline",
      // 1. Callback when processing NMI Card/Google Pay
      callback: async (res: Dict) => {
        await handleCheckout({
          amount: 0.01,
          platform: "nmi",
          payment_token: res.token,
        });
      },
      fields: {
        googlePay: {
          selector: ".googlePayButton",
          emailRequired: true,
          buttonType: "buy",
          buttonColor: "default",
          buttonLocale: "en",
        },
      },
      currency: "USD",
      country: "US",
      price: amount.toString(), // price must provided to Collect.js as a string when using Google Pay.,
    });
  };

  return <Box className="googlePayButton" />;
};

export default GooglePayButton;
