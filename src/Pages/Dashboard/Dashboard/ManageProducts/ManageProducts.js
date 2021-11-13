import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const ManageProducts = () => {
    const [allproducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://secret-castle-91056.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, [])

    const handleDeleteProduct = (id) => {
        const proceed = window.confirm('Are you sure to delte this item')
        if (proceed) {
            const url = `https://secret-castle-91056.herokuapp.com/products/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {

                        window.alert('Delete succesfully')
                    }
                    const remaining = allproducts.filter(order => order._id !== id);
                    setAllProducts(remaining)
                })
        }

    }

    return (
        <div>
            <h1>Manage Products</h1>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="simple table">
                    <TableHead>
                        <TableRow>

                            <TableCell align="right">Name</TableCell>

                            <TableCell align="right">Id</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allproducts.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>

                                <TableCell align="right">{row._id}</TableCell>
                                <TableCell align="right"><Button onClick={() => handleDeleteProduct(row._id)}>Delete</Button></TableCell>

                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProducts;