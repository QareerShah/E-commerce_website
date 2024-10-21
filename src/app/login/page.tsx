import React from 'react'
import Image from 'next/image'


const Login = () => {
  return (
    <main className="min-h-screen flex justify-center items-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl p-4 md:p-8">
        
        {/* Left Section */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/signup.png"
            alt="loginimage"
            width={700}
            height={500}
            className="object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center p-4 w-full space-y-4">
            
            {/* Heading */}
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-wider">Login to Exclusive</h1>
              <p className="text-sm mt-2 mb-4">Enter your details below</p>
            </div>

            {/* Input fields */}
          
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full   max-w-xs p-2 text-sm border-b border-gray-400 focus:outline-none "
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full max-w-xs p-2 text-sm border-b border-gray-400 focus:outline-none"
            />

            {/* Create Account Button */}
            <div className=' flex  gap-[110px] '>
          <button className= ' mt-4  bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded-sm text-[12px]'>
            Login
          </button>
          <p className="text-[13px] mt-5 text-red-500 hover:text-red-600 whitespace-nowrap ml-[20px] cursor-pointer">
              Forget Password?&nbsp;&nbsp;&nbsp;</p>
        </div>

            
          </div>
        </div>
      </div>
    </main>
  )
}

export default Login
