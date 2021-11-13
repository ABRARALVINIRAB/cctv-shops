import { CardContent, Container, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const SingleReview = ({ review }) => {
    console.log(review);
    const rating = review.rating;
    const text = review.text;
    const { email, name } = review;
    const { user } = useAuth()

    console.log(text);
    const [value, setValue] = React.useState(rating);
    return (
        <Container>
            <CardContent style={{ backgroundColor: "seashell" }}>
                <Typography gutterBottom variant="h4" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {email}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {text}
                </Typography>



                <Typography component="legend">Rating</Typography>
                <Rating name="read-only" value={value} readOnly />



            </CardContent>
        </Container>
    );
};

export default SingleReview;