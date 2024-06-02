import { easeIn, motion } from 'framer-motion';
import React, { useState } from 'react'


const Featured = () => {
  
  const [card1Entered, setCard1Entered] = useState(false);
  const [card2Entered, setCard2Entered] = useState(false);

  const handleCard1Entered = () => {
    setCard1Entered(true);
  };

  const handleCard1Exited = () => {
    setCard1Entered(false); // Changed to false for exiting
  };

  const handleCard2Entered = () => {
    setCard2Entered(true);
  };

  const handleCard2Exited = () => {
    setCard2Entered(false); // Changed to false for exiting
  };

 

  
  return (
    <div className='w-full py-20 bg-[#e0e0e0]  border-[#a4a0a0]'>
        <div className='w-full py-[2.5vw] border-b-[2px] border-[#a4a0a0]'>
           <h1 className='ml-14 text-[3.5vw] font-["Neue_Montreal"] leading-[3.5vw] tracking-normal font-wide'>Featured Projects</h1>
        </div>
        <div className='relative flex  justify-between p-14  '>
            
            <div className='CardContainer w-[45.25vw] h-[40vw] '>
                
                <div className=' flex w-[4.2vw] items-center justify-between'>
                    <div className='w-3 h-3 rounded-full bg-zinc-900'></div>
                    <h1 className='text-black font-normal tracking-wide font-["Neue_Montreal"] text-s'>FYDE</h1>
                </div>
                <div onMouseEnter={handleCard1Entered} onMouseLeave={handleCard1Exited} className='Card mt-4 h-[93.3%] w-full bg-slate-500 rounded-xl overflow-hidden'>
                    <img className='h-full w-full bg-cover' src="src\components\Featured\Fyde_Illustration_Crypto_2-663x551.png"/>
                </div>
                
             </div>
            
            <div className='MiddleText absolute  text-[#ADC45B] font-["Founders Grotesk"] text-[6.8vw] font-bold top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none'>
                {card1Entered && <motion.h1 intial={{height: "0"}} animate={{height: "10vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}>FYDE</motion.h1>}
                {card2Entered && <motion.h1 intial={{height: "0"}} animate={{height: "10vw"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}}>VICE</motion.h1>}
            </div>
            
            <div className='CardContainer w-[45.25vw] h-[40vw] '>
                    
                <div className=' flex w-[4vw] items-center justify-between'>
                    <div className='w-3 h-3 rounded-full bg-zinc-900'></div>
                     <h1 className='text-black font-normal tracking-wider font-["Neue_Montreal"] text-s'>VISE</h1>
                </div>
                <div onMouseEnter={handleCard2Entered} onMouseLeave={handleCard2Exited}  className='Card mt-4 h-[93.3%] w-full bg-slate-500 rounded-xl overflow-hidden'>
                    <img className='h-full w-full bg-cover' src="src\components\Featured\Vise_front2-663x551.jpg"/>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Featured