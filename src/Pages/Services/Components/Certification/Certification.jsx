import React from 'react'
import { Container, Box, Grid } from '@material-ui/core';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { SectionalHeading } from '../Components';
import Google from '../../../../Assets/Image/Slider/google.png';
import g1 from '../../../../Assets/Image/Slider/g1.jpg';
import g2 from '../../../../Assets/Image/Slider/g2.jpg';
import g3 from '../../../../Assets/Image/Slider/g3.jpg';
import g4 from '../../../../Assets/Image/Slider/g4.jpg';
import g5 from '../../../../Assets/Image/Slider/g5.jpg';
import AMCAT from '../../../../Assets/Image/Slider/AMCAT.png';
import Semrush from '../../../../Assets/Image/Slider/semrush.png'
import s1 from '../../../../Assets/Image/Slider/s1.png';
import s2 from '../../../../Assets/Image/Slider/s2.png';
import s3 from '../../../../Assets/Image/Slider/s3.png';
import s4 from '../../../../Assets/Image/Slider/s4.png';
import './Sass/Certification.css'



const Certification = () => {
    return (
        <>
            <Container maxWidth="xl" id="certification">
                <Box py={4}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={11} lg={10} xl={10} className="mx-auto">
                            <SectionalHeading head="My Certification" />
                            <Box pt={5}>
                                <Grid container justifyContent='center' spacing={3}>
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                        <img src={Google} alt="google" className='img-fluid' />
                                        <Box>
                                            <Carousel autoPlay={true} interval={3000} swipeable={true} infiniteLoop={true} showIndicators={false} emulateTouch={true} showThumbs={false}>
                                                {
                                                    [g1, g2, g3, g4, g5].map(item => {
                                                        return <div>
                                                            <img src={item} alt="google certificate" />
                                                        </div>
                                                    })
                                                }
                                            </Carousel>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className="text-center">
                                        <img src={AMCAT} alt="AMCAT" className='img-fluid' />
                                        <Box>
                                            <div class="accordion" id="accordionExample">
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingOne">
                                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            Channel Sales Professional
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                            <p>Issuing authority <strong>Aspiring Minds</strong><br/>
                                                                Credential Identifier Credential ID<strong style={{color: "#d72024"}}>10924516-195</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingTwo">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            Collections Specialist
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                        <p>Issuing authority <strong>Aspiring Minds</strong><br/>
                                                                Credential Identifier Credential ID<strong style={{color: "#d72024"}}>10924516-197</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingThree">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                            Customer Service Specialist
                                                        </button>
                                                    </h2>
                                                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                        <p>Issuing authority <strong>Aspiring Minds</strong><br/>
                                                                Credential Identifier Credential ID<strong style={{color: "#d72024"}}>10924516-195</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFour">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                            Data Processing Specialist
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                        <p>Issuing authority <strong>Aspiring Minds</strong><br/>
                                                                Credential Identifier Credential ID<strong style={{color: "#d72024"}}>10924516-211</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingFive">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                            English Writing Proficiency
                                                        </button>
                                                    </h2>
                                                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                        <p>Issuing authority <strong>Aspiring Minds</strong><br/>
                                                                Credential Identifier Credential ID<strong style={{color: "#d72024"}}>10924516-471</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="accordion-item">
                                                    <h2 class="accordion-header" id="headingSix">
                                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                            Telesales Professional
                                                        </button>
                                                    </h2>
                                                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                                        <div class="accordion-body">
                                                        <p>Issuing authority <strong>Aspiring Minds</strong><br/>
                                                                Credential Identifier Credential ID<strong style={{color: "#d72024"}}>10924516-282</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                        <img src={Semrush} alt="Semrush" className='img-fluid' />
                                        <Box mt={5}>
                                            <Carousel autoPlay={true} interval={3000} swipeable={true} infiniteLoop={true} showIndicators={false} emulateTouch={true} showThumbs={false}>
                                                {
                                                    [s1, s2, s3, s4].map(item => {
                                                        return <div>
                                                            <img src={item} alt="google certificate" />
                                                        </div>
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

export default Certification