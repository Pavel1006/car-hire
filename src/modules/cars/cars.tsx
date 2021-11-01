import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { useRouteMatch } from "react-router";

import interiorCar from "../../assets/car-interior.jpg";

import trunkCar from "../../assets/trunk-car.png";
import { CarRentContext } from "../../context/CarRentProvider";

function Cars() {
  //
  const { cars } = useContext(CarRentContext);
  const router = useRouteMatch<{ type: string }>();
  //use state constants
  const [count, setCount] = useState(1);
  const [text, setText] = useState(true);
  const [checkHire, setCheckHire] = useState("0");
  //
  const checkHireFC = () => {
    if (initStartDate === "" || initEndDate === "") {
      setCheckHire("0");
      alert("Please enter the date of your hire. For this go to Home Page ");
    } else {
      setCheckHire("1");
    }
  };
  //constants from local storage
  const initStartDate = JSON.parse(
    localStorage.getItem("initStartDate") || "{}"
  );
  const initEndDate = JSON.parse(localStorage.getItem("initEndDate") || "{}");
  //
  const interior = () => {
    setCount((prevCount) => (prevCount = 2));
  };
  const trunk = () => {
    setCount((prevCount) => (prevCount = 3));
  };
  const exterior = () => {
    setCount((prevCount) => (prevCount = 1));
  };
  const details = () => {
    setText((prevCount) => !prevCount);
  };
  console.log(text);

  return (
    <div className="silver-background">
      <div className="cars-buttons-grid">
        <button className="cars-icon-button" onClick={exterior}>
          <i className="fas fa-car bigger-icon"></i>
        </button>
        <button className="cars-icon-button" onClick={interior}>
          <img src={interiorCar} alt="interior" className="bigger-image-seat" />
        </button>
        <button className="cars-icon-button" onClick={trunk}>
          <img src={trunkCar} alt="trunk" className="bigger-image" />
        </button>
        <button className="cars-icon-button" onClick={details}>
          <i className="fas fa-clipboard-list bigger-icon"></i>
        </button>
      </div>
      <div className="center-p-information">
        <p>Click on car's photo which you would hair!!!</p>
      </div>
      <div className="grid-map-cars">
        {cars
          .filter((body) => {
            console.log(body);
            return body.body === `${router.params.type}`;
          })
          .map((car) => (
            <div key={car.id} className="cars-in-map">
              <Link
                onClick={checkHireFC}
                to={
                  checkHire === "0"
                    ? `/cars/${car.body}`
                    : `/cars/${car.body}/${car.brand}/${car.id}`
                }
              >
                <img
                  src={
                    car.photos.filter((photo) => photo.priority === count)[0]
                      .path
                  }
                  alt="A nice car"
                  className="car-image"
                />
              </Link>

              <h4 className="autoMargin">
                {car.brand} {car.model}
              </h4>
              <div>
                {text === false ? (
                  <div>
                    {" "}
                    <h4 className="minus-margin">
                      Transmission: {car.transmission}
                    </h4>
                    <h4 className="minus-margin">
                      Fabrication Year: {car.fabricationYear.substr(0, 4)}
                    </h4>
                    <h4 className="minus-margin">
                      Number Of Seats: {car.numberOfSeats}
                    </h4>
                    <h4 className="minus-margin">
                      Price Per Day: {car.pricePerDay}€
                    </h4>
                    <h4 className="minus-margin">Fuel: {car.fuel}</h4>{" "}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export { Cars };
