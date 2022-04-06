import React from 'react';
import { Container, Box, Grid } from '@material-ui/core';
import './Sass/SeoSection.css';

const SeoSection = () => {
    return (
        <>
            <Container maxWidth="xl" className='seoSection'>
                <Box style={{ height: "inherit" }}>
                    <Grid container style={{ height: "inherit" }}>
                        <Grid item xs={12} sm={12} md={11} lg={10} xl={10} className="mx-auto" style={{ height: "inherit" }}>
                            <Box style={{ height: "inherit" }}>
                                <Grid container style={{ height: "inherit" }}>
                                    <Grid item xs={12} sm={12} md={8} lg={8} xl={7} style={{ height: "inherit" }} className="d-flex flex-column justify-content-center">
                                        <p><strong>SEO is a long-game.</strong> Some people are put off by that. But the fact is, all marketing is a long-game. Social media is a long game. You have to keep that marketing wheel spinning otherwise the flow of new business dries up.</p>
                                        <p>But the thing with SEO is it requires a lot less wheel spinning than, say, social media. Instead of a relentless content publishing schedule (that can often feel like you’re shouting into the void), with SEO you’re turning your website into a more profitable money-making asset.</p>
                                        <p>You’re building domain authority that can’t be easily taken from you.</p>
                                        <p>You’re building an impressive backlink profile (which acts like a defensive moat against your SEO competitors).</p>
                                        <p>You’re building a strong position in the Google results page.</p>
                                        <p>And <strong>you’re building a business</strong> that’s not dependent on the whims of other platforms.</p>
                                        <p><strong>Yes, you have to play ball with Google.</strong> But actually, their mission should be aligned with yours. That is, to make it easy for people to find the information they’re seeking. SEO is investing in the long-term success of your business.</p>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={4} lg={4} xl={5} style={{ height: "inherit" }}></Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default SeoSection