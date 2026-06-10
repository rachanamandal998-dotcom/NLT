const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.post("/send-mail", async (req, res) => {
    const { name, email, phone, company, service, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"${name} via Website" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New ${service} inquiry from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Service: ${service}
Message: ${message}
            `,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: "Email sent successfully",
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});