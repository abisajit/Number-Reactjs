import React, { useState } from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [nextNumbers, setNextNumbers] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;

    // Check if the input is a number
    if (/^-?\d*$/.test(value)) {
      setNumber(value);

      if (value === '' || value === '-') {
        setMessage('');
        setNextNumbers([]);
        return;
      }

      const num = parseInt(value, 10);

      if (num < 0) {
        setMessage('Please enter a positive value.');
        setNextNumbers([]);
      } else if (num % 2 === 0) {
        setMessage('The next 3 even numbers are:');
        setNextNumbers([num + 2, num + 4, num + 6]);
      } else {
        setMessage('The next 3 odd numbers are:');
        setNextNumbers([num + 2, num + 4, num + 6]);
      }
    }
  };

  return (
    <div className="container">
      <h1>Number Input</h1>
      <input 
        type="text" 
        value={number} 
        onChange={handleChange} 
        placeholder="Enter a number" 
      />
      {message && <p>{message}</p>}
      <ul>
        {nextNumbers.map((n, index) => (
          <li key={index}>{n}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
