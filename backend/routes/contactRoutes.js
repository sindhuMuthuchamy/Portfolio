const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors()); // Enable CORS if frontend is on a different port
app.use(express.json()); // To parse JSON bodies

app.post('/api/contact', (req, res) => {
  const { firstname, lastname, email, message } = req.body;

  if (!firstname || !lastname || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Simulate successful form submission
  return res.status(200).json({ message: 'Form submitted successfully!' });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
