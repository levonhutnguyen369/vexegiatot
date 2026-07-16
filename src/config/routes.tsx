import MainLayout from "@/layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Signin from "../pages/SignIn/SignInPage";
import Signup from "../pages/SignUp/SignUpPage";
import NotFound from "@/pages/NotFound";
import Search from "@/pages/SearchDetail";
import Booking from "@/pages/Booking";
import Payment from "@/pages/Payment";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/signin",
    component: Signin,
    layout: MainLayout,
  },
  {
    path: "/signup",
    component: Signup,
    layout: MainLayout,
  },
  {
    path: "/search",
    component: Search,
    layout: MainLayout,
  },
  {
    path: "/booking",
    component: Booking,
    layout: MainLayout,
  },
  {
    path: "/payment",
    component: Payment,
    layout: MainLayout,
  },
  {
    path: "*",
    component: NotFound,
    layout: null,
  },
];
