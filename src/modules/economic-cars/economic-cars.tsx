import { useContext } from "react";
import { CarRentContext } from "../../context/CarRentProvider";

function EconomicCars() {
  const { cars } = useContext(CarRentContext);

  return (
    <div className="grid-map-cars">
      {cars
        //.filter((body) => body.body === "Sedan")
        .filter((body) => body.model === "Corola")
        .map((car) => (
          <div key={car.id} className="cars-in-map">
            <img
              src={car.photos.filter((photo) => photo.priority === 1)[0].path}
              alt="A nice car"
            />
            <h4 className="minus-margin">Brand:{car.brand}</h4>
            <h4 className="minus-margin">Model:{car.model}</h4>
            <h4 className="minus-margin">Body:{car.body}</h4>
            <h4 className="minus-margin">Fuel:{car.fuel}</h4>
          </div>
        ))}
      ;
    </div>
  );
}
export { EconomicCars };
