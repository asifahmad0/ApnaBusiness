import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import AOS from 'aos';
import "aos/dist/aos.css"
import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, } from 'react-icons/fa6';
import {toast} from 'react-toastify'
import axios, { Axios } from 'axios'


function Contact() {
  
  useEffect(() => {
      AOS.init({ duration: 1000, once: true });
    }, []);

    const [uname, setname] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [loding, setloding] = useState(false)

    const SendMail =async(e)=>{
  
      e.preventDefault();
      setloding(true)

        try{

          const {data} = await axios.post(import.meta.env.VITE_EMAIL_SEND_API,{ //VITE_EMAIL_SEND_API=https://apnabusiness.onrender.com/send/mail
                    uname,
                    mobile,
                    email,
                    message,
                    
                }, 
                {
                    withCredentials:true,
                    headers:{"Content-Type": "application/json"}
                });

          setname("")
          setEmail("")
          setMobile("")
          setMessage("")
          toast.success(data.message)
          setloding(false)
          
          // console.log(uname)
          // console.log(mobile)
          // console.log(email)
          // console.log(message)
        

        }catch(error){
            toast.error(error.message)
            console.error(error.message)
            setloding(false)
        }

      


    }
    

  return (
    <div className="min-h-screen bg-[#363131] text-white px-6 py-12 flex justify-center items-center">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-4xl bg-[#292525] rounded-2xl shadow-xl p-10">

        {/* Header */}
        <h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl font-bold mb-6 text-center p-2" data-aos='zoom-out'>Contact <span className="text-[#adff2f]">Us</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Contact Info Section */}
          <div className="space-y-6">
            {[
              { label: "📧 Email", value: "asifahma7761@email.com" },
              { label: "📞 Phone", value: "+91 7761917649" },
              { label: "📍 Location", value: "Pakur Jharkhand, India" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="text-lg"
              >
                <p className="font-semibold">{item.label}</p>
                <p className="text-gray-300">{item.value}</p>
              </motion.div>
            ))}

            {/* Social Icons */}

<div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex gap-4 mt-4 p-2" data-aos='slide-right'>


      <a href="https://www.facebook.com/profile.php?id=100030803407799" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} className="w-10 h-10 text-black rounded-full bg-[#adff2f] flex justify-center items-center" >
        <span className="capitalize"><FaFacebook/></span>
      </a>
      <a href="http://linkedin.com/in/asif-ahmad7761" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} className="w-10 h-10 text-black rounded-full bg-[#adff2f] flex justify-center items-center" >
        <span className="capitalize"><FaLinkedinIn/></span>
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} className="w-10 h-10 text-black rounded-full bg-[#adff2f] flex justify-center items-center" >
        <span className="capitalize"><FaInstagram/></span>
      </a>
      <a href="https://github.com/asifahmad0" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.2, rotate: 5 }} className="w-10 h-10 text-black rounded-full bg-[#adff2f] flex justify-center items-center" >
        <span className="capitalize"><FaGithub/></span>
      </a>

</div>

          </div>

          {/* Contact Form */}
          <motion.form onSubmit={SendMail} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.6 }} className="space-y-6 p-2">
            
            <input value={uname} onChange={(e)=>setname(e.target.value)} whileFocus={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }} type="text" name='uname' placeholder='Your Name' required className="w-full px-4 py-3 bg-[#363131] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#adff2f] transition" data-aos='slide-left'/>
            <input value={mobile} onChange={(e)=>setMobile(e.target.value)} whileFocus={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }} type="text" name='mobile' placeholder='Your Mobile' required className="w-full px-4 py-3 bg-[#363131] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#adff2f] transition" data-aos='slide-left'/>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} whileFocus={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }} type="email" name='email' placeholder='Your Email' required className="w-full px-4 py-3 bg-[#363131] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#adff2f] transition" data-aos='slide-left'/>
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} whileFocus={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 200 }} name='message' placeholder="Your Message..." required rows="4" className="w-full px-4 py-3 bg-[#363131] rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-[#adff2f] transition" data-aos='slide-left'/>

            <motion.button type='submit' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="w-full bg-[#adff2f] hover:bg-[#3c580b] hover:text-white text-black py-3 rounded-xl text-lg font-semibold transition">
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}


export default Contact
