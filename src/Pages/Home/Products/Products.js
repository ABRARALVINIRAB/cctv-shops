import { Button, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://secret-castle-91056.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <Container>

            <div className="products-container">
                {
                    products.slice(0, 6).map(product => <>
                        <Product
                            key={product._id}
                            product={product}
                        ></Product>

                    </>)
                }
            </div>
        </Container>
    );
};

export default Products;