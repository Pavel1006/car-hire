import { SuvCars } from "./suv-cars";

const SuvCarsModule = {
  routeProps: {
    path: "/cars/suv-cars",
    exact: true,
    component: SuvCars,
    id: 8,
  },
  name: "suv-cars",
};

export { SuvCarsModule };
