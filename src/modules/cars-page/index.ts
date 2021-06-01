import { CarsPage } from "./cars-page";

const CarsPageModule = {
  routeProps: {
    path: "/cars",
    exact: true,
    component: CarsPage,
    id: 2,
  },
  name: "cars",
};

export { CarsPageModule };
