import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://secret-castle-91056.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <Container>
            <div className="products-container">
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