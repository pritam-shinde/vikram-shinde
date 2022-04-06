import React from 'react';
import Helmet from 'react-helmet';
import { Container, Box, } from '@material-ui/core';
import './Sass/Home.css';

const Home = () => {
  return (
    <>
	<Helmet>
	 <title>Vikramaa | Nagpur&#039;s Best Internet Marketer</title>
	<meta name="description" content="Vikram Shinde - Bachelor of Technology, SPPU - I Plan, Build, Execute and Measure Digital Marketing Campaigns for Companies" />
	<link rel="canonical" href="/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Vikramaa | Nagpur&#039;s Best Internet Marketer" />
	<meta property="og:description" content="Vikram Shinde - Bachelor of Technology, SPPU - I Plan, Build, Execute and Measure Digital Marketing Campaigns for Companies" />
	 <meta property="og:url" content="/" /> 
	<meta property="article:modified_time" content="2022-04-01T08:51:24+00:00" />
	<meta name="twitter:card" content="summary_large_image" /> 
    </Helmet>
      <Container maxWidth="xl" className='hero'>
        <Box>
			<h1 className="d-md-block d-none">Vikram Shinde</h1>
		</Box>
      </Container>
    </>
  )
}

export default Home