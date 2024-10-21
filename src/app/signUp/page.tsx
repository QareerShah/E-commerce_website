import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const SignUp = () => {
  return (
    <main className="min-h-screen flex justify-center items-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl p-4 md:p-8">
        
        {/* Left Section */}
        <div className="flex justify-center items-center">
          <Image
            src="/images/signup.png"
            alt="Signupimage"
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
              <h1 className="text-3xl font-bold tracking-wide">Create an account</h1>
              <p className="text-sm mt-2">Enter your details below</p>
            </div>

            {/* Input fields */}
            <input
              type="text"
              placeholder="Name"
              className="w-full max-w-xs p-2 text-sm border-b border-gray-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email or Phone Number"
              className="w-full max-w-xs p-2 text-sm border-b border-gray-400 focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full max-w-xs p-2 text-sm border-b border-gray-400 focus:outline-none"
            />

            {/* Create Account Button */}
            <button className="w-full max-w-xs bg-red-500 hover:bg-red-600 text-white py-2 rounded text-sm">
              Create Account
            </button>

            {/* Sign Up With Google Button */}
            <button className="w-full max-w-xs flex items-center justify-center border border-gray-400 py-2 rounded hover:bg-gray-100 space-x-2">
              <Image src="/images/google-logo.png" alt="google logo" width={20} height={20} />
              <span className="text-sm">Sign Up With Google</span>
            </button>

            {/* Already have an account */}
            <p className="text-sm">
              Already have an account?&nbsp;&nbsp;&nbsp;
              <Link href="/login" className="underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default SignUp
