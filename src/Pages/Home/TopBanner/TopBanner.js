import React from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import banner1 from "../../../images/banner/banner1.jpg"
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
const background = {
    background: `url(${banner1})`
}
const forheight = {
    display: "flex",
    alignItems: "center",

    height: "450px",

}


const TopBanner = () => {
    return (
        <Box style={background} sx={{ ...forheight, flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography sx={{ color: 'black' }} variant="h1" >
                        A Better  Life <br />

                    </Typography>;
                    <Typography sx={{ color: 'primary.main' }} variant="h1" >

                        A Better World
                    </Typography>;
                    <Link style={{ textDecoration: "none", backgroundColor: "black" }} to="/allProducts">
                        <Button variant="contained" endIcon={<SendIcon />}>Explore All Products</Button>
                    </Link>
                </Grid>


            </Grid>
        </Box>

    );
};

export default TopBanner;