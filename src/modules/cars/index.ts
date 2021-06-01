import { Cars } from "./cars";

const CarsModule = {
  routeProps: {
    path: "/cars/:type",
    exact: true,
    component: Cars,
    id: 8,
  },
  name: "cars",
};

export { CarsModule };
