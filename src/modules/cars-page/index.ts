import { CarsPage } from "./cars-page";

const CarsPageModule = {
  routeProps: {
    path: "/cars",
    exact: true,
    component: CarsPage,
  },
  name: "cars-page",
};

export { CarsPageModule };
