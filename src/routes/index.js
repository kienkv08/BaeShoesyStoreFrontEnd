import DefaultLayout from "../components/layout/default/default.layout";
import Register from "../page/authentication/register/register";
import ChangePassword from "../page/changepassword/changepassword";
import Demo from "../page/demo/demo";
import UserProfile from "../page/userprofile/userprofile";

const publicRoutes = [
  { path: "/register", component: Register, layout: DefaultLayout },
  { path: "/demo", component: Demo, layout: DefaultLayout },
  { path: "/userprofile", component: UserProfile, layout: DefaultLayout },
  { path: "/changepassword", component: ChangePassword, layout: DefaultLayout},
];

export { publicRoutes };
