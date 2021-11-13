import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../../../images/error.png'

const NotFound = () => {
    return (
        <Container>
            <img src={error} alt="" />
            <Link to="/"><button>Go Back</button></Link>
        </Container>
    );
};

export default NotFound;