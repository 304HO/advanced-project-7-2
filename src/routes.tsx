import Error404 from "./pages/Error404Page";
import LoginPage from "./pages/LoginPage";
import ReviewPage from "./pages/ReviewPage";
import ReviewDetailPage from "./pages/ReviewDetailPage";
import SearchPage from "./pages/SearchPage";
import Mypage from "./pages/Mypage";

export type RouteType = {
  name: string;
  key: string;
  route: string;
  component: React.ReactElement;
};

const routes: Array<RouteType> = [
  {
    name: "LoginPage",
    key: "LoginPage",
    route: "/",
    component: <LoginPage />
  },
  {
    name: "ReviewPage",
    key: "ReviewPage",
    route: "/ReviewPage",
    component: <ReviewPage />
  },
  {
    name: "Error404",
    key: "Error404",
    route: "/404",
    component: <Error404 />
  },
  {
    name: "SearchPage",
    key: "SearchPage",
    route: "/SearchPage",
    component: <SearchPage />
  },
  {
    name: "ReviewDetailPage",
    key: "ReviewDetailPage",
    route: "/ReviewDetailPage/:id",
    component: <ReviewDetailPage />
  },
  {
    name: "Mypage",
    key: "Mypage",
    route: "/Mypage",
    component: <Mypage />
  }
];

export default routes;
