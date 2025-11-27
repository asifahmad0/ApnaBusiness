const nodemailer = require('nodemailer');



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
}

module.exports = { emailSend };
