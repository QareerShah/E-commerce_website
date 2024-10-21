import React from 'react'
import Image from 'next/image'

const Cart = () => {
  return (
    <main className='w-[90%] sm:w-[85%] lg:w-[80%] mx-auto'>
        <div>
            {/* Home & contact heading */}
            <div className='my-11'>
                <h1 className='text-sm md:text-[14px]'>
                    <span className='text-gray-400'>Home&nbsp;&nbsp;/</span>&nbsp;&nbsp;Cart
                </h1>
            </div>

            {/* Product headings */}
            <div className='grid grid-cols-2 md:grid-cols-4 justify-between items-center
              space-x-6 shadow w-full h-[50px] my-6'>
                <div className='ml-5 sm:ml-11'>Product</div>
                <div className='text-center'>Price</div>
                <div className='hidden md:block text-center'>Quantity</div>
                <div className='hidden md:block text-center'>Subtotal</div>
            </div>

            {/* LCD Monitor */}
            <div className='grid grid-cols-2 md:grid-cols-4 justify-between items-center mt-[40px] space-x-6 
              shadow w-full h-[auto] md:h-[70px] my-6 p-2 md:p-0'>
                <div className='flex items-center'>
                    <Image src="/images/img-3.png" alt='monitor-image' width={60} height={60} className='ml-2 md:ml-8'/>
                    <h2 className='text-[14px] ml-2'>LCD Monitor</h2>
                </div>
                <div className='text-center'>&#36;650</div>
                <div className='text-center md:block hidden'>
                    <input type="number" name='' id="" className='border border-black outline-none p-2 rounded-md text-[12px] w-[60px]' />
                </div>
                <div className='text-center md:block hidden'>&#36;650</div>
            </div>

            {/* H1 Gamepad */}
            <div className='grid grid-cols-2 md:grid-cols-4 justify-between items-center mt-[40px] space-x-6 
              shadow w-full h-[auto] md:h-[70px] my-6 p-2 md:p-0'>
                <div className='flex items-center'>
                    <Image src="/images/img-1.png" alt='monitor-image' width={60} height={60} className='ml-2 md:ml-8'/>
                    <h2 className='text-[14px] ml-2'>H1 Gamepad</h2>
                </div>
                <div className='text-center'>&#36;550</div>
                <div className='text-center md:block hidden'>
                    <input type="number" name='' id="" className='border border-black outline-none p-2 rounded-md text-[12px] w-[60px]' />
                </div>
                <div className='text-center md:block hidden'>&#36;1100</div>
            </div>

            {/* Buttons */}
            <div className='w-full grid grid-cols-2 mb-[30px] gap-6'>
                <div>
                    <button className='border border-gray-400 px-5 py-2 md:px-9 md:py-2 text-[12px] md:text-[14px] font-semibold'>
                        Return To Shop
                    </button>
                </div>

                <div className='flex justify-end'>
                    <button className='border border-gray-400 px-5 py-2 md:px-9 md:py-2 text-[12px] md:text-[14px] font-semibold'>
                        Update Cart
                    </button>
                </div>
            </div>

            {/* Coupon & Cart Summary */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 justify-between mt-[40px] mb-[50px]'>
                {/* Left: Coupon */}
                <div>
                    <div className='flex space-x-3 mb-6'>
                        <input type="text" name="" id="" placeholder='Coupon Code' className='outline-none text-start pl-4 md:pl-6 border border-gray-400 text-gray-600 rounded-sm py-2 text-[12px] md:text-[15px] font-semibold w-[200px] md:w-[250px]' />
                        <button className='text-white bg-red-500 hover:bg-red-600 rounded-sm px-5 py-2 text-[12px] md:text-[14px]'>
                            Apply Coupon
                        </button>
                    </div>
                </div>

                {/* Right: Cart Total */}
                <div className='flex justify-center md:justify-end lg:justify-center mb-[100px]'>
                    <div className='w-[280px] md:w-[400px] h-[auto] border-2 border-black p-4 md:p-8'>
                        <h2 className='text-[16px] md:text-[18px] font-bold'>Cart Total</h2>

                        <div className='flex my-3 justify-between border-b border-gray-400 items-center'>
                            <p className='text-[12px] md:text-[14px]'>Subtotal:</p>
                            <p className='text-[12px] md:text-[14px]'>&#36;1750</p>
                        </div>

                        <div className='flex my-3 justify-between border-b border-gray-400 items-center'>
                            <p className='text-[12px] md:text-[14px]'>Shipping</p>
                            <p className='text-[12px] md:text-[14px]'>Free</p>
                        </div>

                        <div className='flex my-3 justify-between items-center'>
                            <p className='text-[12px] md:text-[14px]'>Total:</p>
                            <p className='text-[12px] md:text-[14px]'>&#36;1750</p>
                        </div>

                        {/* Process to Checkout Button */}
                        <div className='justify-center flex mt-4'>
                            <button className='text-white bg-red-500 hover:bg-red-600 rounded-sm px-5 py-2 text-[12px] md:text-[14px]'>
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Cart
