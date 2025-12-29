import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import Aibot from "../componant/Aibot";

 
 

function Home() {

   useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  

  
  return (
    <div className="home bg-bg3 max-w-[100dvw] h-[90dvh] mt-[20px] ">

      <div className=" div1 bg-bg3 w-[100dvw] h-[90dvh] flex flex-col items-center justify-around ">
        
        
        < div className=" div2 p-3 md:px-20 min-w-screen h-[60dvh] flex flex-col gap-7 text-center md:text-start items-center justify-center md:items-start ">
          <h2 className=" text-3xl text-textColor overflow-hidden md:text-4xl lg:text-6xl font-bold " data-aos="zoom-in"> 
            Delight your Customers with
            <br /> <span className="text-primery">Gen-AI Powered Star Fusion</span>
          </h2>
          <p className="p text-xl md:text-2xl " data-aos="fade-up">
            Empowering businesses with innovative tech solutions — from cloud services to AI integration — driving growth, efficiency, and digital transformation.
          </p>
          <div className="btnDiv flex  gap-5 overflow-hidden p-2">
            <a className=" w-[150px] px-[15px] py-[5px] mt-2 text-[1.2em] bg-primery text-textColor2 hover:scale-[1.03] rounded-[10px] flex items-center gap-1 "
            href="/contact" data-aos="fade-up">
            Let's Build <ArrowRight/> </a>
            {/* <a className=" w-[170px] px-[15px] py-[5px] mt-2 text-[1.2em] border border-[#adff2f] bg-transparent text-white hover:scale-[1.03] rounded-[10px] flex items-center gap-1 "
            href="/contact" data-aos="fade-up">
            Let's Discuss <ArrowRight/> </a> */}

          </div>
          
        </div>


  <div className=" text-primery bg-textColor2 w-full h-[50px] flex flex-col justify-center ">
  <div className=" anime w-max flex flex-nowrap gap-11 text-[1.2em] font-bold px-5">
    <h2>Software Development</h2>
    <h2 className="text-textColor">Web Devlopment</h2>
    <h2> Enterprise Aplications</h2>
    <h2 className="text-textColor">Quality Engineering</h2>
    <h2>Cloud Solutions</h2>
    <h2 className="text-textColor">Cyber Sequrety</h2>
    <h2>IT Consulting</h2>
    <h2 className="text-textColor">Data Analytics</h2>

   <h2>Software Development</h2>
    <h2 className="text-textColor">Web Devlopment</h2>
    <h2>Enterprise Aplications</h2> 
    <h2 className="text-textColor">Quality Engineering</h2>
    <h2>Cloud Solutions</h2>
    <h2 className="text-textColor">Cyber Sequrety</h2>
    <h2>IT Consulting</h2>
    <h2 className="text-textColor">Data Analytics</h2>
    
  </div>
</div>
        

</div>
</div>


  );
}

export default Home;
