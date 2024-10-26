// src/LawyerSignIn.js
import React, { useState } from 'react';
import { FaEnvelope, FaLock, FaFacebook, FaBalanceScale } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './LawyerSignIn.css';

const LawyerSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="signin-container">
      <h1>
        <FaBalanceScale size={50} className="icon-blue" /> <br />Lawyer App
      </h1>

      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
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
        <div className="remember-forgot">
        <label className="styled-checkbox">
  <input type="checkbox" />
  <span className="checkmark"></span>
  Remember Me
</label>

          <Link to="/forgot-password" className="forgot-password">Forgot Password?</Link>
        </div>
        <br />
        <br/>
        <button type="submit" className="signin-button">Sign In</button>
        <div className="alternative-login">
          <div className="or">OR</div>
          <button className="google-button">
            <FcGoogle size={20} /> Login with Google
          </button>
          <button className="facebook-button">
            <FaFacebook size={20} /> Login with Facebook
          </button>
        </div>
      </form>
      <span>Don't have an account? Sign Up </span>
    </div>
  );
};

export default LawyerSignIn;
