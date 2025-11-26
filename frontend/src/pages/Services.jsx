import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import softwearDev from '../assets/image/softwearDev.jpeg'
import web_dev_img from '../assets/image/web_dev_img.jpg'
import enterprice_img from '../assets/image/enterprise.jpg'
import quality_img from '../assets/image/quality.jpg'
import cloudImg from '../assets/image/cloud.jpg'
import cybreSequrity from '../assets/image/cyberSecurity.jpg'
import cunsult from '../assets/image/cunsult.webp'
import data_analist from '../assets/image/data_analist.jpg'
import { AppWindow, ChartBar, ChartPie, Cloud, Laptop, MessagesSquare, MonitorCog, ShieldCheck } from "lucide-react";

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
      title: "Cloud Solutions",
      desc: "Scale your infrastructure with our secure and flexible cloud services, designed for performance and reliability.",
      icon: <Cloud/>,
      img: cloudImg,
    },
    {
      title: "Cybersecurity",
      desc: "Protect your digital assets with our advanced security frameworks, penetration testing, and risk management.",
      icon: <ShieldCheck />,
      img: cybreSequrity,
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
    <div className=" overflow-hidden min-h-screen text-gray-900 bg-[#292525]">
      {/* Hero Section */}
      <section className="bg-crimson py-20 text-center" data-aos='zoom-out'>
        <h1 className="text-4xl text-[#adff2f] md:text-5xl overflow-hidden font-bold mb-4">Our Services</h1>
        <p className="text-lg px-6 md:text-xl max-w-3xl mx-auto text-white">
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
            className="relative bg-[#292525] border border-gray-200 rounded-2xl overflow-hidden 
            shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="overflow-hidden">
              <img
                src={service.img}
                alt={service.title}
                className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6 text-center flex flex-col items-center">
              <div className="w-[50px] h-[50px] text-4xl mb-3 overflow-hidden text-black rounded-full bg-[#adff2f] text-[2em] flex items-center justify-center">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#adff2f] mb-2">
                {service.title}
              </h3>
              <p className="text-white">{service.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section
        data-aos="fade-up"
        className=" overflow-hidden bg-[#adff2f] py-16 px-6 text-center"
      >
        <h2 className=" overflow-hidden text-3xl font-bold text-black mb-4">
          Ready to Transform Your Buisines?
        </h2>
        <p className="text-black max-w-2xl mx-auto mb-8">
          Let’s discuss how our tailored IT services can streamline your
          business operations and enhance performance.
        </p>
        <Link to='/contact'>
        <button className="bg-[#292525] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-[#3c580b] hover:text-white transition cursor-pointer">
          Get in Touch
        </button></Link>
      </section>
    </div>
  );
}

export default Services;
