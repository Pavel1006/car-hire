import { EconomicCars } from "./economic-cars";

const EconomicCarsModule = {
  routeProps: {
    path: "/cars/economic-cars",
    exact: true,
    component: EconomicCars,
  },
  name: "economic-cars",
};

export { EconomicCarsModule };
