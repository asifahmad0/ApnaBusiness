import { useState } from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import WhyUs from './pages/WhyUs'
import Services from './pages/Services'
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
      
      
    </>
  )
}

export default App
