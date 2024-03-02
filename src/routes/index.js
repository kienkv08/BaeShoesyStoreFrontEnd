import DefaultLayout from "../components/layout/default/default.layout";
import Login from "../page/authentication/login/login";
import Register from "../page/authentication/register/register";
import Demo from "../page/demo/demo";
import Home from "../page/public/home/home";
import PostPage from "../page/public/post/PostPage";
import ProductDetail from "../page/public/product_detail/ProductDetail";
import About from "../page/public/aboutUS/AboutUsPage";
import Contact from "../page/public/contactUS/ContactUsPage";
import Policy from "../page/public/policyPage/PolicyPage";

const publicRoutes = [
  { path: "/register", component: Register, layout: DefaultLayout },
  { path: "/demo", component: Demo, layout: DefaultLayout },
  { path: "/login", component: Login, layout: DefaultLayout },
  { path: "/", component: Home, layout: DefaultLayout },
  { path: "/post", component: PostPage, layout: DefaultLayout },
  { path: "/product-detail", component: ProductDetail, layout: DefaultLayout },
  { path: "/About", component: About, layout: DefaultLayout },
  { path: "/Contact", component: Contact, layout: DefaultLayout },
  { path: "/Policy", component: Policy, layout: DefaultLayout },
];
export { publicRoutes };
