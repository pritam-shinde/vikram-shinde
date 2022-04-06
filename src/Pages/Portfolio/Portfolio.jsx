import React from 'react'
import { Container, Box, Typography, Grid } from '@material-ui/core';
import './Sass/Portfolio.css';
import Data from './Data/Data';


const Portfolio = () => {
  return (
    <>
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