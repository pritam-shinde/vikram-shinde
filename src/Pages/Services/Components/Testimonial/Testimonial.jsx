import React from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import { Star } from '@material-ui/icons'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { SectionalHeading } from '../Components';
import './Sass/Testimonial.css'

const Testimonial = () => {
  return (
    <>
      <Container maxWidth="xl" style={{ backgroundColor: "#161A23" }} id="testimonialSec">
        <Box py={4}>
          <Grid container>
            <Grid item xs={12} sm={12} md={11} lg={10} xl={10} className="mx-auto">
              <SectionalHeading head="Here’s What my Clients Are Saying About Me." color="#fff" />
              <Box pt={2}>
                <Grid container>
                  <Grid item xs={12} sm={12} md={10} lg={10} xl={10} className="mx-auto" >
                    <Box py={5}>
                      <Carousel autoPlay={true} interval={3000} swipeable={true} infiniteLoop={true} showIndicators={false} emulateTouch={true} showThumbs={false}>
                        {
                          [
                            { id: "testimonial1", comment: "Vikram was great from the very beginning! I had multiple people apply for the task and Vikram was the only one that read the whole description and responded accordingly. He is super talented and a fast worker. Completed the project early! If you’re in need of technical SEO or Schema for your site, then Vikram is your guy! I look forward to working with him on future projects.", designation: "Schema SEO Expert Consutant" }, { id: "testimonial2", comment: "Vikram did a site audit and fixed a bunch of technical errors on my website. He did a great job and got to work right away. I would totally recommend him!", designation: "Website SEO Person to Join Team" }, { id: "testimonial3", comment: "Vikram is a very knowledgeable individual when it comes to search engine optimization and schema markup.", designation: "Schema markup expert needed" }, { id: "testimonial4", comment: "Vikram did a site audit and fixed a bunch of technical errors on my website. He did a great job and got to work right away. I would totally recommend him!", designation: "Technical SEO audit and fix" }, { id: "testimonial5", comment: "Great communication, Vikram did exactly what was required and made any changes I requested quickly and efficiently.", designation: "Write and Implement Schema" }
                          ].map(item => {
                            return <>
                              <Box key={item.id}>
                                <Box className='start' py={3}>
                                  <Star style={{ color: "#fec42d" }} /><Star style={{ color: "#fec42d" }} /><Star style={{ color: "#fec42d" }} /><Star style={{ color: "#fec42d" }} /><Star style={{ color: "#fec42d" }} />
                                </Box>
                                <p className='comment'>{item.comment}</p>
                                <p className='des'>{item.designation}</p>
                                <p className='Designation'>Designation</p>
                              </Box>
                            </>
                          })
                        }
                      </Carousel>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default Testimonial