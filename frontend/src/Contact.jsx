import React, { useState } from 'react';
import styled from 'styled-components';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    orderId: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message submitted!"); // Replace with actual submission logic
    setFormData({ name: '', email: '', phone: '', orderId: '', subject: '', message: '' });
  };

  return (
    <ContactWrapper>
      {/* Support Banner */}
      <SupportBanner>
        <h2>24/7 Customer Support</h2>
        <p>Your queries are our priority. We are here to assist you anytime.</p>
      </SupportBanner>

      <FormContainer>
        <h2>Contact Us</h2>
        <p>Have a question or need support regarding your order? Fill out the form below.</p>
        <Form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={formData.name} 
            onChange={handleChange} 
            required
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={formData.email} 
            onChange={handleChange} 
            required
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            value={formData.phone} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="orderId" 
            placeholder="Order ID (if applicable)" 
            value={formData.orderId} 
            onChange={handleChange} 
          />
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            value={formData.subject} 
            onChange={handleChange} 
            required
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            value={formData.message} 
            onChange={handleChange} 
            rows="6"
            required
          />
          <button type="submit">Send Message</button>
        </Form>
      </FormContainer>
    </ContactWrapper>
  )
}

export default Contact;

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f8f8f8;
`;

const SupportBanner = styled.div`
  width: 100%;
  background: url('/support-banner.jpg') center/cover no-repeat;
  color: white;
  text-align: center;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  h2 {
    font-size: 2.5rem;
    margin: 0;
    font-weight: 700;
    text-shadow: 0 2px 6px rgba(0,0,0,0.5);
  }

  p {
    font-size: 1.2rem;
    margin: 0;
    text-shadow: 0 1px 4px rgba(0,0,0,0.5);
  }

  @media (max-width: 768px) {
    padding: 40px 15px;

    h2 {
      font-size: 1.8rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const FormContainer = styled.div`
  max-width: 600px;
  width: 100%;
  background: #fff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
  margin-top: -40px; /* slightly overlap banner for style */
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 12px;
    color: #111;
  }

  p {
    font-size: 1rem;
    margin-bottom: 24px;
    color: #555;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  input, textarea {
    padding: 12px 14px;
    font-size: 0.95rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
    transition: border 0.3s ease;

    &:focus {
      border-color: #bfa46f;
    }
  }

  button {
    padding: 12px;
    font-size: 1rem;
    font-weight: 600;
    background: linear-gradient(135deg, #bfa46f, #947a2d);
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: transform 0.3s ease, background 0.3s ease;

    &:hover {
      transform: scale(1.03);
      background: linear-gradient(135deg, #947a2d, #bfa46f);
    }
  }
`;
