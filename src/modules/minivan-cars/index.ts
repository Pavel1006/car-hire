import { MinivanCars } from "./minivan-cars";

const MinivanCarsModule = {
  routeProps: {
    path: "/cars/minivan-cars",
    exact: true,
    component: MinivanCars,
  },
  name: "minivan-cars",
};

export { MinivanCarsModule };
