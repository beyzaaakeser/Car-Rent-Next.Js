import React from 'react';

const Hero = () => {
  return (
    <div className=" h-[80vh] grid place-items-center p-5 bg-cover bg-center bg-[linear-gradient(#00000084,#00000084),url('../assets/images/bg.jpg')]">
      <div className="text-center flex flex-col gap-8">
        <p>Discover Rental Cars Near You</p>

        <h1 className="text-4xl md:text-5xl font-bold">
          Find the perfect car for you
        </h1>

        <p>Choose the Model That Suits You</p>
       
      </div>
    </div>
  );
};

export default Hero;
