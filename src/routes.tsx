import Error404 from "./pages/Error404";
import Main from "./pages/Main";
import Test from "./pages/Test";


export type RouteType = {
  name: string,
  key: string,
  route: string,
  component: React.ReactElement,
};

const routes: Array<RouteType> = [
  {
    name: "Main",
    key: "Main",
    route: "/",
    component: <Main />,
  },
  {
    name: "Error404",
    key: "Error404",
    route: "/404",
    component: <Error404 />,
  },
  {
    name: "Test",
    key: "Test",
    route: "/Test",
    component: <Test />,
  }
];

export default routes;