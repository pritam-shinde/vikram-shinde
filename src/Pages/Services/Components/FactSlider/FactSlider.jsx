import React, { useState, useEffect } from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { SectionalHeading } from '../Components';
import Slider1 from '../../../../Assets/Image/Slider/fact1.png';
import Slider2 from '../../../../Assets/Image/Slider/fact2.png';
import Slider3 from '../../../../Assets/Image/Slider/fact3.png';
import Slider4 from '../../../../Assets/Image/Slider/fact4.png';
import Slider5 from '../../../../Assets/Image/Slider/fact5.png';


const FactSlider = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [width])

  return (
    <>
      <Container maxWidth="xl" style={{ backgroundColor: "#e7e7e7" }} id="factSec">
        <Box py={4}>
          <Grid container>
            <Grid item xs={12} sm={12} md={11} lg={10} xl={10} className="mx-auto">
              <SectionalHeading head="Facts are stubborn things, but statistics are pliable." />
              <Box pt={2}>
                <Carousel autoPlay={true} interval={3000} swipeable={true} infiniteLoop={true} showIndicators={false} emulateTouch={true} width={width < 576 ? "100%" : "60%"} showThumbs={false} >
                  {
                    [{image:Slider1, alt:"page insight desktop"},{image:Slider2, alt:"Domain Analytics"},{image:Slider3, alt:"site audit"},{image:Slider4, alt:"page insight mobile"},{image:Slider5, alt:"GTmetrix grade"}].map(item => {
                      return <>
                        <div>
                          <img src={item.image} alt={item.alt} title={item.alt} />
                        </div>
                      </>
                    })
                  }
                </Carousel>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default FactSlider