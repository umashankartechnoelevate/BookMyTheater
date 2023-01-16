import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'
import { useState } from 'react'
import ButtonComp from '../../components/atoms/buttonComp/ButtonComp';
import InputComp from '../../components/atoms/inputComp/InputComp';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
    const navigate = useNavigate()

    const register = () => {
        navigate('/login')
    }
    return (
        <Grid container className='signUpImage'>
            <Grid item lg={8} md={8} xs={12} ></Grid>

            <Grid item lg={4} md={4} xs={12} className="authMainDiv" >
                <Typography variant="h4" sx={{ color: "#F7EFE6" }}><b>Register</b></Typography>
                <InputComp fullWidth="true" label="Phone number / E-mail" sx={{ my: 6 }} />
                <InputComp fullWidth="true" label='Password' />
                <InputComp fullWidth="true" label='Password' sx={{ my: 6 }} />
                <InputComp fullWidth="true" label='Password' />
                <ButtonComp onClick={register} label="Register"
                    sx={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        width: "180px",
                        mt: 6, mb: 2,
                        color: "#2D0102",
                        backgroundColor: "#F7EFE6",
                        "&:hover": {
                            backgroundColor: "#F7EFE6"
                        },
                    }}

                    variant="contained" size="large" />
                <Typography className='curser' onClick={() => { navigate('/login') }} sx={{ color: "#F7EFE6" }}>Already have an Account? <span><b>Login</b></span> </Typography>
            </Grid>
        </Grid>
    )
}

export default Signup