import { Button, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllProduct from './AllProduct/AllProduct';

const Allproducts = () => {
    const [allproducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://secret-castle-91056.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, [])


    return (
        <Container>
            <Link style={{ textDecoration: "none", color: "black" }} to='/home'>
                <Button color="inherit">Go Back Home</Button>
            </Link>
            <Link style={{ textDecoration: "none", color: "black" }} to='/dashBoard'>
                <Button color="inherit">Go To DashBoard</Button>
            </Link>
            <div className="products-container">

                {
                    allproducts.map(product => <>
                        <AllProduct
                            key={product._id}
                            product={product}
                        ></AllProduct>

                    </>)
                }
            </div>
        </Container>
    );

};

export default Allproducts;