import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className={`text-white absolute w-full`}>
      <div className=" container flex justify-between items-center w-full">
        <h1 className="font-bold text-2xl md:text-3xl">
          <Link href="/home">DRIVE</Link>
        </h1>
        <nav className="text-sm md:text-base flex gap-2 md:gap-4">
          <Link href="/">Explore</Link>
          <Link href="/orders">Orders</Link>
          <Link href="/">About Us</Link>
          <Link href="/" className="max-md:hidden">
            Vehicle Budget Range
          </Link>
        </nav>
        <div className="flex gap-4 ">
          <button className="max-md:hidden">Contact</button>
          <button className="bg-white text-sm md:text-base text-black rounded-full px-4 py-1 text-nowrap transition hover:bg-gray-100">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
