import { Homepage } from "./home-pege";

const HomeModule = {
  routeProps: {
    path: "/",
    exact: true,
    component: Homepage,
    id: 1,
  },
  name: "home",
};

export { HomeModule };
