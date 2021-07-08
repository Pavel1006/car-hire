import { FinalReservationPage } from "./final.reservation";

const FinalReservationPageModule = {
  routeProps: {
    path: "/cars/:body/:brand/:id",
    exact: true,
    component: FinalReservationPage,
  },
  name: "final-reservation-page",
};

export { FinalReservationPageModule };
