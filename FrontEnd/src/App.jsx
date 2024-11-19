import Axios from 'axios';
import React, { useState } from 'react';
import Fetch from './Fetch';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const apiUrl = "http://localhost:5000/createFaculty/";

  const submitForm = (e) => {
    e.preventDefault();

    if (!name || !age || !email || !password) {
      alert('All fields are required');
      return;
    }

    const facultyData = {
      name,
      age,
      email,
      password
    };

    Axios.post(apiUrl, facultyData)
      .then((response) => {
        console.log("Data inserted successfully", response.data);
        setName('');
        setAge('');
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        console.error("Error inserting data:", error);
      });
  };

  return (
    <div>
      <h1>Create Faculty</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="text"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>

      <Fetch />
    </div>
  );
}

export default App;
