/* eslint-disable no-template-curly-in-string */
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { useRouteMatch } from "react-router";

import { CarRentContext } from "../../context/CarRentProvider";

function Cars() {
  const location = useLocation();
  console.log(location);
  const { cars } = useContext(CarRentContext);
  const router = useRouteMatch<{ type: string }>();
  const [count, setCount] = useState(1);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="grid-map-cars">
      {cars
        .filter((body) => {
          console.log(body);
          return body.body === `${router.params.type}`;
        })
        .map((car) => (
          <div key={car.id} className="cars-in-map">
            <Link
              to={`/cars/${car.body}/${car.brand}/${car.id}`}
              className="autoImage"
            >
              <img
                src={
                  car.photos.filter((photo) => photo.priority === count)[0].path
                }
                alt="A nice car"
              />
            </Link>
            <button onClick={increment}>inainte</button>
            <button onClick={decrement}>inapoi</button>
            <h4 className="minus-margin">Brand: {car.brand}</h4>
            <h4 className="minus-margin">Model: {car.model}</h4>
            <h4 className="minus-margin">
              Fabrication Year: {car.fabricationYear}
            </h4>
            <h4 className="minus-margin">Price Per Day: {car.pricePerDay}€</h4>
            <h4 className="minus-margin">Transmission: {car.transmission}</h4>
            <h4 className="minus-margin">Fuel: {car.fuel}</h4>
          </div>
        ))}
    </div>
  );
}
export { Cars };
