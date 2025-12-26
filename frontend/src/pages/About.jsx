import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css"
import SmNavebar from '../componant/SmNavebar';

function About() {

    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);
    

  return (
    <div className="bg-textColor text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className=" text-textColor py-20" data-aos='zoom-in'>
        <div className=" max-w-6x  mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl text-textColor2 font-bold p-2">
             <span className="span">About Our Company</span>
          </h2>
          <p className="text-lg text-gray-700 md:text-xl max-w-3xl mx-auto">
            Empowering businesses with innovative IT solutions to achieve
            digital transformation and operational excellence.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 px-6 max-w-6xl mx-auto">
        <div className=" overflow-hidden grid md:grid-cols-2 gap-12 items-center">
          <div data-aos='flip-right'>
            <h2 className="text-3xl text-center md:text-start p-2 font-bold text-primery mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-4">
              Star Fusion Tech Solution Founded by Asif Ahmad in 2025,<br/>
              We are a leading IT service company specializing in delivering
              customized technology solutions that drive business success. Our
              team of certified experts brings deep technical knowledge and
              industry experience to every project.
            </p>
            <p className="text-gray-700">
              From cloud computing and cybersecurity to software development and
              managed IT support, we help organizations innovate and grow with
              confidence.
            </p>
          </div>
          <div className=" overflow-hidden flex justify-center" data-aos='flip-left'>
            <img
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="IT team working together"
              className="rounded-lg shadow-lg duration-500 hover:scale-[1.1]"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className=" ">
        <div className=" bg-gray-50 py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12" data-aos='slide-right'>
          <div>
            <h3 className="text-2xl font-semibold text-primery mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To deliver cutting-edge IT solutions that empower organizations to
              streamline operations, enhance security, and achieve sustainable
              growth.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primery mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To be the most trusted IT partner for businesses worldwide,
              recognized for our innovation, reliability, and customer-first
              approach.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl p-2 font-bold text-center text-primery mb-12">
          Our Core Values
        </h2>
        <div className="grid md:grid-cols-3 gap-10 text-center p-5">
          <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition
           duration-500 hover:scale-[1.05] hover:border-primery " data-aos='fade-down'>
            <h4 className="text-xl font-semibold mb-2 text-primery ">
              Innovation
            </h4>
            <p className="text-gray-700">
              We embrace creativity and new ideas to deliver forward-thinking
              technology solutions.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md hover:shadow-xl transition
           duration-500 hover:scale-[1.05] hover:border-primery" data-aos='fade-down'>
            <h4 className="text-xl font-semibold mb-2 text-primery">
              Integrity
            </h4>
            <p className="text-gray-700">
              We operate with transparency, honesty, and a strong ethical
              foundation in everything we do.
            </p>
          </div>
          <div className="p-6 border border-crimson rounded-lg shadow-md hover:shadow-xl transition
           duration-500 hover:scale-[1.05] hover:border-primery" data-aos='fade-down'>
            <h4 className="text-xl font-semibold mb-2 text-primery">
              Excellence
            </h4>
            <p className="text-gray-700">
              We are committed to delivering exceptional service and measurable
              value to our clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
