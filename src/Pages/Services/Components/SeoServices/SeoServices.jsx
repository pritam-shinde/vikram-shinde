import React from 'react';
import { Container, Box, Grid, makeStyles } from '@material-ui/core';
import './Sass/SeoServices.css';

const useStyles = makeStyles(theme=>({
    cardTitle:{color: "#6ec1e4", fontSize:"1.2rem"},
    cardText:{fontSize: "1rem", color:"#fff"}
}))

const SeoServices = () => {

    const classes = useStyles()

    return (
        <>
            <Container maxWidth="xl" className='seoServices'>
                <Box style={{ height: "inherit" }}>
                    <Grid container style={{ height: "inherit" }}>
                        <Grid item xs={12} sm={12} md={11} lg={10} xl={10} className="mx-auto" style={{ height: "inherit" }}>
                            <Box py={4} style={{ height: "inherit" }}>
                                <Grid container style={{ height: "inherit" }} spacing={3}>
                                    {
                                        [{ id:'seoService1', title: "FOUNDATION", para: "which helps you understand how to set up analytics, search console and some onsite basics and keyword tracking options." }, { id:'seoService2', title: "USER EXPERIENCE", para: "covers a variety of items that improve the experience a visitor has when visiting your site. From site speed to URL creation to how to use heat maps." }, { id:'seoService3', title: "PERFORMANCE", para: "focuses on web hosting, speeding up your website and more technical aspects of owning a website." }, { id:'seoService4', title: "TECHNICAL SEO", para: "takes you through sitemaps, SSL, indexing issues and more that will help your content show well in the search engines and minimize ranking issues." }, { id:'seoService5', title: "CONTENT", para: "will help you improve your content strategy from creating content hubs to lessening issues with cannibalization." }, { id:'seoService6', title: "ON-PAGE SEO", para: "will help you understand user intent and how to best create posts and pages to skyrocket your traffic." }, { id:'seoService7', title: "OFF-PAGE SEO", para: "focuses on web hosting, speeding up your website and more technical aspects of owning a website." }, { id:'seoService8', title: "LOCAL SEO", para: "focuses on how to claim a business, using NAP and how to create local content to improve your local ranking." }].map(item => {
                                            return <Grid key={item.id} item xs={12} md={6} lg={6}>
                                                    <Box>
                                                        <h5 className={classes.cardTitle}>{item.title}</h5>
                                                        <p className={classes.cardText}>{item.para}</p>
                                                    </Box>
                                                </Grid>
                                        })
                                    }
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default SeoServices