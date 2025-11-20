const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();


// Render contact page
router.get('/contactme', (req, res) => {
  res.render('contactme');
});

// Handle form submission
router.post('/contactme', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,       // your Gmail
      pass: process.env.EMAIL_PASS          // Gmail App Password
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL,           // where you want to receive messages
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    res.render('contactme', { formMessage: `✅ Thank you ${name}, your message has been sent!` });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.render('contact-me', { formMessage: '❌ Something went wrong. Please try again later.' });
  }
});

module.exports = router;
