import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css"

function WhyUs() {

      useEffect(() => {
        AOS.init({ duration: 1000, once: true });
      }, []);
      

  return (
    <div className=' whyUs text-textColor w-[100dvw] lg:px-10 p-5'>
        <div className=" lg:p-5 flex flex-col gap-5 ">
            
            <div className=" text-textColor text-center overflow-hidden">
                <h1 className=" md:border-none md:w-full px-2 text-2xl font-bold " data-aos='fade-up'>Why Us ?</h1>
                <p className='  mt-2 text-md ' data-aos='fade-up'>Choose us for expert innovation, reliable support, cutting-edge technology, and customized solutions that accelerate your business success and digital growth. We Have</p>
            </div>

            <div className=" overflow-hidden grid grid-cols-2 md:grid-cols-4 gap-6">

                <div className="card_edge overflow-hidden text-center p-2 " data-aos='fade-up'>
                    <h1 className=' text-2xl md:text-3xl font-bold p-2 '>10+</h1> 
                    <p className='text-sm'> Services Provide</p>
                </div>
                <div className="card_edge overflow-hidden text-center p-2" data-aos='fade-up'>
                    <h1 className=' text-2xl md:text-3xl font-bold p-2 '>1000+</h1> 
                    <p className='text-sm'>Satisfied Clients</p>
                </div>
                <div className="card_edge overflow-hidden text-center p-2" data-aos='fade-up'>
                    <h1 className=' text-2xl md:text-3xl font-bold p-2 '>20+</h1> 
                    <p className='text-sm'>Latest Technology</p>
                </div>
                <div className="card_edge overflow-hidden text-center p-2" data-aos='fade-up'>
                    <h1 className=' text-2xl md:text-3xl font-bold p-2 '>Customise</h1> 
                    <p className='text-sm'>Speciel Solutions</p>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default WhyUs
