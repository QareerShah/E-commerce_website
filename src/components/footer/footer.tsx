import React from 'react'
import {  FaFacebookF, FaInstagram, FaLinkedin, FaPaperPlane, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-[100%] pt-[5rem] pb-[5rem] bg-black '>
        <div className='w-[80%] pb-[2rem] mx-auto grid
       grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[3rem] items-start text-white'>

                         {/* 1st part */}
  <div>
  <div>
    <h2 className='text-2xl font-semibold'>Exclusive</h2>
  </div>
  <p className='mt-4 font-medium'>Subscribe</p>
  <p className='text-white opacity-80 whitespace-nowrap mt-4 text-[13px]'>Get 10% off your first order</p>
  <div className=' mt-3 flex'>
    <input 
      type="email" 
      placeholder='Enter Your Email' 
      className='mt-4 p-4 w-[130px] h-[30px] text-[12px] tracking-wide outline-none border-y border-l border-white bg-black text-white' 
      />
      <div className='mt-4 border-y border-r border-white h-[34px] p-2'>
      <FaPaperPlane className='text-white cursor-pointer' />
      </div>
  </div>
</div>


                         {/* 2nd part*/}
                 <div>
                      <h2 className='font-medium'>Support</h2>
                      <p className='text-white opacity-80 whitespace-nowrap mt-4 text-[13px]'>111 Bijoy Sarani,Dhaka,</p>
                      <p className='text-white opacity-80 whitespace-nowrap  text-[13px]'>DH 1515, Bangladesh.</p>
                      <p className='text-white opacity-80 whitespace-nowrap mt-4 text-[13px]'>exclusive@gmail.com</p>
                      <p className='text-white opacity-80 whitespace-nowrap mt-4 text-[13px]'>+88015-88888-9999</p>
                 </div>




                       {/* 3rd part*/}
                 <div>
                      <h2 className='font-medium'>Account</h2>
                      <p className='text-white opacity-80 whitespace-nowrap mt-4 text-[13px]'>My Account</p>
                      <p className='text-white opacity-80 whitespace-nowrap mt-4 text-[13px]'>Login / Register</p>
                      <p className='text-white opacity-80 whitespace-nowrap mt-4 text-[13px]'>Cart</p>
                      <p className='text-white opacity-80 whitespace-nowrap mt-4 text-[13px]'>Wishlist</p>
                      <p className='text-white opacity-80 whitespace-nowrap mt-4 text-[13px]'>Shop</p>
                 </div>



                     {/* 4th part*/}
               <div>
                      <h2 className='font-medium'>Quick Link</h2>
                      <p className='text-white opacity-80 whitespace-nowrap mt-4 text-[13px]'>Privacy Policy</p>
                      <p className='text-white opacity-80 whitespace-nowrap mt-4 text-[13px]'>Terms Of Use</p>
                      <p className='text-white opacity-80 whitespace-nowrap mt-4 text-[13px]'>FAQ</p>
                      <p className='text-white opacity-80 whitespace-nowrap mt-4 text-[13px]'>Contact</p>
                 </div>



                        {/* 5th part */}
                 <div>
                  <h2 className='font-medium'>Download App</h2>
                  <p className='text-white opacity-70 whitespace-nowrap mt-4 text-[11px]'>save &#36;3 With App New User Only </p>
                                        {/* images grid */}
                    <div className=' grid grid-cols-2 grid-rows-2  mt-3'>
                                      {/* image 1 */}
                      <div className=' row-span-2'>
                           <Image src="/images/qr.png" alt='footer1' width={70} height={100}/>
                      </div>
                                      {/* image 2 */}
                      <div className=' row-span-2'>
                      <Image src="/images/google-and-app-store.png" alt='footer2' width={100} height={100} className='h-[70px] w-fit' /> 
                      </div>
                                     {/* icons */}
                       <div className='flex mt-3 space-x-2'>
                        <FaFacebookF /> <FaTwitter /> <FaInstagram /> <FaLinkedin />
                       </div>
                    </div>
                 </div>
                 

       </div>

    </footer>
  )
}

export default Footer