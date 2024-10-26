import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { FaBalanceScale, FaMapMarkerAlt, FaRegClock, FaFileAlt, FaUser, FaGavel } from 'react-icons/fa';
import './WelcomePage.css'; // Import the CSS for styling

const WelcomePage = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [selectedRole, setSelectedRole] = useState(null); // State to track the selected role

  // Handle selection of Citizen or Lawyer
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  // Handle the "Let's Get Started" button action
  const handleStartClick = () => {
    if (selectedRole === 'citizen') {
      navigate('/citizen-signup'); // Navigate to Citizen Sign-Up
    } else if (selectedRole === 'lawyer') {
      navigate('/lawyer-signup'); // Navigate to Lawyer Sign-Up (you can replace this with the correct route)
    }
  };

  return (
    <div className="welcome-container">
      <h1>Welcome to Lawyer App</h1>
      <p>Your trusted legal companion</p>
      <div className="features">
        <div className="feature-row">
          <div className="feature-item">
            <FaBalanceScale size={50} className="icon-blue" />
            <h3>Explore Lawyers by Category</h3>
          </div>
          <div className="feature-item">
            <FaMapMarkerAlt size={50} className="icon-blue" />
            <h3>Find Nearby Legal Experts</h3>
          </div>
        </div>
        <div className="feature-row">
          <div className="feature-item">
            <FaRegClock size={50} className="icon-blue" />
            <h3>Seamless Appointment Booking</h3>
          </div>
          <div className="feature-item">
            <FaFileAlt size={50} className="icon-blue" />
            <h3>Prepare Case Documents</h3>
          </div>
        </div>
      </div>
      <div className="buttons">
        <div className="button-box">
          <button
            className={`citizen-button ${selectedRole === 'citizen' ? 'selected' : ''}`} // Highlight if selected
            onClick={() => handleRoleSelect('citizen')}
          >
            <FaUser size={30} />
            <h3>Citizen</h3>
          </button>
        </div>
        <div className="button-box">
          <button
            className={`lawyer-button ${selectedRole === 'lawyer' ? 'selected' : ''}`} // Highlight if selected
            onClick={() => handleRoleSelect('lawyer')}
          >
            <FaGavel size={30} />
            <h3>Lawyer</h3>
          </button>
        </div>
      </div>
      <div className="start-login-buttons">
        <button className="start-button" onClick={handleStartClick} disabled={!selectedRole}>
          Let's Get Started
        </button>
        <h2>Or</h2>
        <span className="login-link">Login Here</span>
      </div>
    </div>
  );
};

export default WelcomePage;
