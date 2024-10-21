import React from 'react';
import Image from 'next/image';
import { FaDollarSign, FaGift,  FaHome, FaInstagram, FaLinkedinIn, FaMoneyBillWave, FaTwitter,  } from 'react-icons/fa';
import IconSection from '../../components/icon-section/iconSection';

const About = () => {
  return (
    <main className='w-full md:w-[80%] mx-auto'>
      <div>
        {/* Home & About heading */}
        <div className='my-11'>
          <h1 className='text-sm md:text-[14px]'>
            <span className='text-gray-400'>Home&nbsp;&nbsp;/</span>&nbsp;&nbsp;About
          </h1>
        </div>

        {/* Hero Section */}
        <section className='flex flex-col-reverse md:flex-row gap-8 items-center mx-5 md:mx-10 mb-[200px]'>
          {/* Left Side */}
          <div className='flex-1'>
            <h1 className='font-bold text-3xl md:text-4xl'>Our Story</h1>
            <p className='mt-4 text-sm md:text-base'>
              Launched in 2015, Exclusive is South Asias premier online shopping marketplace with
              an active presence in Bangladesh. Supported by a wide range of tailored marketing data
              and services solutions, Exclusive has 10,500 sellers and 300 brands, serving 3 million
              customers across the region.
            </p>
            <p className='mt-5 text-sm md:text-base'>
              Exclusive has more than 1 million products to offer, growing at a rapid pace. Exclusive
              offers a diverse assortment in categories ranging from consumer goods to electronics.
            </p>
          </div>
          {/* Right Side */}
          <div className='flex-1'>
            <Image 
              src="/images/about1.png" 
              alt="Hero-section-image" 
              width={500} 
              height={500} 
              className='w-full h-auto object-cover' 
            />
          </div>


                            
        </section>
                 
                 {/* Rating */}

        <section>
          
                                      {/* icons section */}

        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  items-center justify-between gap-9 my-10 '>
                             {/* icon 1 */}

                             <div className='w-full h-[200px] flex flex-col items-center justify-center px-[85px] py-[50px] border border-gray-300 cursor-pointer hover:bg-red-500 hover:text-white'>
  <div className='bg-gray-400 rounded-full p-2 w-16 h-16 flex justify-center items-center'>
    <div className='bg-black rounded-full p-2 w-12 h-12 flex justify-center items-center'>
      <FaHome className='text-white text-lg' />
    </div>
  </div>
  <div className='text-center mt-2'>
    <h2 className='font-bold text-[20px]'>10.5K</h2>
    <p className='text-[12px] whitespace-nowrap'>Sellers active our sites</p>
  </div>
</div>



                                      {/* icon 2 */}

                                      <div className='w-full h-[200px] flex flex-col items-center justify-center px-[85px] py-[50px] border border-gray-300 cursor-pointer hover:bg-red-500 hover:text-white'>
  <div className='bg-gray-400 rounded-full p-2 w-16 h-16 flex justify-center items-center'>
    <div className='bg-black rounded-full p-2 w-12 h-12 flex justify-center items-center'>
      <FaDollarSign className='text-white text-lg' />
    </div>
  </div>
  <div className='text-center mt-2'>
    <h2 className='font-bold text-[20px]'>33K</h2>
    <p className='text-[12px] whitespace-nowrap'>Monthly Production Sale</p>
  </div>
</div>


                                       {/* icon 3 */}
                                       <div className='w-full h-[200px] flex flex-col items-center justify-center px-[85px] py-[50px] border border-gray-300 cursor-pointer hover:bg-red-500 hover:text-white'>
  <div className='bg-gray-400 rounded-full p-2 w-16 h-16 flex justify-center items-center'>
    <div className='bg-black rounded-full p-2 w-12 h-12 flex justify-center items-center'>
      <FaGift className='text-white text-lg' />
    </div>
  </div>
  <div className='text-center mt-2'>
    <h2 className='font-bold text-[20px]'>45.5K</h2>
    <p className='text-[12px] whitespace-nowrap'>Costomer active in our sites</p>
  </div>
</div>

                                      {/* icon 4 */}
                                      <div className='w-full h-[200px] flex flex-col items-center justify-center px-[85px] py-[50px] border border-gray-300 cursor-pointer hover:bg-red-500 hover:text-white'>
  <div className='bg-gray-400 rounded-full p-2 w-16 h-16 flex justify-center items-center'>
    <div className='bg-black rounded-full p-2 w-12 h-12 flex justify-center items-center'>
      <FaMoneyBillWave className='text-white text-lg' />
    </div>
  </div>
  <div className='text-center mt-2'>
    <h2 className='font-bold text-[20px]'>25K</h2>
    <p className='text-[12px] whitespace-nowrap'>Annual Gross Sales in Our site</p>
  </div>
</div>

  </div> 
          </section>    


                              {/* Team */}
      
      <section>
        <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3  my-[150px] gap-10 justify-center items-center '>

                       {/* image 1 */}
    <div className=' w-full h-[450px]'>
  <div className=' w-full h-[300px] flex justify-center items-center'>
    <Image 
      src='/images/about2.png' 
      alt='about pic' 
      width={300} 
      height={300} 
      className='object-contain'
    />
  </div>
  <div><h2 className='mt-8 ml-5 text-2xl font-bold'>Tom Cruise</h2></div>
  <div><p className='mt-1 ml-5 '>Founder & Chairman</p></div>
  <div className='flex mt-2 ml-5 space-x-2'><FaTwitter /> <FaInstagram /> <FaLinkedinIn /></div>
</div>




                                         {/* image 2 */}
    <div className=' w-full h-[450px]'>
  <div className=' w-full h-[300px] flex justify-center items-center'>
    <Image 
      src='/images/about3.png' 
      alt='about pic' 
      width={300} 
      height={300} 
      className='object-contain'
    />
  </div>
  <div><h2 className='mt-8 ml-5 text-2xl font-bold'>Emma Watson</h2></div>
  <div><p className='mt-1 ml-5 '>Managing Director</p></div>
  <div className='flex mt-2 ml-5 space-x-2'><FaTwitter /> <FaInstagram /> <FaLinkedinIn /></div>
</div>
                                         {/* image 3 */}
    <div className=' w-full h-[450px]'>
  <div className=' w-full h-[300px] flex justify-center items-center'>
    <Image 
      src='/images/about4.png' 
      alt='about pic' 
      width={300} 
      height={300} 
      className='object-contain'
    />
  </div>
  <div><h2 className='mt-8 ml-5 text-2xl font-bold'>Will Smith</h2></div>
  <div><p className='mt-1 ml-5 '>Product Designer</p></div>
  <div className='flex mt-2 ml-5 space-x-2'><FaTwitter /> <FaInstagram /> <FaLinkedinIn /></div>
</div>
        </div>
      </section>

                    {/* Icon Section */}

           <IconSection />         


      </div>
    </main>
  );
};

export default About;
