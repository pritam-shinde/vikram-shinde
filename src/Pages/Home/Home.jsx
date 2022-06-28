import React from 'react';
import { Container, Box, } from '@material-ui/core';
import './Sass/Home.css';
import Helmet from 'react-helmet';

const Home = () => {
  return (
    <>
    <Helmet>
      <title>Vikram Shinde | Nagpur's Best Internet Marketer</title>
      <meta name="description" content="Bachelor of Technology, SPPU - I Plan, Build, Execute and Measure Digital Marketing Campaigns for Companies." />
      <meta name="title" content="Vikramaa | Nagpur's Best Internet Marketer" />
      <meta name="google-site-verification" content="j6qJNz5KGNG0vnKr4hW0T_rYerWVL2SHvk1pE1_OpEM" />
    </Helmet>
      <Container maxWidth="xl" className='hero p-0 m-0 d-flex align-items-end justify-content-md-start justify-content-center'>
        <Box>
          <h1 style={{fontSize: "1rem"}}>Vikram Shinde</h1>
        </Box>
      </Container>
    </>
  )
}

export default Home