// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import CitizenSignUp from './CitizenSignUp';
import LawyerSignIn from './LawyerSignIn';
import LawyerSignUp from './LawyerSignUp';
import Forgot from './Forgot';
import Verification from './Verification';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/citizen-signup" element={<CitizenSignUp />} />
        <Route path="/lawyer-signin" element={<LawyerSignIn />} />
        <Route path="/lawyer-signup" element={<LawyerSignUp />} /> 
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/verification" element={<Verification />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;





