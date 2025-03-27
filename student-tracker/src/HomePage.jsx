import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ addStudent }) => {
  const [student, setStudent] = useState({
    name: '',
    marks: { dsp: '', ct: '', mern: '', cn: '', uhv: '' },
  });

  const handleAddStudent = () => {
    if (student.name.trim() !== '') {
      addStudent(student);
      setStudent({ name: '', marks: { dsp: '', ct: '', mern: '', cn: '', uhv: '' } });
    }
  };

  return (
    <div className="page-container">
      <h1>Student Progress Tracker</h1>
      <input
        type="text"
        placeholder="Enter Student Name"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
      />
      <div className="subjects">
        {Object.keys(student.marks).map((subject) => (
          <input
            key={subject}
            type="number"
            placeholder={subject.toUpperCase()}
            value={student.marks[subject]}
            onChange={(e) => setStudent({
              ...student,
              marks: { ...student.marks, [subject]: e.target.value }
            })}
          />
        ))}
      </div>
      <button onClick={handleAddStudent}>Add Student</button>
      <Link to="/progress"><button>View Progress</button></Link>
      <Link to="/about"><button>About Us</button></Link>
    </div>
  );
};

export default HomePage;
