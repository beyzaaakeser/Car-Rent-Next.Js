import React from 'react';
import { models } from '../utils/contants';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className=" h-[80vh] text-white grid place-items-center p-5 bg-cover bg-center bg-[linear-gradient(#00000084,#00000084),url('../assets/images/bg.jpg')]">
      <div className="text-center flex flex-col gap-8">
        <p>Discover Rental Cars Near You</p>

        <h1 className="text-4xl md:text-5xl font-bold">
          Find the perfect car for you
        </h1>

        <p>Choose the Model That Suits You</p>

        <div className="flex gap-4 justify-center flex-wrap">
          {models.map((model, key) => (
            <button
              key={key}
              className="px-3 py-1 rounded-full bg-gray-100/25 transition hover:bg-gray-500/25 flex gap-3 items-center"
            >
              <Image src={model.icon} alt={model.name} />
              {model.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
