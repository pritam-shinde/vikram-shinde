import React from 'react'
import Helmet from 'react-helmet';
import { Container, Box, Typography, Grid } from '@material-ui/core';
import './Sass/Portfolio.css';
import Data from './Data/Data';


const Portfolio = () => {
  return (
    <>
      

<Helmet>
        <title>Vikram - Technical SEO Portfolio</title>
        <meta name="description" content="Have a look at my SEO Portfolio to view examples of my past work. I provide search engine optimization consulting and am based in Nagpur, India." />
        <link rel="canonical" href="/portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Vikram - Technical SEO Portfolio" />
        <meta property="og:description" content="Have a look at my SEO Portfolio to view examples of my past work. I provide search engine optimization consulting and am based in Nagpur, India." />
        <meta property="og:url" content="/portfolio" />
        <meta property="article:modified_time" content="2022-04-01T08:50:10+00:00" />
        <meta property="og:image" content="https://www.vikramshinde.com/wp-content/uploads/2022/02/All-SEO-issues-1024x355.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:label1" content="Est. reading time" />
        <meta name="twitter:data1" content="2 minutes" />
      </Helmet>
      <main className='mt-5 pt-5' id="portfolio-page">
        <section>
          <Container maxWidth="xl" >
            <Grid container={true}>
              <Grid item={true} xs={11} sm={11} md={10} lg={10} className="mx-auto">
                <Box>
                  <Typography variant='h1' align='center' gutterBottom>Portfolio</Typography>
                  {
                    Data.map(item => {
                      return <>
                        <Box key={item.id} mt={4}>
                          <Box pb={2}>
                            <Typography variant='h2' align='center'>{item.title}</Typography>
                          </Box>
                          <Box className='text-center'>
                            {
                              item.images.map(item => {
                                return <img key={item.id} src={item.image} alt={item.alt} className="img-fluid mb-3" />
                              })
                            }
                          </Box>
                        </Box>
                      </>
                    })
                  }
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>

    </>
  )
}

export default Portfolio