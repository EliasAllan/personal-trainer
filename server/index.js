const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Route
app.post('/api/book', async (req, res) => {
  const { name, email, datetime, sessionType } = req.body;

  console.log('Received booking:', { name, email, datetime, sessionType });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.TO_EMAIL,
    subject: 'New Training Session Booking 🏋️',
    text: `
New Session Booking:

Name: ${name}
Email: ${email}
Preferred Time: ${datetime}
Session Type: ${sessionType}
    `,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result.response); // ✅ Check this
    res.status(200).json({ message: 'Booking email sent!' });
  } catch (error) {
    console.error('❌ Email sending failed:', error); // ⛔ This is what we want
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

