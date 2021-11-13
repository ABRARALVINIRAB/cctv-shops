import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';


const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [updated, setUpdated] = useState();

    useEffect(() => {
        fetch('https://secret-castle-91056.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [updated])
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



    const handleUpdateOrder = (id) => {
        const matched = orders.filter((order) => order._id === id);
        console.log("matched update ", matched);

        let orderstatus;

        if (matched[0].status === "pending") {
            orderstatus = "Shipped";
            console.log("matched update ", matched[0].status);
        } else {
            orderstatus = "pending";
        }
        const updates = {
            name: matched[0].name,
            phone: matched[0].phone,
            id: matched[0].id,
            price: matched[0].price,
            status: orderstatus,

        };



        if (matched[0].name) {
            console.log("updated", updated);

            const url = `https://secret-castle-91056.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(updates),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        alert('status changes')
                        setOrders(orders);
                        setUpdated({});
                    }
                });
        }
    };



    return (

        <div className='container '>
            <h1>All orders list</h1>

            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Email</TableCell>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Update</TableCell>

                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.email}
                                </TableCell>
                                <TableCell align="right">{row._id}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleUpdateOrder(row._id)}>Status</Button>

                                </TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleDeleteOrder(row._id)}>Delete</Button>

                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* {
                orders.map(order => <>
                    <div className="header border border-1">
                        <h3>Id :{order._id}</h3>
                        <h3>User Name :{order.name}</h3>
                        <h3>Email :{order.email}</h3>
                        <h3>Address :{order.address}</h3>
                        <h3>Phone :{order.phone}</h3>
                        <h3>status :{order.status}</h3>

                        <button onClick={() => handleUpdateOrder(order._id)} className="btn btn-success">Update</button>
                        <button onClick={() => handleDeleteOrder(order._id)} className="btn btn-danger">Delete</button>
                        <hr />

                    </div>

                  

                </>)
            } */}

        </div>
    );
};

export default ManageOrders;