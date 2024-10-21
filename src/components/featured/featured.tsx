import React from 'react'
import Image from 'next/image'

const Featured = () => {
  return (
    <main className='w-[80%] mx-auto items-center'>
           <div>
              {/* Red Box and Featured Heading */}
        <div className='flex items-center'>
          <div className='box w-[20px] h-[40px] bg-red-500 mt-[100px] rounded-md'></div>
          <h2 className='ml-2 mt-[100px] text-red-500 font-semibold'>Featured</h2>
        </div>
        
            {/* New Arrival Heading */}

            <div>
            <h2 className='font-bold lg:text-[25px] md:text-[25px] text-[18px] mt-6'>New Arrival</h2>
          </div>


                     {/* pictures */}

               <div className='lg:grid lg:grid-cols-2 md:grid md:grid-cols-2 grid grid-cols-1 justify-between gap-7 my-11 w-fit'>
                                {/* right side */}

                <div className='items-center'>
                  <Image src="/images/Frame-1.png" alt='Frame' width={523} height={500} /></div>


                              {/* left side */}

        <div className=' items-center flex flex-col gap-6'>

              {/* image 1 */}
        <div><Image src="/images/Frame-2.png" alt='Frame' width={524} height={400} /></div> 


        {/* containor  for the next two images */}
      <div className='flex gap-5 items-center' >
                       {/* image 2 */}
          <div><Image src="/images/Frame-3.png" alt='Frame' width={400} height={400} /></div>


            {/* image 3 */}
         <div><Image src="/images/Frame-4.png" alt='Frame' width={400} height={400} /></div>             

          </div>
         </div>       

             </div>



           </div>
    </main>
  )
}

export default Featured