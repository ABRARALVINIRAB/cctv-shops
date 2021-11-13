import { Card, CardContent, CardMedia, Grid, Typography, Button, TextField } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import useProducts from '../../../hooks/useProducts';
import { useForm } from 'react-hook-form';
import "./Order.css"
import { stringify } from '@firebase/util';
import { Link } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';

const Orders = () => {
    const { productId } = useParams();
    console.log('productId', productId);
    const { allproducts } = useProducts();
    const matchingProducts = allproducts.find((product) => (product._id) === productId);
    console.log(matchingProducts);



    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch('https://secret-castle-91056.herokuapp.com/orders', {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Your order added succesfully');
                    reset();
                }
            })


    };
    return (
        
        <Grid container spacing={2}>
            
            <Grid item xs={12} md={6}>
                <Link style={{ textDecoration: "none", color: "black" }} to='/home'>
                    <Button color="inherit">Go Back Home</Button>
                </Link>
                <Link style={{ textDecoration: "none", color: "black" }} to='/dashBoard'>
                    <Button color="inherit">Go To DashBoard</Button>
                </Link>
                <CardMedia
                    component="img"
                    alt="camera"
                    height="400px"
                    image={matchingProducts?.img}
                />

                <h1>{matchingProducts?.name}</h1>
                <h4>{matchingProducts?.description}</h4>
                <h2>Price:$ {matchingProducts?.price}</h2>

            </Grid>
            <Grid item xs={12} md={6}>
                <form className="place-order-form" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Place Your Order</h1>
                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}

                    <input defaultValue={matchingProducts?.name} {...register("productName")} />
                    <input placeholder="" defaultValue="pending" {...register("status")} required />

                    <input placeholder="Address" defaultValue="" {...register("address")} required />

                    <input placeholder="City" defaultValue="" {...register("city")} required />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} required />

                    <input className="btn btn-danger" type="submit" />
                    {/* <Button style={{ marginTop: "10px" }} type="submit" variant='contained'>Place Order</Button> */}
                    {/* <Button className="btn btn-danger" >Place Order</Button> */}
                </form>
            </Grid>

        </Grid>
    );
};

export default Orders;