
import React from 'react';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.4" className="h-[55vw] w-full bg-[#e0e0e0] text-black pt-[1vw]">
      <div className="Textarea mt-[11vw] px-[5vw]">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => (
          <div key={index} className={`Masker ${index === 1 && "flex items-center"}`}>
            {index === 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "8.4vw" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                className="h-[8vw] w-[8.4vw] bg-[#a6a3a3] mt-[1.8vw] rounded-lg mb-[0.1vw] mr-[0.3vw] overflow-hidden"
              >
                <img src="src/components/LandingPage/ochi_logo.jpg" className="bg-cover h-full w-full" />
              </motion.div>
            )}
            <h1 className='font-["Founders Grotesk"] uppercase text-[7.4vw] font-bold tracking-tighter leading-[5.8vw]'>{item}</h1>
          </div>
        ))}
      </div>

      <div className="border-t-[0.2vw] mt-[8vw] border-[#a6a3a3] flex justify-between items-center py-[0.2vw] px-[3.5vw]">
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
          <p key={index} className="font-normal tracking-wide text-[1.2vw]">{item}</p>
        ))}
        <div className="ButtonArea flex">
          <button className="mt-[0.5vw] font-normal px-[1.5vw] py-[0.5vw] rounded-full border-[0.2vw] border-zinc-500 text-[1vw]">
            START THE PROJECT
          </button>
          <button className="mt-[0.5vw] font-normal mx-[0.5vw] px-[0.5vw] py-[0.5vw] rounded-full border-[0.2vw] border-zinc-500 text-[1vw]">
            <ArrowOutwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;