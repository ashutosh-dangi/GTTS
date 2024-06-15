// import { motion } from 'framer-motion'
// import React from 'react'
// import About from '../About/About'


// const Marquee = () => {
//   return (
    
//     <div data-scroll  data-scroll-section data-scroll-speed ="0.4">
//       <div  className='Marquee w-full py-28 bg-[#004D43] rounded-tr-3xl rounded-tl-3xl '>
//        <div className='border-t-[1px] border-b-[1px] flex items-center  text-[#e0e0e0] whitespace-nowrap overflow-hidden '>
//             <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity,ease: "linear", duration: 8}} className='text-[24vw] uppercase font-["Founders Grotesk"] font-bold tracking-[-.089em] leading-none -mb-3 -mt-14 pr-20'>we are ochi</motion.h1>
//             <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity,ease: "linear", duration: 8}} className='text-[24vw] uppercase font-["Founders Grotesk"] font-bold tracking-[-.089em] leading-none -mb-3 -mt-14 pr-20'>we are ochi</motion.h1>
//        </div>
//       </div>
//       <About/>
//     </div>
//   )
// }

// export default Marquee


import { motion } from 'framer-motion';
import React from 'react';
import About from '../About/About';

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.4">
      <div className="Marquee w-full py-[7vw] bg-[#004D43] rounded-tr-[3vw] rounded-tl-[3vw]">
        <div className="border-t-[0.26vw] border-b-[0.26vw] flex items-center text-[#e0e0e0] whitespace-nowrap overflow-hidden">
          {["we are ochi", "we are ochi"].map((text, index) => (
            <motion.h1
              key={index}
              initial={{ x: "0" }}
              animate={{ x: "-100%" }}
              transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
              className="text-[24vw] uppercase font-['Founders Grotesk'] font-bold tracking-[-.089em] leading-none mb-[-0.78vw] mt-[-3.6vw] pr-[5vw]"
            >
              {text}
            </motion.h1>
          ))}
        </div>
      </div>
      <About />
    </div>
  );
};

export default Marquee;



