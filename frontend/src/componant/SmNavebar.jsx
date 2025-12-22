import React, { useState } from "react";

function SmNavebar() {

  const [isOpen, setIsOpen] = useState(false)
  


  return (
    <div className={`sm_nave fixed z-[9999] w-[100dvw] h-[60px] flex  lg:flex-row items-center  justify-between px-17  ${isOpen? "h-screen flex-col": "h-[50px] overflow-hidden"} `}>

      <div className="logo font-[monospace] p-1 text-xl lg:text-2xl font-bold ">Apna<span className="span">Business</span></div>
      

      {/* Menu Links */}
      <ul
        className={`absolute md:opacity-100 md:translate-y-0 left-0 w-full flex flex-col items-center gap-7 overflow-hidden transition-all duration-200 ease-in-out md:static md:flex md:flex-row md:gap-8 md:w-auto ${
          isOpen ? "translate-y-0 opacity-100 top-[150px]" : "opacity-0 -translate-y-10"
        }`}
      >
            <li className=' relative py-[3px] text-white mt-2'> <span className='absolute duretion-200'></span><a href="/">Home</a></li>
            <li className=' relative py-[3px] text-white mt-2'> <span className='absolute duretion-200'></span><a href="/about">About</a></li>
            <li className=' relative py-[3px] text-white'> <span className='absolute duretion-200'></span><a href="/service">Services</a></li>
            {/* <li className=' relative py-[3px] text-white'> <span className='absolute duretion-200'></span><a href="/product">Product</a></li> */}
            <li className=' btn border relative py-[3px] cursor-pointer text-black rounded-[10px] mb-2 '> <a className=' ' href="/contact">Contact</a></li>
      </ul>

      <button
        className={`border z-[99999999] fixed right-5 md:hidden  p-2 rounded-full hover:bg-primary-50 transition-all duration-200 cursor-pointer
        border border-transparent hover:shadow-md transform-none ${isOpen? 'top-1':''}`}
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        tabIndex="0"
        onClick={() => setIsOpen(!isOpen)}>

        <div className="w-6 h-5 flex flex-col justify-between overflow-hidden">
          <span className={`w-full h-0.5 bg-white rounded-full transition-all duretion-500 ${isOpen ? "rotate-55 translate-y-2" : ""}`}></span>
          <span className={`w-full h-0.5 bg-white rounded-full transition-opacity duretion-500 ${isOpen ? "opacity-0" : ""}`}></span>
          <span className={`w-full h-0.5 bg-white rounded-full transition-all duretion-500 ${isOpen ? "-rotate-55 -translate-y-2" : ""}`}></span>
        </div>
      </button>

    </div>
  );
}

export default SmNavebar;
