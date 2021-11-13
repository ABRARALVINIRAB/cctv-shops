import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const AllProduct = ({ product }) => {
    const { _id, name, price, img, description } = product;
    return (
        <Card >
           

            <CardMedia
                component="img"
                alt="Camera"
                height="140"
                image={img}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="h3" color="text.secondary">
                    Price:$ {price}
                </Typography>
                <Link style={{ textDecoration: "none", color: "white" }} to={`/orders/${_id}`}>
                    <Button variant='contained'>Shop Now</Button>
                </Link>
            </CardContent>

        </Card>
    );
};

export default AllProduct;