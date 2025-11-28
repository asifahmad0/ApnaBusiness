const nodemailer = require('nodemailer');


const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const emailSend = async (options) => {
  try {
    const response = await resend.emails.send({
      from: 'onboarding@resend.dev', // Or your domain
      to: "asifahma7761@gmail.com",
      subject: "Mail From Apna Business",
      text: `${options.name} \n \n ${options.Mobile}\n \n ${options.message} \n\n Sender Email: ${options.userEmail}`
      
    });

    console.log("Resend Response:", response);
    return response;

  } catch (error) {
    console.error("RESEND ERROR:", error);
    throw error;
  }
};


/*
 const emailSend = async(options)=>{
     const transporter = nodemailer.createTransport({
         host: process.env.SMTP_HOST,
         port: process.env.SMTP_PORT,
         service:process.env.SMTP_SERVICE,
         auth: {
             user: process.env.SMTP_MAIL,
             pass: process.env.SMTP_PASS
         }
     })


    const mailOption={
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: "Mail From Apna Buisiness",
        text: `${options.name} \n \n ${options.Mobile}\n \n ${options.message} \n\n Sender Email: ${options.userEmail}`
    };
    await transporter.sendMail(mailOption)
}*/

module.exports = { emailSend };
