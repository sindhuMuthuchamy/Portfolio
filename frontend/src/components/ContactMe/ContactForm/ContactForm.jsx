import React, { useState } from 'react';
import './ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://portfolio-project-6yh2.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      
      const data = await response.json();
      console.log(data); 

    
      if (response.ok) {
        alert(data.message || 'Form submitted successfully!');
      } else {
        alert(data.error || 'Network issue, please try after some time');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network issue, please try after some time');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstname" placeholder="First Name" onChange={handleChange} required />
      <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <textarea name="message" placeholder="Message" rows={3} onChange={handleChange}></textarea>
      <button type="submit">SEND</button>
    </form>
  );
};

export default ContactForm;
