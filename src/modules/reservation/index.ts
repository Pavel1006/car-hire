import { Reservation } from "./reservation";

const ReservationModule = {
  routeProps: {
    path: "/Reservation",
    exact: true,
    component: Reservation,
  },
  name: "reservation",
};

export { ReservationModule };
