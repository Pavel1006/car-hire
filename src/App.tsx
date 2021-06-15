import { RouterContainer } from "./containers/router-container";

import { BrowserRouter } from "react-router-dom";

import "./App.css";
//import { useEffect } from "react";
import { CarRentProvider } from "./context/CarRentProvider";
//import { GetCars } from "./services/car.service";

function App() {
  /*const fetchData = async () => {
    try {
      const cars = await fetch("https://localhost:44359/api/Cars");
      throw new Error("mu fs");
      const x = await cars.json();
      console.log(x);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };*/
  //backend users

  //https://jsonplaceholder.typicode.com/users/1/posts

  /*const GetCars = () => {
    fetch("https://localhost:44359/api/Cars")
      .then((cars) => cars.json())
      .then((cars) => console.log(cars));
  };
  useEffect(() => {
    GetCars();
  }, []);*/

  //post method fetch

  /*const fetchData2 = () => {
    fetch("https://localhost:44359/api/cars/1/photos/1", {
      method: "PATCH",
      body: JSON.stringify({
        priority: 4,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  useEffect(() => {
    GetCars;
  }, []);*/

  return (
    <BrowserRouter>
      <CarRentProvider>
        <RouterContainer />
      </CarRentProvider>
    </BrowserRouter>
  );
}

export default App;
//function fetchData1() {
// throw new Error("Function not implemented.");
//}
