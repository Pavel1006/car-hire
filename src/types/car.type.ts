export type Car = {
  fuel: string;
  body: string;
  photos: Photo[];
  brand: string;
  color: string;
  fuelId: number;
  transmissionId: number;
  carBodyId: number;
  fabricationYear: string;
  registrationNumber: string;
  model: string;
  numberOfSeats: number;
  numberOfDoors: number;
  airCoditioning: boolean;
  pricePerDay: number;
  id: number;
};

type Photo = {
  id: number;
  cardId: number;
  path: string;
  priority: number;
};
