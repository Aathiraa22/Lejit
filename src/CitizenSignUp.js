// src/CitizenSignUp.js
import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa'; // Import icons for full name, email, and password
import { FcGoogle } from 'react-icons/fc'; // Google icon
import { FaFacebook } from 'react-icons/fa'; // Facebook icon
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './CitizenSignUp.css'; // Import CSS for styling

const CitizenSignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-up logic here (e.g., API call)
    console.log({ fullName, email, password, confirmPassword });
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <span className="icon"><FaUser /></span>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <span className="icon"><FaEnvelope /></span>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <span className="icon"><FaLock /></span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <span className="icon"><FaLock /></span>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-button">Let's Get Started</button>
         <div className="or">OR</div>
      </form>
      <div className="alternative-login">
        <button className="google-button">
          <FcGoogle size={20} /> Login with Google
        </button>
        <button className="facebook-button">
          <FaFacebook size={20} /> Login with Facebook
        </button>
      </div>
      <span>Don't have an account? <Link to="/lawyer-signin">Sign In</Link></span>
    </div>
  );
};

export default CitizenSignUp;
