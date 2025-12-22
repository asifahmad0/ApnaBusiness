import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-bg1 text-textColor py-12 px-6 md:px-16 relative overflow-hidden">

      {/* Floating Gradient Animation */}
      <div className="absolute inset-0 opacity-20 animate-pulse bg-gradient-to-r from-primery-dark via-primery to-textColor2 blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="space-y-4 animate-fade-in">
          <h2 className="text-3xl font-bold text-primery p-2"><span className="text-textColor">Apna</span>Business</h2>
          <p className="text-gray-300">
            Creating beautiful experiences with bold design and clean code.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4 animate-fade-slide-up">
          <h3 className="text-xl font-semibold text-primery">Quick Links</h3>

          <ul className="space-y-2">
          {(()=>{

            const quick_link={
                'Home':'/',
                'About':'/about',
                'Services':'/service',
                'Contact':'/contact'
                
            }

            
            return ["Home", "About", "Services", "Contact"].map((link) => (
              <li key={link} className="p-2">
                <a href={quick_link[link]} className="text-gray-300 hover:text-primery transition-colors duration-300 relative group "> {link}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primery transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))
          
          })()}
          </ul>
          
        </div>

        {/* Socials */}

        <div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 mt-4 p-2" data-aos='zoom-in'
        >
          {(() => {
            const social_links = {
              facebook: "https://www.facebook.com/profile.php?id=100030803407799",
              linkedin: "http://linkedin.com/in/asif-ahmad7761",
              instagram: "https://www.instagram.com/the_formal_b0y/",
              github: "https://github.com/asifahmad0",
            };
            
            const social_icon = {
              facebook: <FaFacebook/>,
              linkedin: <FaLinkedinIn/>,
              instagram: <FaInstagram/>,
              github: <FaGithub/>,
            };
        
            return ["facebook", "linkedin", "instagram", "github"].map((icon, i) => (
              <a
                key={i}
                href={social_links[icon]}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="w-10 h-10 text-textColor2 rounded-full bg-primery flex justify-center items-center hover:scale-[1.2]" >
        
                <span className="capitalize">{social_icon[icon]}</span>
              </a>
            ));
          })()}
              </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-12 pt-6 text-center text-gray-400 text-sm">
        © 2025 Asif Ahmad — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer
