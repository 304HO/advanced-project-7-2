import Error404 from "./pages/Error404";
import Main from "./pages/Main";
import ReviewMain from "./pages/ReviewMain";
import Test from "./pages/Test";
import SearchMain from "./pages/SearchMain";
import ReviewDetail from "./pages/ReviewDetail";

export type RouteType = {
  name: string;
  key: string;
  route: string;
  component: React.ReactElement;
};

const routes: Array<RouteType> = [
  {
    name: "Main",
    key: "Main",
    route: "/",
    component: <Main />
  },
  {
    name: "ReviewMain",
    key: "ReviewMain",
    route: "/ReviewMain",
    component: <ReviewMain />
  },
  {
    name: "Error404",
    key: "Error404",
    route: "/404",
    component: <Error404 />
  },
  {
    name: "Test",
    key: "Test",
    route: "/Test",
    component: <Test />
  },
  {
    name: "SearchMain",
    key: "SearchMain",
    route: "/search",
    component: <SearchMain />
  },
  {
    name: "ReviewDetail",
    key: "ReviewDetail",
    route: "/ReviewDetail/:id",
    component: <ReviewDetail />
  }
];

export default routes;
