import { Link, useRouteMatch } from "react-router-dom";

import { ReservationService } from "../../services/reservation.cars.service";

function FinalReservationPage() {
  const router = useRouteMatch<{
    body: string;
    brand: string;
    id: string;
  }>();
  // console.log(router);
  //car Id for service Registration
  const carIdString = router.params.id;
  const carId = parseInt(carIdString, 10);
  console.log(carId);
  //constants from local storage
  const accessToken = JSON.parse(
    localStorage.getItem("accessToken") || "{}"
  ).accessToken;
  console.log(typeof accessToken);
  const initStartDate = JSON.parse(
    localStorage.getItem("initStartDate") || "{}"
  );
  const initEndDate = JSON.parse(localStorage.getItem("initEndDate") || "{}");
  //all values for service reservation
  const reservation = {
    carId: carId,
    startDate: initStartDate,
    endDate: initEndDate,
  };
  //
  const doneHireFC = () => {
    ReservationService(reservation);
    localStorage.removeItem("initEndDate");
    localStorage.removeItem("initStartDate");
  };
  return (
    <div className="back-ground-gradient-reservation">
      <div
        className={
          typeof accessToken !== "string"
            ? "disappear-div-final-reservation"
            : "container-final-reservation"
        }
      >
        <h1 className="h3-without-top-margin">Congratulation</h1>
        <i className="fas fa-check-circle font-size-icon-check"></i>
        <div>
          <p className="without-margin-bottom-reservation">
            You have successfully booked an appointment with us. <br />
            Here are your details
          </p>
          <p className="without-margin-bottom-reservation without-margin-top-reservation">
            Body: {router.params.body}
            <br />
            Brand: {router.params.brand}
          </p>
          <div>
            <p>Eagerly awaiting your visit </p>
            <h3>Regards, Team GoodRent</h3>
          </div>{" "}
          <p>You must click on button to done your hire!</p>
          <Link onClick={doneHireFC} to="/">
            <button className="button-final-reservation-done-hire ">
              Done Hire
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export { FinalReservationPage };
