const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail', // You can use other services like Outlook, Yahoo, etc.
  auth: {
    user: 'sindhumuthuchamy@gmail.com',
    pass: 'bpgl jeyn eijh ykll',
  },
});

app.post('/api/contact', (req, res) => {
  const { firstname, lastname, email, message } = req.body;

  if (!firstname || !lastname || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const mailOptions = {
    from: email, // Sender's email
    to: 'your-email@gmail.com', // Your email to receive the contact form data
    subject: `Message from ${firstname} ${lastname}`,
    text: `Message: ${message}\n\nFrom: ${firstname} ${lastname}\nEmail: ${email}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: 'Failed to send email' });
    } else {
      console.log('Email sent: ' + info.response);
      return res.status(200).json({ message: 'Email sent successfully!' });
    }
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
