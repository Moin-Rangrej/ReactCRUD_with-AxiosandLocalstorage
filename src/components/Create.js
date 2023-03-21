import React, { useState } from 'react'
import { TextField,Button } from '@mui/material'
import {Container} from '@mui/material'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const Create = () => {
      const [name,setName] = useState()
      const [age,setAge] = useState()
      const [email,setEmail] = useState()
      const navigate = useNavigate()
      const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://64181f7275be53f451d67f3c.mockapi.io/CRUD',{
            name,
            age,
            email
        })
        // localStorage.setItem("name",name)
        // localStorage.setItem("Age",age)
        // localStorage.setItem("Email",email)
        navigate('/read')
      }


  return (
    <div>
    <button className='btn btn-info' onClick={() => navigate('/read')}>Read Data</button>
      <form onSubmit={handleSubmit}>
      <Container style={{border: '2px solid black',width:'400px',borderRadius:'20px'}}>
      <TextField id="standard-basic" label="Enter Name:" variant="standard" onChange={(e) => setName(e.target.value)} />
      <br/>
      <TextField id="standard-basic" label="Enter Age:" variant="standard" onChange={(e) => setAge(e.target.value)}/>
      <br/>
      <TextField id="standard-basic" label="Enter Email:" variant="standard" onChange={(e) => setEmail(e.target.value)}/>
      <br/>
      <br/>
      <br/>
      <Button type='submit' variant="contained">Contained</Button>
      </Container>
      </form>
     
    </div>
  )
}

export default Create
