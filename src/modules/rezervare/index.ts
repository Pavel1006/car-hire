import { Rezervare } from "./rezervare";

const RezervareModule = {
  routeProps: {
    path: "/cars/:type",
    exact: true,
    component: Rezervare,
  },
  name: "rezervare",
};

export { RezervareModule };
