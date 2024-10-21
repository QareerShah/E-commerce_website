import React from 'react'
import {  BsCheckCircleFill } from 'react-icons/bs'
import { FaHeadphones, FaTruck } from 'react-icons/fa'

const IconSection = () => {
  return (
    <main className='w-[80%] mx-auto items-center my-11'>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
           
                        {/* icon-1  */}
                        <div className=' w-full h-[200px] px-[100px] py-[50px] flex flex-col justify-center items-center'>
            <div className='bg-gray-400 rounded-full p-2 w-16 h-16 flex justify-center items-center'>
           <div className='bg-black rounded-full p-2 w-12 h-12 flex justify-center items-center'>
          <FaTruck className='text-white text-lg' />
          </div>
          </div>
        <div className='mt-4 uppercase text-center'>
         <h2 className='font-bold text-[11px]'>Free and Fast Delivery</h2>
         <p className='text-[10px] whitespace-nowrap'>Free delivery for all orders over &#36;140</p>
      </div>
     </div>






                        {/* icon-2  */}
      <div className=' w-full h-[200px] px-[100px] py-[50px] flex flex-col justify-center items-center'>
            <div className='bg-gray-400 rounded-full p-2 w-16 h-16 flex justify-center items-center'>
           <div className='bg-black rounded-full p-2 w-12 h-12 flex justify-center items-center'>
          <FaHeadphones className='text-white text-lg' />
          </div>
          </div>
        <div className='mt-4 uppercase text-center'>
         <h2 className='font-bold text-[11px]'>24/7 Costumer Service</h2>
         <p className='text-[10px] whitespace-nowrap'>Friendly 24/7 costumer support</p>
      </div>
     </div>




                        {/* icon-3  */}
       <div className='w-full h-[200px] px-[100px] py-[50px] flex flex-col justify-center items-center'>
            <div className='bg-gray-400 rounded-full p-2 w-16 h-16 flex justify-center items-center'>
           <div className='bg-black rounded-full p-2 w-12 h-12 flex justify-center items-center'>
          <BsCheckCircleFill className='text-white text-lg' />
          </div>
          </div>
        <div className='mt-4 uppercase text-center'>
         <h2 className='font-bold text-[11px]'>Money Back Guarantee</h2>
         <p className='text-[10px] whitespace-nowrap'>We return money within 30 days</p>
      </div>
     </div>



      </div>
    </main>
  )
}

export default IconSection