import DefaultLayout from "../components/layout/default/default.layout";
import Register from "../page/authentication/register/register";
import Demo from "../page/demo/demo";

const publicRoutes = [
  { path: "/register", component: Register, layout: DefaultLayout },
  { path: "/demo", component: Demo, layout: DefaultLayout },
];

export { publicRoutes };
