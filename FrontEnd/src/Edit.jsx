import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Edit() {
  const [faculty, setFaculty] = useState({
    name: '',
    age: '',
    email: '',
    password: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const apiUrl = "http://localhost:5000/updateFaculty/";
  const specificFacultyUrl = `http://localhost:5000/specificFaculty/${id}`;


  const getSingleFaculty = () => {
    axios.get(specificFacultyUrl)
      .then((response) => {
        setFaculty(response.data); 
      })
      .catch((error) => {
        console.error("There was an error fetching the faculty data!", error);
      });
  }

  useEffect(() => {
    getSingleFaculty(); 
  }, [id]);


  const updateFaculty = (e) => {
    e.preventDefault();

    axios.put(`${apiUrl}${id}`, faculty) 
      .then(() => {
        console.log("Data updated successfully");
        navigate('/'); 
      })
      .catch((error) => {
        console.error("There was an error updating the data!", error);
      });
  }

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFaculty((prevFaculty) => ({
      ...prevFaculty,
      [name]: value
    }));
  }

  return (
    <div>
      <form onSubmit={updateFaculty}>
        <h1>Update your details</h1>
        <input
          type="text"
          name="name"
          value={faculty.name}
          placeholder="Enter your name"
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="age"
          value={faculty.age}
          placeholder="Enter your age"
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          value={faculty.email}
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <br />
        <input
          type="password"
          name="password"
          value={faculty.password}
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  )
}

export default Edit



  // <Route path='/edit:id' element={<Edit />}