import { Homepage } from "./home-pege";

const HomeModule = {
  routeProps: {
    path: "/",
    exact: true,
    component: Homepage,
  },
  name: "home",
};

export { HomeModule };
