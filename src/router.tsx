import { createBrowserRouter } from "react-router-dom";
import OptInPage from "./pages/opt-in";
import LoginPage from "./pages/login";
import { WaitListPage } from "./pages/waitlist";
import BluePrint from "./pages/blue-print";
import CheckoutOrder from "./pages/v2/checkout";
import SalesPage from "./pages/sales";
import PrivateRoute from "./components/PrivateRoute";
import VerifyPage from "./pages/verify";
import FastStartPage from "./pages/fast-start";
import { CheckoutProvider } from "./providers/CheckoutProvider";
import PrivacyPolicyPage from "./pages/privacy";
import TermsAndServicePage from "./pages/terms";

export const router = createBrowserRouter([
  { path: "/", element: <WaitListPage /> },
  { path: "/quiz", element: <OptInPage /> },
  { path: "/opt-in", element: <OptInPage /> },
  { path: "/login", element: <LoginPage /> },
  {
    path: "/checkout",
    element: (
      <CheckoutProvider>
        <CheckoutOrder />
      </CheckoutProvider>
    ),
  },
  { path: "/sales", element: <SalesPage /> },
  { path: "/verify", element: <VerifyPage /> },
  { path: "/privacy", element: <PrivacyPolicyPage /> },
  { path: "/terms", element: <TermsAndServicePage /> },

  { path: "/portal", element: <PrivateRoute element={<FastStartPage />} /> },
  { path: "/blueprint", element: <PrivateRoute element={<BluePrint />} /> },
]);
