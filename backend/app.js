const express = require("express");
const { config } = require("dotenv");
const cors = require("cors");
const { emailSend } = require("./utils/emailSend");

const router = express.Router();
const app = express();

config({ path: "./config.env" });

app.use(cors({
    origin:[ process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

router.post('/', async (req, res, next)=>{

    const { uname, mobile, email, message } = req.body;
    console.log(req.body)
    // const name = "Asif Ahmad"
    // const mobile = 7761917649
    // const email = "asifahmad@gmail.com"
    // const message = "its Working"

    if ( !uname || !mobile || !email || !message ){

        return next(
            res.status(400).json({
                success:false,
                message: "Please provide all details ",
            })
        )
    }
    try{
        await emailSend({
            email:"asifahma7761@gmail.com",
            name:uname,
            Mobile: mobile,
            message: message,
            userEmail: email
        })
        res.status(200).json({
            success:true,
            message:" mail send successful"
        })
    }catch (error){
        res.status(500).json({
            success:false,
            message:` internale server error ${error}`
        })

    }
})
app.use(router)


app.listen(process.env.PORT, () => {
  console.log(`Server Listening at port ${process.env.PORT}`);
});

