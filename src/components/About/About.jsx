import React from 'react'

const About = () => {
  return (
    <div>
        <div data-scroll data-scroll-speed = "-0.1"className=' z-10 pt-24 pb-14  bg-[#CDEA68] rounded-tr-3xl  rounded-3xl text-black'>
            <p className='ml-14 text-[3.5vw] font-["Neue_Montreal"] leading-[3.5vw] tracking-wide font-light'>Ochi is a strategic partner for fast-growing tech <br/>businesses that need to raise funds, sell products,<br/> explain complex ideas, and hire great people.</p>

            <div className='h-[70vh] border-t-[3px] border-[#ADC45B] mt-20 flex justify-between p-4  '>
            <div>
                <h1 className='ml-10 text-[3.5vw] font-["Neue_Montreal"] leading-[3.5vw] tracking-wide font-light'>Our approach:</h1>
                <div className='ml-14 mt-5 w-[11.9vw] bg-zinc-900 text-white py-4 px-7 rounded-full flex items-center justify-between'>
                    <h1>READ MORE</h1>
                    <div className=' ml-5 w-2 h-2 rounded-full bg-red-200'></div>
                </div>
            </div>
            <div className=' mr-11 h-[33vw] w-[47vw] bg-[#ADC45B] rounded-2xl overflow-hidden'>
                <img src="src\components\About\ochi-person.jpg" className='h-full w-full bg-cover' />
            </div>
            </div>
        </div>
    </div>
  )
}

export default About



