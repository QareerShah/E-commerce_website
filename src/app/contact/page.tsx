import React from 'react';
import { FaPhone, FaRegEnvelope } from 'react-icons/fa';


const Contact = () => {
  return (
    <main className='w-full md:w-[80%] mx-auto'>
      <div>
        {/* Home & contact heading */}
        <div className='my-11'>
          <h1 className='text-sm md:text-[14px]'>
            <span className='text-gray-400'>Home&nbsp;&nbsp;/</span>&nbsp;&nbsp;Contact
          </h1>
        </div>

        {/* Contact */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-[200px] mt-[80px]'>
          {/* Left section */}
          {/* Top */}
          <div className='shadow-lg h-auto p-6 md:p-12'>
            <div className='flex space-x-4 space-y-2'>
              <div className='bg-red-500 h-[40px] w-[40px] flex justify-center items-center rounded-full'>
                <FaPhone style={{ transform: 'scaleX(-1)' }} className='text-white' />
              </div>
              <div>
                <h2 className='font-semibold'>Call To Us</h2>
              </div>
            </div>
            <div className='border-b-2 border-gray-300 py-4'>
              <div className='text-sm md:text-[13px]'>
                <p>We are available 24/7, 7 days a week.</p>
              </div>
              <div className='text-sm md:text-[13px] mt-3'>
                <p>Phone: +880161111222</p>
              </div>
            </div>
            {/* Bottom */}
            <div className='flex space-x-4 space-y-2 mt-4'>
              <div className='bg-red-500 h-[40px] w-[40px] flex justify-center items-center rounded-full'>
                <FaRegEnvelope className='text-white text-[18px]' />
              </div>
              <div>
                <h2 className='font-semibold'>Write To Us</h2>
              </div>
            </div>
            <div className='text-sm md:text-[12px] mt-3'>
              <p>Fill out our form and we will contact you within 24 hours.</p>
            </div>
            <div className='text-sm md:text-[12px] mt-3'>
              <p>Emails: customer@exclusive.com</p>
            </div>
            <div className='text-sm md:text-[12px] mt-3'>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>

          {/* Right section */}
          <div className='shadow-lg col-span-1 md:col-span-2 h-auto p-6 md:p-9'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-2'>
              <div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder='Your Name *'
                  className='bg-gray-100 h-[35px] p-2 pl-3 w-full outline-none'
                />
              </div>
              <div>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder='Your Email *'
                  className='bg-gray-100 h-[35px] p-2 pl-3 outline-none'
                />
              </div>
              <div>
                <input
                  type="phone"
                  name=""
                  id=""
                  placeholder='Your Phone *'
                  className='bg-gray-100 h-[35px] p-2 pl-3 outline-none'
                />
              </div>
            </div>

            {/* Message section */}
            <div className='mt-7'>
              <textarea
                placeholder='Your Message'
                rows={8}
                className='bg-gray-100 p-2 pl-3 outline-none pr-5 resize-none w-full'
              ></textarea>
            </div>

            {/* Button */}
            <div className='flex justify-end mt-3'>
              <button className='bg-red-500 hover:bg-red-600 text-white py-3 px-11 rounded-sm text-sm md:text-[14px]'>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
