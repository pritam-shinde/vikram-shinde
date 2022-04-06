import React from 'react';
import { Container, Box, Typography } from '@material-ui/core';

const Footer = () => {
    return (
        <>
            <Container maxWidth="xl" className='bg-dark'>
                <Box py={2} className="d-flex justify-content-center align-items-center">
                    <small className='text-white'>Ⓒ {new Date().getFullYear()} Vikramaa | All Rights Reserved.</small>
                </Box>
            </Container>
        </>
    )
}

export default Footer