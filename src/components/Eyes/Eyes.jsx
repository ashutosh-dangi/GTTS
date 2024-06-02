import React, { useEffect, useState } from 'react'

const Eyes = () => {

    const [currentAngle, setcurrentAngle] = useState(0);

  // EXPLANATION OF EYE PUPIL MOVEMENT BASED ON MOVEMENT OF CURSOR 

  // dekho eyes ke andar ki putliyon ko agar cursor ki position ke basis pe move karana hai to naturally mujhe cursor ki real time position ka 
  //pata hona zaruri hai 
  // isliye maine yaha pe window object(yani puri browser viewport ) pe event listeneer laga diya ke jaise hi mera mousemove event ho
  // to cursor ke current coordinates ka info joki event object (e) mein stored hoga use fetch karlo 
  // current coordinates cursor ke mujhe aage chlke eye puil ko animate karne ke liye required angle calculation mein kaam ayega
  //USEEFFECT ke andar maine iss coordinates fetching funtion ko chlaya hai taki jab bhi meri eye component move hogi to naturally wo rerender hogi
  // aur har rerender ke saath mujhe apni cursor ki updated values chahiye so isliye USEEFFECT mein maine koyi array dependecy pass nhi kri 
  // isliye abb useeffect ke andar ka function har re render pr khud initialize hojayega which is what we needed 
  useEffect(()=>(
    window.addEventListener("mousemove",(e)=>{
       let X_coordinate = e.clientX;
       let Y_coordinate = e.clientY;

       let delta_x = X_coordinate - window.innerWidth/2;   // WINDOW.innerwidth/2 yani browser vieport ki width ka center point
       // aise hi window.innerheight ka matlab hai browser port ki height ka center point 
       // to iss cenetr ke x se - cursor ka x dedega x coordinate ka diff and delta y yani y ka difference 
       // dono hi delta distances kaam ayenge angle calculatekarne mien cursor ka center se taki 360 rotation ka pata chal paye
       let delta_y  = Y_coordinate - window.innerHeight/2;

       var angle = Math.atan2(delta_y,delta_x)*(180/Math.PI);  //  atan2(x,y) based on distance deta hai mujhe angle but ye angle return karta hai 
       // radians mein to ise degrees mein convert karne ke liye 180/3.14 se multiply kara hai wo isliye kyunki pi radians yani 180 degrees to 1 radian 
       //hua 180/pi degrees  aur x radians honge x * 180/pi degrees
       
       setcurrentAngle(angle-180);
       console.log(angle);

    })
  ))

  return (
    <div className='Eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed = "-0.7" style={{ backgroundSize: "110%"}} className='relative w-full h-full bg-[url("C:\javascript_and_react\react\7_ochi\src\components\Eyes\ochi_eyes.jpg")] bg-center bg-cover bg-150'>
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
                            <div className='w-6 h-6 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes