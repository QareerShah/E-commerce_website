import React from 'react'
import {  FaEye, FaHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import Image from 'next/image'

const ThisMonth = () => {
  return (
    <main className='w-[80%] mx-auto'>
              <div className='items-center'>

              <div className='flex items-center'>
          <div className='box w-[20px] h-[40px] bg-red-500 mt-[100px] rounded-md'></div>
          <h2 className='ml-2 mt-[100px] text-red-500 font-semibold'>This Month</h2>
        </div>

               {/* Best Selling Products */}

           <div className=' lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 flex grid-cols-1 h-[60px] items-center space-x-1'>
                                    {/* left side */}
               <div  className='  font-bold lg:text-[25px] md:text-[25px] text-[18px] whitespace-nowrap mt-6'><h2>Best Selling Products</h2></div>
                                    {/* right side */}
               <div className='  col-span-3'>
               <div className='lg:ml-auto lg:items-center md:ml-0 m-0'>
               <div className='flex justify-end space-x-4 mt-5'> 
               <div className='flex justify-center my-10 lg:ml-0 md:ml-0 ml-[200px]'>
          <button className='bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-sm text-[14px]'>
            View All
          </button>
        </div>
            </div>
           </div>
         </div>
     </div>    
    
    
                                {/* Card section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-[90px]'>

            
        
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
              <Image src="/images/img-5.png" alt='controller' width={400} height={400} className='object-contain' />
            </div>
            <div className='p-3'>
              <h2 className='font-bold text-[15px]'>The north coat</h2>
              <h2 className='mt-1 text-[14px] text-red-600 font-semibold'>
                &#36;260&nbsp;&nbsp;<del className='text-slate-500'>&#36;360</del>
              </h2>
              <div className='mt-1 flex text-yellow-400 gap-2 items-center'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                <h2 className='text-slate-500 text-[14px]'>(65)</h2>
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
              <Image src="/images/img-6.png" alt='controller' width={400} height={400} className='object-contain' />
            </div>
            <div className='p-3'>
              <h2 className='font-bold text-[15px]'>Gucci duffle bag</h2>
              <h2 className='mt-1 text-[14px] text-red-600 font-semibold'>
                &#36;960&nbsp;&nbsp;<del className='text-slate-500'>&#36;1160</del>
              </h2>
              <div className='mt-1 flex text-yellow-400 gap-2 items-center'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                <h2 className='text-slate-500 text-[14px]'>(65)</h2>
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
              <Image src="/images/img-7.png" alt='controller' width={400} height={400} className='object-contain' />
            </div>
            <div className='p-3'>
              <h2 className='font-bold text-[15px]'>RGB Liquid CPU Cooler</h2>
              <h2 className='mt-1 text-[14px] text-red-600 font-semibold'>
                &#36;160&nbsp;&nbsp;<del className='text-slate-500'>&#36;170</del>
              </h2>
              <div className='mt-1 flex text-yellow-400 gap-2 items-center'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                <h2 className='text-slate-500 text-[14px]'>(65)</h2>
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
              <Image src="/images/img-8.png" alt='controller' width={400} height={400} className='object-contain' />
            </div>
            <div className='p-3'>
              <h2 className='font-bold text-[15px]'>Small BookSelf</h2>
              <h2 className='mt-1 text-[14px] text-red-600 font-semibold'>
                &#36;360
              </h2>
              <div className='mt-1 flex text-yellow-400 gap-2 items-center'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                <h2 className='text-slate-500 text-[14px]'>(65)</h2>
              </div>
            </div>
          </div>
        
        
        
        
        
        
        
        
        
        </div>
    
    
    
    
     </div>
</main>
  )
}

export default ThisMonth