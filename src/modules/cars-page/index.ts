import { CarsPage } from "./cars-page";

const CarsModule = {
  routeProps: {
    path: "/cars",
    exact: true,
    component: CarsPage,
  },
  name: "cars",
};

export { CarsModule };
