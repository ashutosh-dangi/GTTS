import { motion } from 'framer-motion'
import React from 'react'
import About from '../About/About'


const Marquee = () => {
  return (
    
    <div data-scroll  data-scroll-section data-scroll-speed ="0.4">
      <div  className='Marquee w-full py-28 bg-[#004D43] rounded-tr-3xl rounded-tl-3xl'>
       <div className='border-t-[1px] border-b-[1px] flex items-center  text-[#e0e0e0] whitespace-nowrap overflow-hidden '>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity,ease: "linear", duration: 8}} className='text-[24vw] uppercase font-["Founders Grotesk"] font-bold tracking-[-.089em] leading-none -mb-3 -mt-14 pr-20'>we are ochi</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity,ease: "linear", duration: 8}} className='text-[24vw] uppercase font-["Founders Grotesk"] font-bold tracking-[-.089em] leading-none -mb-3 -mt-14 pr-20'>we are ochi</motion.h1>
       </div>
      </div>
      <About/>
    </div>
  )
}

export default Marquee