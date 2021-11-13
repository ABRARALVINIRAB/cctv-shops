import React from 'react';
import { Alert, Button, CircularProgress, Container, Grid, InputLabel, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import registerimg from '../../../images/login/login2.jpg'
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [loginData, setloginData] = useState({})
    const history = useHistory();
    const { authError, user, registerUser, isLoading } = useAuth();
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newloginData = { ...loginData };
        newloginData[field] = value;
        setloginData(newloginData)
        console.log(field, value);

    }
    const handleLogin = (e) => {
        if (loginData.password !== loginData.password2) {
            alert('password not match');
            e.preventDefault();
            return;

        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ m: 8 }} variant="h3" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLogin}>
                        <TextField sx={{ width: 1, m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField sx={{ width: 1, m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField sx={{ width: 1, m: 1 }}
                            type='password'
                            id="standard-basic"
                            label="Password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard"
                        />
                        <TextField sx={{ width: 1, m: 1 }}
                            type='password'
                            id="standard-basic"
                            label="Re Type Your Password"
                            name="password2"
                            onChange={handleOnChange}
                            variant="standard"
                        />

                        <Button type='submit' sx={{ width: 1, m: 1 }} variant="contained">Register</Button>

                        <NavLink style={{ textDecoration: 'none' }} to="Login">
                            <Button variant="text">ALREADY REGISTER?PLEASE LOGIN</Button>
                        </NavLink>

                    </form>} :
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">Your Account Create successfully! </Alert>
                    }
                    {
                        authError && <Alert variant="outlined" severity="error">
                            {authError}
                        </Alert>
                    }

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%",height:"600px" }} src={registerimg} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;