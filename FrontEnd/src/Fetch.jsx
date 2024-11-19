import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Fetch() {
    var [faculty, setFaculty] = useState([])

    var getFaculties = () => {
        var apiUrl = "http://localhost:5000/getFaculties/";
        axios.get(apiUrl).then((resp) => {
            setFaculty(resp.data)
            console.log("Data has been fetched")
        })
    }


    useEffect(() => {
        getFaculties()
    }, [])



    var deleteFaculty = (id) => {
        axios.delete(`http://localhost:5000/deleteFaculty/${id}`)
    }


    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {faculty.map((fac) => (
                        <tr>
                            <td>{fac._id}</td>
                            <td>{fac.name}</td>
                            <td>{fac.age}</td>
                            <td>{fac.email}</td>
                            <td>{fac.password}</td>
                            <td><button onClick={() => deleteFaculty(fac._id)}>Delete</button></td>
                            <td><Link to={`/edit/${fac._id}`}>Update</Link></td>
                        </tr>


                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Fetch
