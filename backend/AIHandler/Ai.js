const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const Ai_prompt = async (req, res) => {
  try {
    const { message } = req.body;

    console.log(message)

    if (!message) {
      return res.status(400).json({ reply: "Message is required" });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" });// gemini-1.5-flash

    const result = await model.generateContent(message);
    const response = result.response.text();

    res.json({ reply: response });

  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({ reply: "Gemini AI error" });
  }
};

module.exports = Ai_prompt;
