import { Alert, Button, CircularProgress, Container, Grid, InputLabel, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from "../../../images/login/login.webp"
import background from "../../../images/login/login-background.jpg"

const Login = () => {
    const [loginData, setloginData] = useState({});
    const location = useLocation()
    const history = useHistory();
    const { googleSignIn, authError, user, registerUser, isLoading, loginUser } = useAuth();
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newloginData = { ...loginData };
        newloginData[field] = value;
        setloginData(newloginData)
        console.log(field, value);

    }
    const handleLogin = (e) => {
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        googleSignIn(location, history)
    }
    // const backgroundimg = {
    //     background: `url(${background})`
    // }
    // const forheight = {
    //     display: "flex",
    //     alignItems: "center",

    //     height: "700px",


    // }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ m: 8 }} variant="h3" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLogin}>

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

                        <Button type='submit' sx={{ width: 1, m: 1 }} variant="contained">Login</Button>

                        <NavLink style={{ textDecoration: 'none' }} to="register">
                            <Button variant="text">NEW USER ?PLEASE REGISTER</Button>
                        </NavLink>
                        {
                            isLoading && <CircularProgress />
                        }
                        {
                            user?.email && <Alert severity="success">Login Succesfully! </Alert>
                        }
                        {
                            authError && <Alert variant="outlined" severity="error">
                                {authError}
                            </Alert>
                        }
                        <p>---------------------</p>
                        <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                    </form>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: "100%", height: "600px" }} src={login} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;