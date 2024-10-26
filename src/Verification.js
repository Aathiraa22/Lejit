// src/Verification.js
import React, { useState } from 'react';
import './Verification.css'; // Create this CSS for styling

const Verification = () => {
  const [code, setCode] = useState(['', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(60); // Timer for resend code (60 seconds)

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the verification code submission logic here
    console.log("Verification Code:", code.join(''));
  };

  // Resend code timer logic
  React.useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const resendCode = () => {
    setTimeLeft(60); // Reset the timer to 60 seconds
    // Logic to resend the verification code
    console.log("Code resent!");
  };

  return (
    <div className="verification-container">
      <h1>Verification Code</h1>
      <p>We have sent a verification code to your email. Please enter it below.</p>
      <form onSubmit={handleSubmit}>
        <div className="code-inputs">
          {code.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              required
            />
          ))}
        </div>
        <button type="submit" className="continue-button">Continue</button>
      </form>

      {timeLeft > 0 ? (
        <p>Resend code in {timeLeft} seconds</p>
      ) : (
        <button onClick={resendCode} className="resend-button">Resend Code</button>
      )}
    </div>
  );
};

export default Verification;
