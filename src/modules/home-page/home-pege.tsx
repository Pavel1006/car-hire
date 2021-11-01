import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { CarRentContext } from "../../context/CarRentProvider";

import { DateAndTimePickers } from "../../components/time-data-picker";

import carWallpaper from "../../assets/car-wallpaper.jpg";

function Homepage() {
  const { cars } = useContext(CarRentContext);
  const [inputValue, setInputValue] = useState("");
  const [inputValue1, setInputValue1] = useState("");
  const [initStartDate, setInitStartDate] = useState("");
  const [initEndDate, setInitEndDate] = useState("");
  const date1 = new Date(initStartDate);
  const date2 = new Date(initEndDate);
  console.log(cars);
  const checkInputPersonalInfo = () => {
    if (initStartDate === "" || initStartDate === "") {
      alert("Enter hire dates");
    }
    if (date1 >= date2) {
      alert("First date need to be bigger than Second");
    }
    if (inputValue1.length !== 9) {
      alert("Your number must have 9 numbers");
    }
    if (inputValue.length > 3) {
      alert("You must have less than 100 years old");
    }
    if (parseInt(inputValue) < 18) {
      alert("You must have 18 years old to hire a car");
    }
    localStorage.setItem("initStartDate", JSON.stringify(initStartDate));
    localStorage.setItem("initEndDate", JSON.stringify(initEndDate));
  };

  return (
    <div className="body">
      <img className="img-background" src={carWallpaper} alt="Beautiful Car " />
      <div
        className={
          localStorage.getItem("accessToken") === null
            ? "SuccessfulLogIn"
            : "hire-board-div-home-page"
        }
      >
        <div className="backOrg">
          <h2>CAR RENTAL IN CHISINAU</h2>
          <p className="smaller-text-p-home-page">
            MEETING AT THE AIRPORT AND OTHER SERVICES
          </p>
        </div>
        <div className="hire-div-information-home-page">
          <select className="eliminate-decor-select-location">
            <option value="">Pickup location</option>
            <option value="">Chisinau Airport </option>
            <option value="">Chisinau Center </option>
          </select>
          <div>
            <DateAndTimePickers
              StartEndDate="Start Date"
              onDataAndTimePickerChange={(DateAndTime) => {
                setInitStartDate(DateAndTime + ":00");
              }}
            />
          </div>
          <input
            type="number"
            className="deleFocus"
            placeholder="Put your number"
            min={1}
            max={9}
            onChange={(event) => setInputValue1(event.target.value)}
          />
          <div>
            <DateAndTimePickers
              StartEndDate="End Date"
              onDataAndTimePickerChange={(DateAndTime) => {
                setInitEndDate(DateAndTime + ":00");
              }}
            />
          </div>
          <input
            className="deleFocus"
            type="number"
            placeholder="Age"
            min={1}
            max={99}
            onChange={(event) => setInputValue(event.target.value)}
          />

          <button type="submit" className="autoButton">
            <Link
              to={
                inputValue1.length !== 9 ||
                inputValue.length > 3 ||
                parseInt(inputValue) < 18 ||
                date1 >= date2 ||
                initStartDate === "" ||
                initStartDate === ""
                  ? "/"
                  : "/cars"
              }
              onClick={checkInputPersonalInfo}
              className="linkBtn"
            >
              Chose car
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
export { Homepage };
