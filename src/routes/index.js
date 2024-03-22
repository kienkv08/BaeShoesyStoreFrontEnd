import DefaultLayout from "../components/layout/default/default.layout";
import Login from "../page/authentication/login/login";
import Register from "../page/authentication/register/register";
// import ChangePassword from "../page/changepassword/changepassword";
import Demo from "../page/demo/demo";
import Home from "../page/public/home/home";
import PostPage from "../page/public/post/PostPage";
import ProductDetail from "../page/public/product_detail/ProductDetail";
import AdminHome from "../page/admin/admindashboard/Home";
import AdminPostManagement from "../page/admin/managepost/ManagePosts";
import AdminAccountManagement from "../page/admin/manageaccount/ManageAccount";
import AdminLayout from "../components/layout/AdminLayout/admin.layout";
import UserProfile from "../page/userprofile/userprofile";
import Auction from "../page/public/auction/Auction";
import OrderHistory from "../page/public/auction/OrderHistory";
import Contact from "../page/public/contactUs/ContactUsPage";
import Policy from "../page/public/policyPage/PolicyPage";
import CreateProduct from "../page/manage/create_post/CreateProduct";
import UserProfilePage from "../page/authentication/profile/UserProfilePage";
import Success from "../page/authentication/payment/Success";
import PostReview from "../page/admin/postReview/PostReview";
import MyOrder from "../page/authentication/myorder/MyOrder";
import Profit from "../page/authentication/profit/Profit";
import Transaction from "../page/authentication/profit/Transaction";
// import AboutUs from "../page/public/aboutUS/AboutUsPage";
const publicRoutes = [
  {
    path: "/register",
    component: Register,
    layout: DefaultLayout,
    isAuth: true,
  },
  { path: "/demo", component: Demo, layout: DefaultLayout },
  { path: "/login", component: Login, layout: DefaultLayout, isAuth: true },
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/post", component: PostPage, layout: DefaultLayout },
  { path: "/order", component: MyOrder, layout: DefaultLayout },
  {
    path: "/product-detail/:id",
    component: ProductDetail,
    layout: DefaultLayout,
  },
  { path: "/userprofile", component: UserProfile, layout: DefaultLayout },
  { path: "/auction/:id", component: Auction, layout: DefaultLayout },
  { path: "/orderhistory", component: OrderHistory, layout: OrderHistory },
  // { path: "/About", component: AboutUs, layout: DefaultLayout },
  { path: "/Contact", component: Contact, layout: DefaultLayout },
  { path: "/Policy", component: Policy, layout: DefaultLayout },
  { path: "/posts/create", component: CreateProduct, layout: DefaultLayout },
  { path: "/users/profile", component: UserProfilePage, layout: DefaultLayout },
  { path: "/payment/success", component: Success, layout: DefaultLayout },
];

const adminRoutes = [
  { path: "/admin", component: AdminHome, layout: AdminLayout },
  { path: "/admin/post-review", component: PostReview, layout: DefaultLayout },
  {
    path: "/admin/manage-posts",
    component: AdminPostManagement,
    layout: AdminLayout,
  },
  {
    path: "/admin/manage-accounts",
    component: AdminAccountManagement,
    layout: AdminLayout,
  },
  //profit
  { path: "/admin/profit", component: Profit, layout: DefaultLayout },
  { path: "/transaction", component: Transaction, layout: DefaultLayout }
];
export { publicRoutes, adminRoutes };
