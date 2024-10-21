import React from 'react';
import Image from 'next/image';


const Hero = () => {
  return (
    <main className='w-[80%] mx-auto'>
      <div className=" lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 grid grid-cols-1 bg-white">
        {/* Left side - Category selection */}
        <div className="border-r-2 border-slate-200">
          <ul className="text-center leading-9 lg:mt-8 md:mt-8 m-8 lg:ml-0 md:ml-0 ml-8">
            <li>
              <select name="" id="" className="outline-none">
                <option value="Womens Fashion">Womens Fashion</option>
                <option value="Western dresses">Western dresses</option>
                <option value="shoes">shoes</option>
                <option value="Jwelleries">Jwelleries</option>
                <option value="Perfumes">Perfumes</option>
              </select>
            </li>
            <li>
              <select name="" id="" className="outline-none">
                <option value="Mens Fashion">Mens Fashion</option>
                <option value="Watches">Watches</option>
                <option value="Mens Acesseries">Mens Acesseries</option>
                <option value="Shoes">Shoes</option>
                <option value="Mens Fashion">Mens Fashion</option>
                <option value="Dresses">Dresses</option>

              </select>
            </li>
            <li>Electronics</li>
            <li>Home & LifeStyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Babys & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>

        {/* Right side  */}
        <div className="col-span-3 items-center justify-center  ">
           
          <Image src="/images/hero-image.png" alt='iphone' width={800} height={500} 
          className='lg:mx-[70px] md:mx-[70px] mx-auto lg:mt-[60px] md:mt-[40px] mt-0 lg:w-[800] lg:h-[500] md:w-[300] md:h-[400]  '
          />


        </div>
      </div>
    </main>
  );
};

export default Hero;
