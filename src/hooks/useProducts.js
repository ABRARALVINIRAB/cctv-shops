import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [allproducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://secret-castle-91056.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, [])
    return { allproducts, setAllProducts };
};

export default useProducts;