import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ButtonComp from '../../components/atoms/buttonComp/ButtonComp';
import InputComp from '../../components/atoms/inputComp/InputComp';

const SignIn = () => {

    const navigate = useNavigate()
    const [size, setsize] = useState("")

    const login = () => {
        navigate('/dashboard')
    }
    const register = () => {
        navigate('/register')
    }
    return (
        <Grid container className='signInImage'>
            <Grid item lg={8} md={8} xs={12} ></Grid>
            <Grid item lg={4} md={4} xs={12} className="authMainDiv" >
                <Typography variant="h4" sx={{ color: "#F7EFE6" }}><b>Login</b></Typography>
                <InputComp fullWidth="true" label="Phone number / E-mail" sx={{ my: 8 }} />
                <InputComp fullWidth="true" label='Password' />
                <ButtonComp onClick={login} label="Login" variant="contained" size="large"
                    sx={{
                        fontWeight: "bold",
                        fontSize: "20px",
                        width: "180px",
                        mt: 8, mb: 2,
                        color: "#2D0102",
                        backgroundColor: "#F7EFE6",
                        "&:hover": {
                            backgroundColor: "#F7EFE6"
                        },
                    }}
                />
                <Typography className='curser' onClick={register} sx={{ color: "#F7EFE6" }}>Don't have an Account? <span><b>Register</b></span> </Typography>
            </Grid>
        </Grid>
    )
}

export default SignIn   