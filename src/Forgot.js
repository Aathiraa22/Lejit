// src/Forgot.js
import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // For navigation to verification page
import './Forgot.css'; // Make sure this file exists and has the right styles

const Forgot = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Simulate sending the reset password email and navigating to the verification page
    console.log({ email });
    navigate('/verification'); // Redirect to verification page after form submission
  };

  return (
    <div className="forgot-container">
      <h1>Forgot Password</h1>
      <p>Please enter your email address to request a password reset.</p>
      <form onSubmit={handleForgotPassword}>
        <div className="input-group">
          <span className="icon"><FaEnvelope /></span>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default Forgot;
