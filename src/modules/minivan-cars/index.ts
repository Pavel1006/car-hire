import { MinivanCars } from "./minivan-cars";

const MinivanCarsModule = {
  routeProps: {
    path: "/cars/minivan-cars",
    exact: true,
    component: MinivanCars,
    id: 7,
  },
  name: "minivan-cars",
};

export { MinivanCarsModule };
