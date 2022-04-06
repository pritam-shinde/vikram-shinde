import React from 'react';
import { Container, Box, Grid, List, ListItem, ListItemIcon } from '@material-ui/core';
import { Check } from '@material-ui/icons'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { SectionalHeading } from '../Components';
import './Sass/SeoServicesSlider.css'

const SeoServiceSilder = () => {
    const breakPoints = {
        "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }
    return (
        <>
            <Container maxWidth="xl" id="seoServiceSlider">
                <Box py={4}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={11} lg={10} xl={10} className="mx-auto">
                            <SectionalHeading head="Here’s just a glimpse of unmissable information contained within The SEO Checklist Bundle…" color="#fff" />
                            <Box mt={3} pt={5}>
                                <Swiper slidesPerView={1} breakpoints={breakPoints} autoplay={true}>
                                    {
                                        [{ id: "seoSerSlide1", title: "THE FOUNDATION", para: "To build a solid house, you have to start with the foundations. SEO is no different.", points: ["How to set up Google Analytics.", "How to start tracking your keywords", "Tracking important metrics in Google Search Console"] },

                                        { id: "seoSerSlide2", title: "CONTENT", para: "When you create awesome content, people will share it, quality sites will link to it and Google will love you for it.", points: ["Learn to use Google to get SEO boosting content ideas", "See how to do quick and effective keyword research", "Identify and fix content issues that damage your ranking"] },

                                        { id: "seoSerSlide3", title: "PERFORMANCE", para: "Learn how to make sure your website is running like a high performance engine. So everything loads like lightning.", points: ["Fine tune your website for SEO boosting performance", "Learn to optimize images to boost website speed", "How to choose your web host and get the most from them"] },

                                        { id: "seoSerSlide4", title: "OFF-PAGE SEO", para: "People need to know about your website before you can convert them. Off-page SEO helps create awareness of your website.", points: ["How to find and gain the most valuable backlinks for your site", "Learn effective link building and outreach strategy", "Using social media to climb the Google rankings"] },

                                        { id: "seoSerSlide5", title: "USER EXPERIENCE", para: "Google cares about the experience a person has when they land on your site. So you should too.", points: ["How to check your site loads quickly and is mobile friendly", "Making sure you have short and easy to read URLs", "See how to improve your site by watching people use it"] },

                                        { id: "seoSerSlide6", title: "ON-PAGE SEO", para: "It’s key that you make every page on your site easy for search engines to crawl and for people to use.", points: ["Position keywords so Google notices and values your content", "Dealing with images so Google can understand and include them", "Get more clicks in the SERPs with better page titles and meta descriptions"] },
                                        ].map(item => {
                                            return <SwiperSlide>
                                                <Box>
                                                    <h4 style={{ color: "#00cef2", textAlign: "center" }}>{item.title}</h4>
                                                    <Box className='sa-description'>
                                                        <p style={{ color: "#fff" }}>{item.para}</p>
                                                        <Box>
                                                            {
                                                                item.points.map(point => {
                                                                    return <ListItem>
                                                                        <ListItemIcon>
                                                                            <Check style={{ color: "#00cef2"}} />
                                                                        </ListItemIcon>
                                                                        <p style={{ color: "#00cef2"}} >{point}</p>
                                                                    </ListItem>
                                                                })
                                                            }
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </SwiperSlide>
                                        })
                                    }
                                </Swiper>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default SeoServiceSilder