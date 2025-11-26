import { useState } from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import WhyUs from './pages/WhyUs'
import Services from './pages/Services'
import Footer from './pages/Footers'
import ProjectsSection from './pages/Projects'
import VideoSection from './componant/VideoSec'
import ReviewSection from './pages/Reviw'



function App() {
  

  return (
    <>
      <Home/>
      <WhyUs/>
      <VideoSection/>
      <About/>
      <Services/>
      <ProjectsSection/>
      <Contact/>
      <ReviewSection/>
      <Footer/>
      
    </>
  )
}

export default App
