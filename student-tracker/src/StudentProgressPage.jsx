import React from 'react';

const StudentProgressPage = ({ students }) => {
  return (
    <div className="page-container">
      <h1>Student Progress</h1>
      {students.length === 0 ? (
        <p>No students added yet.</p>
      ) : (
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>DSP</th>
              <th>CT</th>
              <th>MERN</th>
              <th>CN</th>
              <th>UHV</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                {Object.values(student.marks).map((mark, i) => (
                  <td key={i}>{mark}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentProgressPage;
