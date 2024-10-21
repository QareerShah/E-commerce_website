import React from 'react'
import Hero from '../hero/hero'
import Todays from '../todays/todays'
import Catogries from '../catogries/catogries'
import ThisMonth from '../thisMonth/thisMonth'
import BlackPic from '../black-pic/black-pic'
import OurProduct from '../our-products/products'
import Featured from '../featured/featured'
import IconSection from '../icon-section/iconSection'



const Home = () => {
  return (
    <div>
      <Hero />
      <Todays />
      <Catogries />
      <ThisMonth />
      <BlackPic />
      <OurProduct />
      <Featured />
      <IconSection />
      
      
    </div>
  )
}

export default Home