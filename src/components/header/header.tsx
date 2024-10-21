import Link from 'next/link';
import React from 'react';
import { FaHeart, FaSearch, FaShoppingCart, } from 'react-icons/fa';



const Header = () => {
  return (
    <header className="w-full mx-auto h-20 bg-white border-b-2 border-gray-200">
      <div className="flex flex-wrap justify-between items-center px-7 py-4">
        {/* Logo */}
        <div className="flex text-center">
          <h1 className="font-bold text-lg lg:text-2xl">
            <Link href="/">Exclusive</Link>
          </h1>
        </div>

        {/* Navigation Bar */}
        <nav>
          <ul className="flex space-x-2 md:space-x-4 lg:space-x-5 font-semibold">
            <li className="text-black hover:underline transition ease-linear duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="text-black hover:underline transition ease-linear duration-300">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="text-black hover:underline transition ease-linear duration-300">
              <Link href="/about">About</Link>
            </li>
            <li className="text-black hover:underline transition ease-linear duration-300">
              <Link href="/signUp">Sign Up</Link>
            </li>
          </ul>
        </nav>

        {/* Search Bar and Icons */}
        <div className="flex items-center space-x-2">
          <div className='flex'>
          <input
            type="text"
            placeholder="What are you looking for?"
            className="outline-none p-2 text-[11px] bg-slate-50 text-slate-400 lg:w-[150px] md:w-[150px] w-[100px]"
          />
          <div className="flex  justify-center items-center p-2  bg-slate-200 cursor-pointer ">
            <FaSearch  />
          </div>
        </div>
          {/* Heart Icon */}
          <div className="flex justify-center items-center p-2 cursor-pointer">
            <Link href='/wishlist'><FaHeart className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" aria-label="Favorites" /></Link>
          </div>

          {/* Cart Icon */}
          <div className="flex justify-center items-center p-2 cursor-pointer">
            <Link href="/cart"><FaShoppingCart className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" aria-label="Shopping Cart" /></Link>
          </div>

          
        </div>
      </div>
    </header>
  );
};

export default Header;
