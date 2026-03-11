import { createHashRouter } from "react-router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Address from "./pages/Address";
import Loading from "./pages/Loading";
import Checkout from "./pages/Checkout";
import HighRiskCheckout from "./pages/HighRiskCheckout";
import OrderConfirmation from "./pages/OrderConfirmation";

export const router = createHashRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/cart",
    Component: Cart,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/address",
    Component: Address,
  },
  {
    path: "/verifying",
    Component: Loading,
  },
  {
    path: "/checkout",
    Component: Checkout,
  },
  {
    path: "/checkout-high-risk",
    Component: HighRiskCheckout,
  },
  {
    path: "/order-confirmation",
    Component: OrderConfirmation,
  },
]);
