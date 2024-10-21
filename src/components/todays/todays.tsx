import React from 'react';
import { FaArrowLeft, FaArrowRight, FaEye, FaHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import Image from 'next/image';

const Todays = () => {
  return (
    <main className='w-[80%] mx-auto border-b-2 border-slate-200'>
      <div className='items-center'>
        {/* Red Box and Todays Heading */}
        <div className='flex items-center'>
          <div className='box w-[20px] h-[40px] bg-red-500 mt-[100px] rounded-md'></div>
          <h2 className='ml-2 mt-[100px] text-red-500 font-semibold'>Todays</h2>
        </div>

        {/* Flash Sales and Timer */}
        <div className='lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 flex grid-cols-1 h-[60px] items-center space-x-1'>
          <div>
            <h2 className='font-bold lg:text-[25px] md:text-[25px] text-[18px] mt-6'>Flash Sales</h2>
          </div>
          
          <div className='lg:flex-row md:flex-row flex-col'>
            <div>
              <h2>Days &nbsp;&nbsp;&nbsp;&nbsp; Hours&nbsp;&nbsp;&nbsp;&nbsp; Minutes&nbsp;&nbsp;&nbsp;&nbsp; Seconds</h2>
            </div>
            <div>
              <h2 className='font-bold text-[25px] flex'>
                03 <span className='text-red-500'>&nbsp;:&nbsp;&nbsp;&nbsp;</span>23 
                <span className='text-red-500'>&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span>19 
                <span className='text-red-500'>&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</span>56
              </h2>
            </div>
          </div>

          <div></div>
          
          {/* Arrow Buttons with Space */}
          <div className='lg:ml-auto lg:items-center md:ml-0 m-0'>
         <div className='flex justify-end space-x-4 mt-5'> 
          <button className='rounded-full bg-slate-200 p-2'>
          <FaArrowLeft className='text-black' />
           </button>

          <button className='rounded-full bg-slate-200 p-2'>
           <FaArrowRight className='text-black' />
          </button>
          </div>
       </div>

        </div>

                                  {/* Card Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-5'>
          {/* Card 1 */}
          <div className='bg-white rounded-md flex flex-col justify-between w-full h-full'>
            <div className='bg-slate-200 p-3 flex flex-col flex-grow'>
              <div className='flex justify-between'>
                <div className='bg-red-500 rounded-md w-[40px] h-[20px] text-white text-[12px] text-center'>-40%</div>
                <div className='flex flex-col space-y-2'>
                  <div className='bg-white rounded-full p-1'> <FaHeart /> </div>
                  <div className='bg-white rounded-full p-1'> <FaEye /> </div>
                </div>
              </div>
              <Image src="/images/img-1.png" alt='controller' width={400} height={400} className='object-contain' />
            </div>
            <div className='p-3'>
              <h2 className='font-bold text-[15px]'>HAVT HV-G92 Gamepad</h2>
              <h2 className='mt-1 text-[14px] text-red-600 font-semibold'>
                &#36;120&nbsp;&nbsp;<del className='text-slate-500'>&#36;160</del>
              </h2>
              <div className='mt-1 flex text-yellow-400 gap-2 items-center'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                <h2 className='text-slate-500 text-[14px]'>(88)</h2>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='bg-white rounded-md flex flex-col justify-between w-full h-full'>
            <div className='bg-slate-200 p-3 flex flex-col flex-grow'>
              <div className='flex justify-between'>
                <div className='bg-red-500 rounded-md w-[40px] h-[20px] text-white text-[12px] text-center'>-40%</div>
                <div className='flex flex-col space-y-2'>
                  <div className='bg-white rounded-full p-1'> <FaHeart /> </div>
                  <div className='bg-white rounded-full p-1'> <FaEye /> </div>
                </div>
              </div>
              <Image src="/images/img-2.png" alt='controller' width={400} height={400} className='object-contain' />
            </div>
            <div className='p-3'>
              <h2 className='font-bold text-[15px]'>AK-900 wired Keyboard</h2>
              <h2 className='mt-1 text-[14px] text-red-600 font-semibold'>
                &#36;960&nbsp;&nbsp;<del className='text-slate-500'>&#36;1160</del>
              </h2>
              <div className='mt-1 flex text-yellow-400 gap-2 items-center'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-slate-400'/>
                <h2 className='text-slate-500 text-[14px]'>(75)</h2>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='bg-white rounded-md flex flex-col justify-between w-full h-full'>
            <div className='bg-slate-200 p-3 flex flex-col flex-grow'>
              <div className='flex justify-between'>
                <div className='bg-red-500 rounded-md w-[40px] h-[20px] text-white text-[12px] text-center'>-40%</div>
                <div className='flex flex-col space-y-2'>
                  <div className='bg-white rounded-full p-1'> <FaHeart /> </div>
                  <div className='bg-white rounded-full p-1'> <FaEye /> </div>
                </div>
              </div>
              <Image src="/images/img-3.png" alt='controller' width={400} height={400} className='object-contain' />
            </div>
            <div className='p-3'>
              <h2 className='font-bold text-[15px]'>IPS LCD Gaming Monitor</h2>
              <h2 className='mt-1 text-[14px] text-red-600 font-semibold'>
                &#36;370&nbsp;&nbsp;<del className='text-slate-500'>&#36;400</del>
              </h2>
              <div className='mt-1 flex text-yellow-400 gap-2 items-center'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                <h2 className='text-slate-500 text-[14px]'>(99)</h2>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className='bg-white rounded-md flex flex-col justify-between w-full h-full'>
            <div className='bg-slate-200 p-3 flex flex-col flex-grow'>
              <div className='flex justify-between'>
                <div className='bg-red-500 rounded-md w-[40px] h-[20px] text-white text-[12px] text-center'>-40%</div>
                <div className='flex flex-col space-y-2'>
                  <div className='bg-white rounded-full p-1'> <FaHeart /> </div>
                  <div className='bg-white rounded-full p-1'> <FaEye /> </div>
                </div>
              </div>
              <Image src="/images/img-4.png" alt='controller' width={400} height={400} className='object-contain' />
            </div>
            <div className='p-3'>
              <h2 className='font-bold text-[15px]'>S-Series Comfort Chair</h2>
              <h2 className='mt-1 text-[14px] text-red-600 font-semibold'>
                &#36;375&nbsp;&nbsp;<del className='text-slate-500'>&#36;400</del>
              </h2>
              <div className='mt-1 flex text-yellow-400 gap-2 items-center'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                <h2 className='text-slate-500 text-[14px]'>(99)</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className='flex justify-center my-10'>
          <button className='bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-sm text-[14px]'>
            View All Products
          </button>
        </div>
      </div>
    </main>
  );
};

export default Todays;
