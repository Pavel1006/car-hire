import { useContext } from "react";

import { CarRentContext } from "../../context/CarRentProvider";

function Homepage() {
  const { cars } = useContext(CarRentContext);
  console.log(cars);
  return (
    <div className="body">
      <img
        className="img-background"
        src="https://www.wallpaperup.com/uploads/wallpapers/2018/03/17/1231155/372d5bab2064df5559152d043beb75e3-700.jpg"
        alt="dsaasd"
      />
      <div className="bordDeInchiriere">
        <div className="backOrg">
          <h2>ARENDA MASINI IN CHISINAU</h2>
          <p className="somller-text">INTALNIRE LA AEROPORT SI ALTE SERVICII</p>
        </div>
        <div className="inchiriere">
          <select className="elimDecor">
            <option value="">Locatie preluare</option>
            <option value="">Chisinau Aeroport </option>
            <option value="">Chisinau Centru </option>
          </select>
          <div className="grid-row">
            <input className="deleFocus" type="text" placeholder="dd/mm/yy" />
            <input className="deleFocus" type="text" placeholder="00:00" />
          </div>
          <select className="elimDecor">
            <option value="">Locatie predare </option>
            <option value="">Chisinau Aeroport </option>
            <option value="">Chisinau Centru </option>
          </select>
          <div className="grid-row">
            <input className="deleFocus" placeholder="dd/mm/yy" />
            <input className="deleFocus" placeholder="00:00" />
          </div>
          <input className="deleFocus" placeholder="Age" />
          <button type="submit" className="autoButton">
            Chose car
          </button>
        </div>
      </div>
    </div>
  );
}
export { Homepage };
