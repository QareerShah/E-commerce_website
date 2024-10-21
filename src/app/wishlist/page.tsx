import React from 'react'
import Image from 'next/image'
import { FaEye, FaHeart, FaStar, FaStarHalfAlt, FaTrash } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import Link from 'next/link'

const WishList = () => {
  return (
    <main className='w-[80%] mx-auto '>
                     {/* 1st heading */}
             <div className='flex my-10 items-center'>
                <h1>WishList  (4)</h1>
                <div className='ml-auto'>
                    <button className='text-[12px] border border-black px-9 py-2 hover:text-white hover:bg-red-600 '>
                    Move All To Bag
                    </button>
                </div>
             </div>


             <div className='grid grid-cols-4 gap-8 justify-between items-center '>
                           {/* card 1 */}
     <div className='w-full h-[300px] '>
      <div className='relative bg-slate-200 h-[200px] p-4 flex items-center justify-center'>
        
        {/* Discount badge */}
        <div className='absolute top-2 left-2 w-[40px] h-[20px] bg-red-500 rounded-md text-white flex justify-center items-center'>
          <p className='text-[11px]'>-35%</p>
        </div>
        
        {/* Delete icon */}
        <div className='absolute top-2 right-2 bg-white p-2 rounded-full'>
          <FaTrash className='text-[12px] ' />
        </div>

        {/* Image */}
        <div className='flex justify-center'>
          <Image src="/images/img-6.png" alt='bag-image' width={200} height={200} className='object-contain' />
        </div>
      </div>

                   {/* Buttons */}
                   <Link href="/cart">
                    <button className='bg-black w-full h-[30px] flex items-center justify-center space-x-3'>
                        <FaCartShopping className='text-white' />
                        <span className='text-white text-[11px]'>Add to Cart</span>
                    </button>
                    </Link>

                  <div>
                    <h2 className='text-[13px] font-semibold mt-2' >Gucci duffle bag</h2>
                 </div>  
                 <div>
                    <h2 className='text-[13px] text-red-500 font-semibold mt-1' >
                        &#36;960 &nbsp;&nbsp;<span className='text-gray-700'><del>1160</del></span></h2>
                 </div>
    </div>




    
                           {/* card 2 */}
     <div className='w-full h-[300px] '>
      <div className='relative bg-slate-200 h-[200px] p-4 flex items-center justify-center'>
        
        {/* Discount badge */}
        <div className='absolute top-2 left-2 w-[40px] h-[20px] bg-red-500 rounded-md text-white flex justify-center items-center'>
          <p className='text-[11px]'>-35%</p>
        </div>
        
        {/* Delete icon */}
        <div className='absolute top-2 right-2 bg-white p-2 rounded-full'>
          <FaTrash className='text-[12px] ' />
        </div>

        {/* Image */}
        <div className='flex justify-center'>
          <Image src="/images/img-7.png" alt='bag-image' width={200} height={200} className='object-contain' />
        </div>
      </div>

                   {/* Buttons */}
                   <Link href="/cart">
                    <button className='bg-black w-full h-[30px] flex items-center justify-center space-x-3'>
                        <FaCartShopping className='text-white' />
                        <span className='text-white text-[11px]'>Add to Cart</span>
                    </button>
                    </Link>

                  <div>
                    <h2 className='text-[13px] font-semibold mt-2' >Gucci duffle bag</h2>
                 </div>  
                 <div>
                    <h2 className='text-[13px] text-red-500 font-semibold mt-1' >
                        &#36;960 &nbsp;&nbsp;<span className='text-gray-700'><del>1160</del></span></h2>
                 </div>
    </div>


    
                           {/* card 3 */}
     <div className='w-full h-[300px] '>
      <div className='relative bg-slate-200 h-[200px] p-4 flex items-center justify-center'>
        
        {/* Discount badge */}
        <div className='absolute top-2 left-2 w-[40px] h-[20px] bg-red-500 rounded-md text-white flex justify-center items-center'>
          <p className='text-[11px]'>-35%</p>
        </div>
        
        {/* Delete icon */}
        <div className='absolute top-2 right-2 bg-white p-2 rounded-full'>
          <FaTrash className='text-[12px] ' />
        </div>

        {/* Image */}
        <div className='flex justify-center'>
          <Image src="/images/img-15.png" alt='bag-image' width={200} height={200} className='object-contain' />
        </div>
      </div>

                   {/* Buttons */}
                   <Link href="/cart">
                    <button className='bg-black w-full h-[30px] flex items-center justify-center space-x-3'>
                        <FaCartShopping className='text-white' />
                        <span className='text-white text-[11px]'>Add to Cart</span>
                    </button>
                    </Link>

                  <div>
                    <h2 className='text-[13px] font-semibold mt-2' >Gucci duffle bag</h2>
                 </div>  
                 <div>
                    <h2 className='text-[13px] text-red-500 font-semibold mt-1' >
                        &#36;960 &nbsp;&nbsp;<span className='text-gray-700'><del>1160</del></span></h2>
                 </div>
    </div>


    
                           {/* card 1 */}
     <div className='w-full h-[300px] '>
      <div className='relative bg-slate-200 h-[200px] p-4 flex items-center justify-center'>
        
        {/* Discount badge */}
        <div className='absolute top-2 left-2 w-[40px] h-[20px] bg-red-500 rounded-md text-white flex justify-center items-center'>
          <p className='text-[11px]'>-35%</p>
        </div>
        
        {/* Delete icon */}
        <div className='absolute top-2 right-2 bg-white p-2 rounded-full'>
          <FaTrash className='text-[12px] ' />
        </div>

        {/* Image */}
        <div className='flex justify-center'>
          <Image src="/images/img-16.png" alt='bag-image' width={200} height={200} className='object-contain' />
        </div>
      </div>

                   {/* Buttons */}
                   <Link href="/cart">
                    <button className='bg-black w-full h-[30px] flex items-center justify-center space-x-3'>
                        <FaCartShopping className='text-white' />
                        <span className='text-white text-[11px]'>Add to Cart</span>
                    </button>
                    </Link>

                  <div>
                    <h2 className='text-[13px] font-semibold mt-2' >Gucci duffle bag</h2>
                 </div>  
                 <div>
                    <h2 className='text-[13px] text-red-500 font-semibold mt-1' >
                        &#36;960 &nbsp;&nbsp;<span className='text-gray-700'><del>1160</del></span></h2>
                 </div>
    </div>


             </div>


          <div></div>
          <div className='flex items-center'>
          <div className='box w-[20px] h-[40px] bg-red-500 mt-[100px] rounded-md'></div>
          <h2 className='ml-2 mt-[100px] text-red-500 font-semibold'>Just For You</h2>
        
        
          <button className= 'mt-[70px] ml-auto bg-white hover:bg-red-600 border-2 hover:text-white border-gray-400 text-black py-3 px-8 rounded-sm text-[14px]'>
            See All
          </button>
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

        
    </main>
  )
}

export default WishList