import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')

    const handleOnBlur = (e) => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = (e) => {

        const user = { email };
        fetch('https://secret-castle-91056.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert("Succesfullt set Admin")
                    console.log(data)
                    setEmail('')
                }

            })
        e.preventDefault();
    }
    return (
        <div>
            <h1>Make Admin</h1>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    label="email"
                    type="email"
                    style={{ width: '50%' }}
                    onBlur={handleOnBlur}
                    variant="standard" />
                <br />
                <Button style={{ marginTop: '20px' }} variant="contained" type="submit">Make Admin</Button>
            </form>
        </div>
    );
};

export default MakeAdmin;