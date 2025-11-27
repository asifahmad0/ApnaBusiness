const nodemailer = require('nodemailer');



<<<<<<< HEAD




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
=======
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
>>>>>>> 25667590039188c4234367d5833be2e7a5685052

    const mailOption={
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: "Mail From Apna Buisiness",
        text: `${options.name} \n \n ${options.Mobile}\n \n ${options.message} \n\n Sender Email: ${options.userEmail}`
    };
    await transporter.sendMail(mailOption)
}

module.exports = { emailSend };
