import { createContext, ReactNode, useEffect, useState } from "react";

import { GetCars } from "../services/car.service";
import { Car } from "../types/car.type";

type CarsRentContextValues = {
  cars: Car[];
};
export const CarRentContext = createContext<CarsRentContextValues>(
  {} as CarsRentContextValues
);

export type CarRentProviderProps = {
  children: ReactNode;
};
const CarRentProvider = (props: CarRentProviderProps) => {
  const [cars, setCars] = useState<Car[]>([]);
  const fetchCars = async () => {
    try {
      const carResponse = await GetCars();
      setCars(carResponse as any);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCars();
  }, []);
  const contextValue = { cars };

  return (
    <CarRentContext.Provider value={contextValue}>
      {props.children}
    </CarRentContext.Provider>
  );
};

export { CarRentProvider };
