import React from 'react'
import { Button, Typography, ButtonGroup } from '@mui/material'

const Buttonex = () => {
    return (
        <div>
            <Button variant='outlined'>Click!</Button>
            <Button variant='contained' href='www.google.com'>google</Button>
            <Typography variant='body1'>Welcome to MUI</Typography>
            <ButtonGroup variant="contained">
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
                <Button>Four</Button>
            </ButtonGroup>
            <ButtonGroup size="small" aria-label="small button group">
            <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup color="secondary" aria-label="medium secondary button group">
            <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup size="large" aria-label="large button group">
            <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
            </ButtonGroup>
        </div>
    )
}

export default Buttonex
