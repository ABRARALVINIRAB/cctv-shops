import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import logo from "../../../images/logo/logo.jpg"
import "./Footer.css"

const Footer = () => {
    return (



        <Grid sx={{ backgroundColor: "lightgrey", marginTop: "30px" }} container spacing={2}>
            <Grid item xs={12} md={4}>
                <img style={{ width: "200px", height: "200px" }} src={logo} alt="" />
                <h3 className="text-color">Your Security Is Our Best Priority</h3>
            </Grid>
            <Grid item xs={12} md={4}>
                <h1 className="text-color">Call Center Numbers</h1>
                <h1 className="text-color"><i className="icon-color" class="fas fa-phone-square-alt"></i> 1653</h1>
                <h1 className="text-color"><i className="text-color" class="fas fa-mobile-alt"></i> 01742916158</h1>
            </Grid>
            <Grid item xs={12} md={4}>
                <h1 className="text-color">Make a Appointment</h1>
                <button>Click here</button>
                <h2 className="text-color">Location</h2>
                <p className="text-color"> <i class="fas fa-map-marker"></i> Bajitpur,kishoregonj</p>
            </Grid>

        </Grid>
    );
};

export default Footer;