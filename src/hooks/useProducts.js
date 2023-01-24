import React, { useEffect, useState } from 'react';

const useProducts = () => {
    const [allproducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://cctv-server-site-new.vercel.app/products')
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, [])
    return { allproducts, setAllProducts };
};

export default useProducts;