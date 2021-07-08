import { useRouteMatch } from "react-router-dom";
import { ReservationFetch } from "../../services/reservation.cars.service";

function FinalReservationPage() {
  const router = useRouteMatch<{ body: string; brand: string; id: string }>();
  console.log(router);
  const brand = router.params.brand;
  const carIdString = router.params.id;
  const carId = parseInt(carIdString, 10);
  ReservationFetch(carId);

  return (
    <div>
      You hide a nice car , Congratulations!!!
      <br />
      Enjoy your {brand} !!!
    </div>
  );
}

export { FinalReservationPage };
