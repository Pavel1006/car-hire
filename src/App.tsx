import { RouterContainer } from "./containers/router-container";

import { BrowserRouter } from "react-router-dom";

import "./App.css";

import { CarRentProvider } from "./context/CarRentProvider";

function App() {
  return (
    <BrowserRouter>
      <CarRentProvider>
        <RouterContainer />
      </CarRentProvider>
    </BrowserRouter>
  );
}

export default App;
