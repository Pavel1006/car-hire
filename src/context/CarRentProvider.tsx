import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { GetCars } from "../services/car.service";
import { Car } from "../types/car.type";

type CarsRentContextValues = {
  cars: Car[];
  isLoggedIn: boolean;
  setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
};
export const CarRentContext = createContext<CarsRentContextValues>(
  {} as CarsRentContextValues
);

export type CarRentProviderProps = {
  children: ReactNode;
};
const CarRentProvider = (props: CarRentProviderProps) => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
  const contextValue = { cars, isLoggedIn, setIsLoggedIn };

  return (
    <CarRentContext.Provider value={contextValue}>
      {props.children}
    </CarRentContext.Provider>
  );
};

export { CarRentProvider };
