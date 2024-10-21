import Link from 'next/link'
import React from 'react'

const Line = () => {
  return (
    <main className='w-[100%]'>
      <div className=' w-[100%] bg-black max-w flex items-center justify-between'>
        <div className='flex-grow text-center'>
          <p className='text-white text-[8px] lg:text-[12px] md:text-[10px] px-2 py-2 capitalize tracking-wide'>
            Summer sale for all swim suites and free express delivery - off 50%! &nbsp;&nbsp;
            <span className='font-bold underline'>
              <Link href='#'>Shop Now</Link>
            </span>
          </p>
        </div>
        
        <div className='ml-auto px-2'>
          <select name="" id="" className='bg-black text-white outline-none'>
            <option value="English">English</option>
            <option value="Arabic">Arabic</option>
            <option value="Urdu">Urdu</option>
          </select>
        </div>    
      </div>
    </main>
  )
}

export default Line
