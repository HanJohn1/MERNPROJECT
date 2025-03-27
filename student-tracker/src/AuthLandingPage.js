import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

const AuthLandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <h1>Welcome</h1>
      <button onClick={() => navigate('/login')}>Login</button>
      <button onClick={() => navigate('/signup')}>Sign Up</button>
    </div>
  );
};

export default AuthLandingPage;
