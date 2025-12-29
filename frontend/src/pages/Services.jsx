import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import softwearDev from '../assets/image/softwearDev.jpeg'
import web_dev_img from '../assets/image/web_dev_img.jpg'
import enterprice_img from '../assets/image/enterprise.jpg'
import quality_img from '../assets/image/quality.jpg'
import nfc_card from '../assets/image/nfc_card.jpg'
import ai_auto from '../assets/image/ai_auto.jpg'
import cunsult from '../assets/image/cunsult.webp'
import data_analist from '../assets/image/data_analist.jpg'
import { AppWindow, BrainCircuit, ChartBar, ChartPie, Cloud, IdCard, Laptop, MessagesSquare, MonitorCog, ShieldCheck,  } from "lucide-react";

 function Services() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  

  const services = [
    {
      title: "Software Development",
      desc: "Custom software and applications built with modern frameworks that drive innovation and growth.",
      //icon: "💻",
      icon: <Laptop/>,
      img: softwearDev,
    },
    {
      title: "Web Devlopment",
      desc: "Strategic technology guidance to optimize your operations and align IT with your business objectives.",
      icon: <AppWindow />,
      img: web_dev_img,
    },
    {
      title: "Enterprise Aplications",
      desc: "We build custom enterprise solutions to help organizations transform their processes and operations.",
      icon: <ChartPie/>,
      img: enterprice_img,
    },
    {
      title: "Quality Engineering",
      desc: "We provide end-to-end testing to ensure your product is bug free and running as it should during each stage of devlopment through to its launch.",
      icon: <MonitorCog/>,
      img: quality_img,
    },   
   {
    title: "NFC Smart Card ",
    desc: "Modern NFC-enabled cards for instant digital sharing, branding, and contactless engagement.",
     icon: <IdCard />,
      img: nfc_card,
  },
   {
    title: "AI Automation ",
    desc: "Smart AI-powered automation to optimize workflows, enhance productivity, and scale your business efficiently.",
    icon: <BrainCircuit />,
    img: ai_auto,
  },   
    {
      title: "IT Consulting",
      desc: "Strategic technology guidance to optimize your operations and align IT with your business objectives.",
      icon: <MessagesSquare/>,
      img: cunsult,
    },
    {
      title: "Data Analytics",
      desc: "We develop solutions to help your leverage unseen insights and bring improved decision making and growth",
      icon: <ChartBar/>,
      img: data_analist,
    },    
  ];

  

  return (
    <div className=" overflow-hidden min-h-screen text-gray-900 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-50 py-20 text-center" data-aos='zoom-out'>
        <h1 className="text-4xl text-bg1 md:text-5xl overflow-hidden font-bold mb-4 text-primery">Our Services</h1>
        <p className="text-lg px-6 md:text-xl max-w-3xl mx-auto text-textColor">
          Empowering your business with cutting-edge IT solutions, delivered by
          experts you can trust.
        </p>
      </section>

      {/* Services Grid */}
      <section className="overflow-hidden max-w-7xl mx-auto py-5 lg:py-20 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="relative bg-bg3 border border-gray-200 rounded-2xl overflow-hidden 
            shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:border-primery">
            <div className="overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110" loading="lazy"
              />
            </div>
            <div className="p-6 text-center flex flex-col items-center">
              <div className="w-[50px] h-[50px] text-4xl mb-3 overflow-hidden text-textColor rounded-full bg-primery text-[2em] flex items-center justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-primery mb-2">
                {service.title}
              </h3>
              <p className="text-textColor">{service.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section
        data-aos="fade-up"
        className=" overflow-hidden bg-primery py-16 px-6 text-center"
      >
        <h2 className=" overflow-hidden text-3xl font-bold text-textColor2 mb-4">
          Ready to Transform Your Buisines?
        </h2>
        <p className="text-textColor2 max-w-2xl mx-auto mb-8">
          Let’s discuss how our tailored IT services can streamline your
          business operations and enhance performance.
        </p>
        <Link to='/contact'>
        <button className="bg-bg3 text-textColor px-8 py-3 rounded-full text-lg font-semibold hover:bg-primery-dark hover:text-textColor2 transition cursor-pointer">
          Get in Touch
        </button></Link>
      </section>
    </div>
  );
}

export default Services;
