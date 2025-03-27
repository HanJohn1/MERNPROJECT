import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import StudentProgressPage from './StudentProgressPage';
import AboutUs from './AboutUs';
import SignUpPage from './SignUpPage';
import AuthLandingPage from './AuthLandingPage';

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthLandingPage />} />  {/* Landing Page with Login & Signup Buttons */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage addStudent={addStudent} />} />
        <Route path="/progress" element={<StudentProgressPage students={students} />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
};

export default App;
