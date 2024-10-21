import React from 'react'
import { FaArrowLeft, FaArrowRight, FaEye, FaHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import Image from 'next/image'

const OurProduct = () => {
  return (
    <main className="w-[80%] mx-auto items-center p-0 m-0">
      <div>
        {/* Red Box and Heading */}
        <div className="flex items-center">
          <div className="box w-[20px] h-[40px] bg-red-500 rounded-md"></div>
          <h2 className="ml-2 text-red-500 font-semibold">Our Products</h2>
        </div>
  
             {/* left side */}
        <div className='grid grid-cols-2 h-[60px] items-center space-x-1'>     
                     
        <div>
            <h2 className='font-bold lg:text-[25px] md:text-[25px] text-[18px] mt-6'>Explore Our Products</h2>
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
        
                                     {/* Cards section */}

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10'>
          {/* Card 1 */}
          <div className='bg-white rounded-md flex flex-col justify-between w-full h-full'>
            <div className='bg-slate-200 p-3 flex flex-col flex-grow'>
                <div className='ml-auto space-y-2'>
                  <div className='bg-white rounded-full p-1'> <FaHeart /> </div>
                  <div className='bg-white rounded-full p-1'> <FaEye /> </div>
                </div>
             
              <Image src="/images/img-9.png" alt='controller' width={400} height={400} className='object-contain' />
            </div>
            <div className='p-3'>
              <h2 className='font-bold text-[15px]'>Breed Dog Dry Food</h2>
              <div className='flex'>
              <h2 className='mt-1 text-[14px] text-red-600 font-semibold'>
                &#36;100&nbsp;&nbsp;
              </h2>
              <div className='mt-1 flex text-yellow-400 gap-1 items-center'>
                <FaStar /><FaStar /><FaStar /><FaStar className='text-slate-400' /><FaStar className='text-slate-400'/>
                <h2 className='text-slate-500 text-[14px]'>(35)</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='bg-white rounded-md flex flex-col justify-between w-full h-full'>
            <div className='bg-slate-200 p-3 flex flex-col flex-grow'>
                <div className='ml-auto space-y-2'>
                  <div className='bg-white rounded-full p-1'> <FaHeart /> </div>
                  <div className='bg-white rounded-full p-1'> <FaEye /> </div>
                </div>
             
              <Image src="/images/img-10.png" alt='controller' width={400} height={400} className='object-contain' />
            </div>
            <div className='p-3'>
              <h2 className='font-bold text-[15px]'>CANON EOS DSLR Camera</h2>
              <div className='flex'>
              <h2 className='mt-1 text-[14px] text-red-600 font-semibold'>
                &#36;360&nbsp;&nbsp;
              </h2>
              <div className='mt-1 flex text-yellow-400 gap-1 items-center'>
                <FaStar /><FaStar /><FaStar /><FaStar  /><FaStar className='text-slate-400'/>
                <h2 className='text-slate-500 text-[14px]'>(95)</h2>
                </div>
              </div>
            </div>
          </div>


          {/* Card 3 */}
          <div className='bg-white rounded-md flex flex-col justify-between w-full h-full'>
            <div className='bg-slate-200 p-3 flex flex-col flex-grow'>
                <div className='ml-auto space-y-2'>
                  <div className='bg-white rounded-full p-1'> <FaHeart /> </div>
                  <div className='bg-white rounded-full p-1'> <FaEye /> </div>
                </div>
             
              <Image src="/images/img-11.png" alt='controller' width={400} height={400} className='object-contain' />
            </div>
            <div className='p-3'>
              <h2 className='font-bold text-[15px]'>ASUS FHD Gaming Laptop</h2>
              <div className='flex'>
              <h2 className='mt-1 text-[14px] text-red-600 font-semibold'>
                &#36;700&nbsp;&nbsp;
              </h2>
              <div className='mt-1 flex text-yellow-400 gap-1 items-center'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar/>
                <h2 className='text-slate-500 text-[14px]'>(325)</h2>
                </div>
              </div>
            </div>
          </div>


          {/* Card 4 */}
          <div className='bg-white rounded-md flex flex-col justify-between w-full h-full'>
            <div className='bg-slate-200 p-3 flex flex-col flex-grow'>
                <div className='ml-auto space-y-2'>
                  <div className='bg-white rounded-full p-1'> <FaHeart /> </div>
                  <div className='bg-white rounded-full p-1'> <FaEye /> </div>
                </div>
             
              <Image src="/images/img-12.png" alt='controller' width={400} height={400} className='object-contain' />
            </div>
            <div className='p-3'>
              <h2 className='font-bold text-[15px]'>Curology Product Set</h2>
              <div className='flex'>
              <h2 className='mt-1 text-[14px] text-red-600 font-semibold'>
                &#36;500&nbsp;&nbsp;
              </h2>
              <div className='mt-1 flex text-yellow-400 gap-1 items-center'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar className='text-slate-400'/>
                <h2 className='text-slate-500 text-[14px]'>(145)</h2>
                </div>
              </div>
            </div>
          </div>

        </div>                         


                           {/* 2nd card section */}

           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10'>

          {/* Card 1 */}
          <div className='bg-white rounded-md flex flex-col justify-between w-full h-full'>
            <div className='bg-slate-200 p-3 flex flex-col flex-grow'>
              <div className='flex justify-between'>
                <div className='bg-green-500 rounded-md w-[40px] h-[20px] text-white text-[12px] text-center'>NEW</div>
                <div className='flex flex-col space-y-2'>
                  <div className='bg-white rounded-full p-1'> <FaHeart /> </div>
                  <div className='bg-white rounded-full p-1'> <FaEye /> </div>
                </div>
              </div>
              <Image src="/images/img-13.png" alt='controller' width={400} height={400} className='object-contain' />
            </div>
            <div className='p-3'>
              <h2 className='font-bold text-[15px]'>Kids Electric Car</h2>
              <div className='flex'>
              <h2 className='mt-1 text-[14px] text-red-600 font-semibold'>
                &#36;960&nbsp;&nbsp;</h2>
              <div className='mt-1 flex text-yellow-400 gap-1 items-center'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                <h2 className='text-slate-500 text-[14px]'>(65)</h2>
                </div>
              </div>
            </div>
           </div>

          {/* Card 2 */}
          <div className='bg-white rounded-md flex flex-col justify-between w-full h-full'>
            <div className='bg-slate-200 p-3 flex flex-col flex-grow'>
                <div className='ml-auto space-y-2'>
                  <div className='bg-white rounded-full p-1'> <FaHeart /> </div>
                  <div className='bg-white rounded-full p-1'> <FaEye /> </div>
                </div>
             
              <Image src="/images/img-14.png" alt='controller' width={400} height={400} className='object-contain' />
            </div>
            <div className='p-3'>
              <h2 className='font-bold text-[15px]'>Jr.Zoom Soccer Cleats</h2>
              <div className='flex'>
              <h2 className='mt-1 text-[14px] text-red-600 font-semibold'>
                &#36;1160&nbsp;&nbsp;
              </h2>
              <div className='mt-1 flex text-yellow-400 gap-1 items-center'>
                <FaStar /><FaStar /><FaStar /><FaStar  /><FaStar />
                <h2 className='text-slate-500 text-[14px]'>(35)</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='bg-white rounded-md flex flex-col justify-between w-full h-full'>
            <div className='bg-slate-200 p-3 flex flex-col flex-grow'>
              <div className='flex justify-between'>
                <div className='bg-green-500 rounded-md w-[40px] h-[20px] text-white text-[12px] text-center'>NEW</div>
                <div className='flex flex-col space-y-2'>
                  <div className='bg-white rounded-full p-1'> <FaHeart /> </div>
                  <div className='bg-white rounded-full p-1'> <FaEye /> </div>
                </div>
              </div>
              <Image src="/images/img-15.png" alt='controller' width={400} height={400} className='object-contain' />
            </div>
            <div className='p-3'>
              <h2 className='font-bold text-[15px]'>GP11 Shooter USB Gamepad</h2>
              <div className='flex'>
              <h2 className='mt-1 text-[14px] text-red-600 font-semibold'>
                &#36;660&nbsp;&nbsp;</h2>
              <div className='mt-1 flex text-yellow-400 gap-1 items-center'>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                <h2 className='text-slate-500 text-[14px]'>(55)</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className='bg-white rounded-md flex flex-col justify-between w-full h-full'>
            <div className='bg-slate-200 p-3 flex flex-col flex-grow'>
                <div className='ml-auto space-y-2'>
                  <div className='bg-white rounded-full p-1'> <FaHeart /> </div>
                  <div className='bg-white rounded-full p-1'> <FaEye /> </div>
                </div>
             
              <Image src="/images/img-16.png" alt='controller' width={400} height={400} className='object-contain' />
            </div>
            <div className='p-3'>
              <h2 className='font-bold text-[15px]'>Quilted Satin Jacket</h2>
              <div className='flex'>
              <h2 className='mt-1 text-[14px] text-red-600 font-semibold'>
                &#36;660&nbsp;&nbsp;
              </h2>
              <div className='mt-1 flex text-yellow-400 gap-1 items-center'>
                <FaStar /><FaStar /><FaStar /><FaStar  /><FaStarHalfAlt/>
                <h2 className='text-slate-500 text-[14px]'>(55)</h2>
                </div>
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
  )
}

export default OurProduct
