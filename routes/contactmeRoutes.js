// const express = require('express');
// const nodemailer = require('nodemailer');
// const router = express.Router();

// // Handle form submission
// router.post('/', async (req, res) => {
//   const { name, email, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL,       // your Gmail
//       pass: process.env.EMAIL_PASS,  // Gmail App Password
//     },
//   });

//   const mailOptions = {
//     from: `"${name}" <${email}>`,
//     to: process.env.EMAIL,
//     subject: `New message from ${name}`,
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('✅ Email sent successfully!');
//     // Send success response as JSON
//     res.status(200).json({ success: true, message: `Thank you ${name}, your message has been sent!` });
//   } catch (error) {
//     console.error('❌ Error sending email:', error);
//     // Send error response as JSON
//     res.status(500).json({ success: false, message: 'Something went wrong. Please try again.' });
//   }
// });

// module.exports = router;
