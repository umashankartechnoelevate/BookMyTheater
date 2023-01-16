import Grid from '@mui/material/Grid'
import { positions } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashHeader = () => {
    const navigate = useNavigate()
    return (
        <Grid sx={{
            backgroundColor: "#272525",
            display: "flex",
            justifyContent: "space-between",
            px: 5, py: 1,
            alignItems: "center",
            boxShadow: "0px 3px 6px #0A0000",
        }}>
            <Grid><img height="40%" width="40%" src="../assets/dashboard/header/logo.png" alt="logo" /></Grid>
            <Grid><img className='curser' onClick={() => { navigate('/login') }} height="50%" width="50%" src="../assets/auth/logout.png" alt="signOut" /></Grid>
        </Grid>
    )
}

export default DashHeader