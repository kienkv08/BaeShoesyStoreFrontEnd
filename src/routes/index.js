import DefaultLayout from "../components/layout/default/default.layout";
import Register from "../page/authentication/register/register";
import Demo from "../page/demo/demo";
import Auction from "../page/public/auction/Auction";
import OrderHistory from "../page/public/auction/OrderHistory"

const publicRoutes = [
  { path: "/register", component: Register, layout: DefaultLayout },
  { path: "/demo", component: Demo, layout: DefaultLayout },
  { path:"/auction", component: Auction, layout: Auction},
  { path: "/orderhistory", component: OrderHistory, layout: OrderHistory }
];

export { publicRoutes };
