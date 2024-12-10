import { CarType, OrderType } from './types';

type DetailRes = Promise<{
  message: string;
  vehicle: CarType;
}>;
export const getDetail = async (id: string): DetailRes => {
  const res = await fetch(`http://localhost:3000/api/vehicles/${id}`);
  if (!res.ok) throw new Error('Detail data could not be obtained');
  return res.json();
};

type CarsRes = Promise<{
  message: string;
  data: CarType[];
}>;

export const getCars = async (): CarsRes => {
  const res = await fetch('http://localhost:3000/api/vehicles');

  if (!res.ok) {
    throw new Error('An error occurred while fetching vehicle information.');
  }
  return res.json();
};

type OrderRes = Promise<{
  text: string;
  orders: OrderType[];
}>;

export const getOrders = async (): OrderRes => {
  const res = await fetch('http://localhost:3000/api/orders');

  if (!res.ok) {
    throw new Error('An error occurred while fetching orders information.');
  }
  return res.json();
};
