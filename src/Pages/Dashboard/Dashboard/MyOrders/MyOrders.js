import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Container, Grid } from '@mui/material';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders);
    const { user } = useAuth();
    useEffect(() => {
        const url = 'https://secret-castle-91056.herokuapp.com/orders'
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    // const { productId } = useParams();
    // console.log('productId', productId);

    const matchingOrders = orders.filter((product) => (product.email) === user.email);
    console.log(matchingOrders);


    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure to delete this?');
        if (proceed) {
            const url = `https://secret-castle-91056.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('delete succesfully')
                    }
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                })

        }
    }
    return (
        <div>
            <h1>My orders</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <Container>
                        <TableContainer component={Paper}>
                            <Table sx={{ width: '80%' }} aria-label="Appointments table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Email</TableCell>
                                        <TableCell align="right">ID</TableCell>
                                        <TableCell align="right">Status</TableCell>

                                        <TableCell align="right">Action</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {matchingOrders.map((row) => (
                                        <TableRow
                                            key={row._id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.email}
                                            </TableCell>

                                            <TableCell align="right">{row._id}</TableCell>
                                            <TableCell component="th" scope="row">
                                                {row.status}
                                            </TableCell>
                                            <TableCell align="right">
                                                <Button onClick={() => handleDeleteOrder(row._id)}>Delete</Button>

                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                </Grid>

            </Grid>

        </div>
    );
};

export default MyOrders;