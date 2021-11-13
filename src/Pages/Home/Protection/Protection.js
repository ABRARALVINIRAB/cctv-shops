import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import leftimg from "../../../images/protect/img1.jpg"
import rightimg from "../../../images/protect/img2.jpg"
const backgroundimg1 = {
    background: `url(${leftimg})`
}
const backgroundimg2 = {
    background: `url(${rightimg})`
}

const Protection = () => {
    return (
        <Grid container spacing={2}>
            <Grid style={backgroundimg1} sx={{ height: "450px" }} item xs={12} md={6}>
                <Typography variant="h4" sx={{ marginTop: "20px" }}>Smart Protection</Typography>
                <Typography variant="h3" sx={{ color: 'text.primary', marginTop: '130px' }}>Monitor and control your home anytime, anywhere.</Typography>
                <Button variant="contained" sx={{ marginTop: "20px" }}>Shop Now</Button>
            </Grid>
            <Grid style={backgroundimg2} sx={{ height: "450px" }} item xs={12} md={6}>
                <Typography variant="h4" sx={{ marginTop: "20px" }}>Full Protection</Typography>
                <Typography variant="h3" sx={{ color: 'text.primary', marginTop: '130px' }}>Featured Security Camera to stay protected</Typography>
                <Button variant="contained" sx={{ marginTop: "20px" }}>Shop Now</Button>
            </Grid>

        </Grid>
    );
};

export default Protection;