import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
function ForgotPassword() {
  const [otp, setOtp] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const verifyOtp = () => {
    if (otp === '123456') {
      alert('OTP verified successfully');
      setIsOtpVerified(true);
    } else {
      alert('Invalid OTP');
    }
  };

  const submitForm = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      alert('Password changed successfully');
      navigate('/');
    }
  };

  return (
    <div>
      <TopBar />
      <form className="panel" onSubmit={submitForm}>
      <input type="email" placeholder="Enter your email" required onChange={handleEmailChange} /><br />
      {email && (
        <>
          <input type="number" className="no-spinners" placeholder="Enter OTP" value={otp} onChange={handleOtpChange} /><br/>
          <input type="password" placeholder="Enter new Password" value={password} onChange={handlePasswordChange} />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
          <button type="submit" className="next" to="/">Submit</button>
        </>
      )}
    </form>
      <Footer />
    </div>
  );
}

export default ForgotPassword;