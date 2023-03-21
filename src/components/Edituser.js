import React,{useEffect, useState} from 'react'
import { TextField,Button } from '@mui/material'
import {Container} from '@mui/material'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'


function Edituser() {

    const [id,setId] = useState(0)
    const [name,setName] = useState()
    const [age,setAge] = useState()
    const [email,setEmail] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        setId(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setEmail(localStorage.getItem('Email'))
    }, [])
    
    const editUserdata = (e) =>{
        e.preventDefault()
        try {
            axios.put(`https://64181f7275be53f451d67f3c.mockapi.io/CRUD/${id}`,{
                name,
                age,
                email
            })
            .then((res) => {
                navigate('/read')
            })
        } catch (error) {
            
        }
    }
    console.log(id,name,age,email);
    return (
        <div>
            <form onSubmit={editUserdata}>
                <Container style={{ border: '2px solid black', width: '400px', borderRadius: '20px' }}>
                    <TextField id="standard-basic" label="Enter Name:" variant="standard" value={name} 
                    onChange={(e) => setName(e.target.value)}     
                    />
                    <br />
                    <TextField id="standard-basic" label="Enter Age:" variant="standard" value={age}
                    onChange={(e) => setAge(e.target.value)} 
                    />
                    <br />
                    <TextField id="standard-basic" label="Enter Email:" variant="standard" value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                    <br />
                    <br />
                    <br />
                    <Button type='submit' variant="contained">Update</Button>
                    <Link to={-1}>
                    <Button className='btn btn-primary' variant='outlined'>Back</Button>
                    </Link>
                </Container>
            </form>
        </div>
    )
}

export default Edituser