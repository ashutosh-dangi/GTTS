import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LandingPage from './components/LandingPage/LandingPage'
import Marquee from './components/Marquee/Marquee'
import Eyes from './components/Eyes/Eyes'
import Featured from './components/Featured/Featured'
import Cards from './components/Cards/Cards'
import Ready from './components/Ready/Ready'
import Footer from './components/Footer/Footer'
import LocomotiveScroll from 'locomotive-scroll';
import Vadio from './components/Vadio/Vadio'




function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='bg-[#e0e0e0] min-h-screen'>
        <Navbar/>
        <LandingPage/>
        <Marquee/>
        <Eyes/>
        <Featured/>
        <Vadio/>
        <Cards/>
        <Ready/>
        <Footer/>
        
    </div>
  )
}

export default App