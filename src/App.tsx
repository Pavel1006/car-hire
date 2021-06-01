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

  /* const GetCars = () => {
    fetch("https://localhost:44359/api/cars")
      .then((cars) => cars.json())
      .then((cars) => console.log(cars));
  };
  useEffect(() => {
    GetCars();
  }, []);
*/

  //post method fetch

  /*const fetchData2 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "GoodRent",
        body: "this is a new model of car",
        userId: 11,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };
  useEffect(() => {
    fetchData2();
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
