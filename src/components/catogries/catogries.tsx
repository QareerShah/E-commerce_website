import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'

const Catogries = () => {
  return (
    <main className='w-[80%] mx-auto border-b-2 border-slate-200 '>
        <div className='items-center'>
         {/* Red Box and Catogries Heading */}
         <div className='flex items-center'>
          <div className='box w-[20px] h-[40px] bg-red-500 mt-[100px] rounded-md'></div>
          <h2 className='ml-2 mt-[100px] text-red-500 font-semibold'>Catogries</h2>
        </div>

                   {/* left side */}
        <div className='grid grid-cols-2 h-[60px] items-center space-x-1'>     
                     
                     <div>
                         <h2 className='font-bold lg:text-[25px] md:text-[25px] text-[18px] mt-6'>Browse by Catogory</h2>
                       </div>
             
             
                                    {/* right side   */}
             
                      <div className='items-center'>
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
      
{/* Icons section */}
<div className='lg:grid lg:grid-cols-6 md:grid md:grid-cols-3 grid grid-cols-2 items-center justify-between gap-4 my-10'>
          {/* Icon 1 */}
          <div className='w-full h-40 items-center justify-center p-10 border border-gray-300 cursor-pointer hover:bg-red-500'>
            <div className='mx-6'>
              <Image src="/images/smartphone.png" alt="icon-1" width={40} height={40} />
            </div>
            <p className='mx-4 my-5'>Phones</p>
          </div>

          {/* Icon 2 */}
          <div className='w-full h-40 items-center justify-center p-10 border border-gray-300 cursor-pointer hover:bg-red-500'>
            <div className='mx-6'>
              <Image src="/images/monitor.png" alt="icon-1" width={40} height={40} />
            </div>
            <p className='mx-1 my-5'>Computers</p>
          </div>

          {/* Icon 3 */}
          <div className='w-full h-40 items-center justify-center p-10 border border-gray-300 cursor-pointer hover:bg-red-500'>
            <div className='mx-6'>
              <Image src="/images/smartwatch.png" alt="icon-1" width={40} height={40} />
            </div>
            <p className='mx-1 my-5'>SmartWatch</p>
          </div>

          {/* Icon 4 */}
          <div className='w-full h-40 items-center justify-center p-10 border border-gray-300 cursor-pointer hover:bg-red-500'>
            <div className='mx-6'>
              <Image src="/images/camera.png" alt="icon-1" width={40} height={40} />
            </div>
            <p className='mx-4 my-5'>Camera</p>
          </div>

          {/* Icon 5 */}
          <div className='w-full h-40 items-center justify-center p-10 border border-gray-300 cursor-pointer hover:bg-red-500'>
            <div className='mx-6'>
              <Image src="/images/headphones.png" alt="icon-1" width={40} height={40} />
            </div>
            <p className='mx-1 my-5'>HeadPhones</p>
          </div>

          {/* Icon 6 */}
          <div className='w-full h-40 items-center justify-center p-10 border border-gray-300 cursor-pointer hover:bg-red-500'>
            <div className='mx-6'>
              <Image src="/images/game-boy.png" alt="icon-1" width={40} height={40} />
            </div>
            <p className='mx-4 my-5'>Gaming</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Catogries;