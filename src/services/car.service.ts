const GetCars = () => {
  return fetch("https://localhost:44359/api/cars").then((cars) => cars.json());
};

export { GetCars };
