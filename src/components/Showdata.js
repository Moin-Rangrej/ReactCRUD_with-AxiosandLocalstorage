import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const cardStyle = {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '50px'
}

const Showdata = () => {

    const [users, setUsers] = useState([])
    const [data, setUserdata] = useState({
        id: "", name: "", age: "", email: ""
    })
    const navigate = useNavigate()
    const getData = async () => {
        try {
            const userData = await axios.get('https://64181f7275be53f451d67f3c.mockapi.io/CRUD')
            setUsers(userData.data)
            // return console.log(userData.data);
        } catch (error) {
            console.log(error.message);
        }
    }
    // console.log(users);
    useEffect(() => {
        getData()
    }, [])

    // Delete User

    const deleteUser = async (id) => {
        try {
            if (window.confirm("Are Sure to Delete this Data ?")) {
                return await axios.delete(`https://64181f7275be53f451d67f3c.mockapi.io/CRUD/${id}`)
                    .then(() =>
                        getData()
                    )
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    // Edit User data

    const editUser = (id, name, age, email) => {
        const newData = { id, name, age, email }
        setUserdata(newData)
        localStorage.setItem("ID",id)
        localStorage.setItem("Name",name)
        localStorage.setItem("Age",age)
        localStorage.setItem("Email",email)
    }

    console.log(data);

    return (<>
        <div className='container'>
            <h1 className='text-center text-white bg-dark'>User Data Table</h1>
            <div className='text-dark'>
                <button className='float-end btn btn-primary' onClick={() => navigate('/')}>CreateData</button>
            </div>
            <table className="table table-hover table-bordered mb-2">
                <thead>
                    <tr>
                        <th scope="row">ID</th>
                        <th scope="row">Name</th>
                        <th scope="row">Age</th>
                        <th scope="row">Email</th>
                        <th scope='row'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length !== 0 && users.map((user) => (
                        <>
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button className='btn btn-success' onClick={() => editUser(user.id, user.name, user.age, user.email)}>Edit</button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button className='btn btn-danger' onClick={() => deleteUser(user.id)}>Delete</button>
                                </td>
                            </tr>
                        </>
                    ))}

                </tbody>
            </table>
        </div>
    </>)
}

export default Showdata

