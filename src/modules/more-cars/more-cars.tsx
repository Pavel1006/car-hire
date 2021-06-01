import { useContext } from "react";
import { CarRentContext } from "../../context/CarRentProvider";

function MoreCars() {
  const { cars } = useContext(CarRentContext);

  return (
    <div className="grid-map-cars">
      {cars.map((car) => (
        <div className="cars-in-map">
          <img src={car.photos[0].path} alt="A nice car" />
          <h4>Brand:{car.brand}</h4>
          <h4>Model:{car.model}</h4>
          <h4>Body:{car.body}</h4>
          <h4>Fuel:{car.fuel}</h4>
        </div>
      ))}
      ;
    </div>
  );
}
export { MoreCars };
