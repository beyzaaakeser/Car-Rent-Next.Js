'use client';
import { useState } from 'react';
import { CarType } from '../utils/types';
import Loader from './Loader';

type Props = {
  car: CarType;
};

const RentButton = ({ car }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(car);
  const handleClick = () => {
    setIsLoading(true);
    fetch(`http://localhost:3000/api/checkout`, {
      method: 'POST',
      body: JSON.stringify(car),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.href = data.url;
      })
      .finally(() => setIsLoading(false));
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-amber-600  w-full text-center p-2 rounded-lg text-white font-bold transition hover:bg-amber-800 mt-5"
      >
        {isLoading ? <Loader /> : <span> Rent a Car</span>}
      </button>
    </div>
  );
};

export default RentButton;
