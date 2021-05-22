import { RouterContainer } from "./containers/router-container";

import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { useEffect } from "react";

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

  const fetchData1 = () => {
    fetch("https://localhost:44359/api/Cars")
      .then((cars) => cars.json())
      .catch((cars) => console.log(cars));
  };
  useEffect(() => {
    fetchData1();
  }, []);

  return (
    <BrowserRouter>
      <RouterContainer />
    </BrowserRouter>
  );
}

export default App;
