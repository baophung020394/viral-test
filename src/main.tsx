import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { PaymentProvider } from "./providers/ContextProvider.tsx";
import { customTheme } from "./theme.ts";
import { AuthProvider } from "./providers/AuthProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ChakraProvider theme={customTheme}>
    <AuthProvider>
      <PaymentProvider>
        <App />
      </PaymentProvider>
    </AuthProvider>
  </ChakraProvider>,
);
