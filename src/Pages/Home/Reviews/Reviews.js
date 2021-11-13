import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview/SingleReview';
import './Review.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://secret-castle-91056.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (


        <Container >
            <h1>Clients Reviews</h1>


            
            <div className="review-container">
                {
                    reviews.map(review => <>
                        <SingleReview
                            key={review._id}
                            review={review}
                        ></SingleReview>

                    </>)
                }
            </div>

        </Container>

    );
};

export default Reviews;