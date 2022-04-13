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
import AMCAT from '../../../../Assets/Image/Slider/amcat.png';
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
                                        <img src={Google} alt="google" title='google' className='img-fluid' />
                                        <Box>
                                            <Carousel autoPlay={true} interval={3000} swipeable={true} infiniteLoop={true} showIndicators={false} emulateTouch={true} showThumbs={false}>
                                                {
                                                    [{ image: g1, alt: "Shopping ads certification" }, { image: g2, alt: "Google Ads App Certification" }, { image: g3, alt: "Google Ads Search Certification" }, { image: g4, alt: "Google Ads video Certification" }, { image: g5, alt: "Google Ads Display Certifiaction" }].map(item => {
                                                        return <div>
                                                            <img src={item.image} alt={item.alt} title={item.alt} />
                                                        </div>
                                                    })
                                                }
                                            </Carousel>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} className="text-center">
                                        <img src={AMCAT} alt="AMCAT" title='AMCAT' className='img-fluid' />
                                        <Box mt={4}>
                                            <div class="accordion" id="accordionExample">
                                                <div class="card">
                                                    <div class="card-header" id="headingOne">
                                                        <h2 class="mb-0">
                                                            <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                Channel Sales Professional
                                                            </button>
                                                        </h2>
                                                    </div>

                                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            <p>Issuing authority <strong>Aspiring Minds</strong><br />
                                                                Credential Identifier Credential ID-<strong style={{ color: "#d72024" }}>10924516-195</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingTwo">
                                                        <h2 class="mb-0">
                                                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                Collections Specialist
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            <p>Issuing authority <strong>Aspiring Minds</strong><br />
                                                                Credential Identifier Credential ID-<strong style={{ color: "#d72024" }}>10924516-197</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingThree">
                                                        <h2 class="mb-0">
                                                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                Customer Service Specialist
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            <p>Issuing authority <strong>Aspiring Minds</strong><br />
                                                                Credential Identifier Credential ID-<strong style={{ color: "#d72024" }}>10924516-195</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingfour">
                                                        <h2 class="mb-0">
                                                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                                                Data Processing Specialist
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapsefour" class="collapse" aria-labelledby="headingfour" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            <p>Issuing authority <strong>Aspiring Minds</strong><br />
                                                                Credential Identifier Credential ID-<strong style={{ color: "#d72024" }}>10924516-211</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingFive">
                                                        <h2 class="mb-0">
                                                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                                English Writing Proficiency
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            <p>Issuing authority <strong>Aspiring Minds</strong><br />
                                                                Credential Identifier Credential ID-<strong style={{ color: "#d72024" }}>10924516-471</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card">
                                                    <div class="card-header" id="headingSix">
                                                        <h2 class="mb-0">
                                                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                                Telesales Professional
                                                            </button>
                                                        </h2>
                                                    </div>
                                                    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                                        <div class="card-body">
                                                            <p>Issuing authority <strong>Aspiring Minds</strong><br />
                                                                Credential Identifier Credential ID-<strong style={{ color: "#d72024" }}>10924516-282</strong></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                        <img src={Semrush} alt="Semrush" className='img-fluid' title="semrush" />
                                        <Box mt={5}>
                                            <Carousel autoPlay={true} interval={3000} swipeable={true} infiniteLoop={true} showIndicators={false} emulateTouch={true} showThumbs={false}>
                                                {
                                                    [{ image: s1, alt: "Semrush Technical SEO Certification" }, { image: s2, alt: "Semrush Digital Agencies Certification" }, { image: s3, alt: "Advance Semrush User Certification" }, { image: s4, alt: "Semrush SEO Toolkit Certification" }].map(item => {
                                                        return <div>
                                                            <img src={item.image} alt={item.alt} title={item.alt} />
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