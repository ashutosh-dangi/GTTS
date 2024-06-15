
import React, { useEffect, useState } from 'react'


const Ready = () => {
  const [currentAngle, setcurrentAngle] = useState(0);

 
  useEffect(()=>(
    window.addEventListener("mousemove",(e)=>{
       let X_coordinate = e.clientX;
       let Y_coordinate = e.clientY;

       let delta_x = X_coordinate - window.innerWidth/2;  
       let delta_y  = Y_coordinate - window.innerHeight/2;

       var angle = Math.atan2(delta_y,delta_x)*(180/Math.PI);  
       
       setcurrentAngle(angle-180);
       console.log(angle);

    })
  ))

  return (
    <div className='relative w-full bg-[#CDEA68] py-60 flex flex-col items-center rounded-tr-3xl rounded-tl-3xl' > 
        <div className='text-zinc-900'>
            <h1 className=' uppercase text-[12vw] font-bold tracking-[-0.07em] leading-none'>READY</h1>
        </div>
        <div className='text-zinc-900'>
            <h1 className=' uppercase text-[12vw] font-bold tracking-[-0.07em]  leading-none'>TO START</h1>
        </div>
        <div className='text-zinc-900'>
            <h1 className=' uppercase text-[12vw] font-bold tracking-tighter  leading-none'>THE PROJECT ?</h1>
        </div>
        <div className='ml-[2vw] mt-[2vw] w-[16vw] bg-zinc-900 text-white py-[1.3vw] px-[2.3vw] rounded-full flex items-center justify-between'>
                <h1 className='text-[1vw]'>START THE PROJECT</h1>
                <div className=' ml-[1.5vw] w-[0.5vw] h-[0.5vw] rounded-full bg-red-200'></div>
        </div>
        <div className='mr-[2vw] text-[1vw] translate-x-6 translate-y-2'>OR</div>
        <div className='ml-[2vw] mt-[1.5vw] w-[16vw]  text-black py-[1.1vw] px-[2.2vw] rounded-full border-[1.6px]  border-black flex items-center justify-between'>
                <h1 className='text-[0.8vw]'>HELLO@OCHI.DESIGN</h1>
                <div className=' ml-[1.5vw] w-[0.5vw] h-[0.5vw] rounded-full bg-black'></div>
        </div>
        <div className=' absolute  flex  gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                <div className='w-[15vw] h-[15vw] rounded-full flex items-center justify-center  bg-zinc-100'>
                    <div className='w-[9.3vw] h-[9.3vw] rounded-full relative  bg-zinc-900'>
                        <div style={{transform: ` translate(-50%,-50%) rotate(${currentAngle}deg)`}}  className= 'absolute Line w-full h-6  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                            <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
                <div className='w-[15vw] h-[15vw] rounded-full flex items-center justify-center bg-zinc-100'>
                    <div className='w-[9.3vw] h-[9.3vw] rounded-full  bg-zinc-900 relative'>
                        <div style={{transform: ` translate(-50%,-50%) rotate(${currentAngle}deg)`}} className='absolute Line w-full h-6  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                            <div className='w-[2vw] h-[2vw] rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
            </div>
        
        
        
    </div>
  )
}

export default Ready





