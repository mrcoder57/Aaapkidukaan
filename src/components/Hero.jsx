import React from 'react'
import SectionWrapper from './hoc/SectionWrapper'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-100">
    <div className="hero-content flex-col lg:flex-row">
      <Tilt>
        <motion.div
        whileHover={{ rotate: 0.25 }}
        transition={{ duration: 0.25 }}
       className=' grid grid-cols-3 w-full green-pink-gradient p-[1px]
rounded-[20px] shadow-card ml-5 mb-3'
        >

      <img src="https://media1.thehungryjpeg.com/thumbs2/ori_3635558_ejvcjvnwylb8jauui059cp8rk4zdfdyx77lwsvio_shopping-logo-template.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
      </motion.div></Tilt><div>
        <h1 className="text-5xl font-bold">AapkiDukaan.com</h1>
        <p className="py-6">We are passionate about delivering exceptional products that enhance your lifestyle. At [Your Ecommerce Brand], we offer a curated selection of top-quality items that cater to your every need.</p>
        <a href="#products" className=" border border-blue-100 btn btn-ghost normal-case text-xl"> Start Shopping</a>
      </div>
    </div>
  </div>
  )
}

export default SectionWrapper(Hero,"about");