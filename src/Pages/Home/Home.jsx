import React from 'react';
import { Container, Box, } from '@material-ui/core';
import './Sass/Home.css';

const Home = () => {
  return (
    <>
      <Container maxWidth="xl" className='hero'>
        <Box>
			<h1 className="d-md-block d-none">Vikram Shinde</h1>
		</Box>
      </Container>
    </>
  )
}

export default Home