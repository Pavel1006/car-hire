import { Cars } from "./cars";

const CarsModule = {
  routeProps: {
    path: "/cars/:type",
    exact: true,
    component: Cars,
  },
  name: "cars",
};

export { CarsModule };
