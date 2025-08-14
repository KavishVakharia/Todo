import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [students, setStudents] = useState([]);

  const handleSubmit = () => {
    // Add a new student to the table
    const newStudent = { name, age, rollNo };
    setStudents([...students, newStudent]);

    // Reset form fields after submission
    setName('');
    setAge('');
    setRollNo('');
  };

  return (
    <div className="App">
      <h1>Student Information</h1>
      <div>
        <input 
          type="text" 
          placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Age" 
          value={age} 
          onChange={(e) => setAge(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Roll No" 
          value={rollNo} 
          onChange={(e) => setRollNo(e.target.value)} 
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      
      {/* Displaying the table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Roll No</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.rollNo}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Option to add more entries */}
      <button onClick={() => setStudents([])}>Clear Entries</button>
    </div>
  );
}

export default App;
