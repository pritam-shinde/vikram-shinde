import React from 'react';
import { Container, Box, Grid, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { SectionalHeading } from '../Components';
import { Check } from '@material-ui/icons';

const StatSection = () => {
    return (
        <>
            <Container maxWidth="xl" id="statSection">
                <Box py={4}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={11} lg={10} xl={10} className="mx-auto">
                            <SectionalHeading para="SOME STATS TO SHOW WHY" head="Being on the first page of google is worth your hard work" />
                            <Box pt={2}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                                        <Box>
                                            <Box>
                                                <List>
                                                    {
                                                        ["91% of adults use search engines to find information (they should find your site).", "SEO Checklist Blue Bullet Point Google dominates search with over 90% of the market (that’s roughly 5.8 billion searches a day)", "SEO Checklist Blue Bullet Point About 95% of searchers only look at the first page of Google (let’s help you get there).", "SEO Checklist Blue Bullet Point The top organic search result in Google gets clicked over 30% of the time.", "SEO Checklist Blue Bullet Point Moving up one position in the search results can increase click through rates by over 30%."].map((item, index) => {
                                                            return <ListItem key={`stat-${index}`}>
                                                                    <ListItemIcon>
                                                                        <Check style={{ color: "#00ccff", }} />
                                                                    </ListItemIcon>
                                                                    <ListItemText primary={item} />
                                                                </ListItem>
                                                        })
                                                    }
                                                </List>
                                            </Box>
                                            <Box>
                                                <p className='ps-md-0 ps-3'><strong>My job will be fixing website issues in order of priority — meaning fixes the critical stuff first, and proceed to knock out all the low-hanging fruit to fast track the website to a score of 92%.</strong></p>
                                                <p className='ps-md-0 ps-3' style={{ color: "#54595f" }}>I will Plan your website structure (new sites only), I will make sure.</p>
                                            </Box>
                                            <Box>
                                                {
                                                    ["Your site is crawlable", "Your site is indexable", "You’re using HTTPs", "Your site loads fast", "Your website is accessible at one domain", "Your site is mobile-friendly, Fix broken pages, Fix duplicate content issues"].map(item => {
                                                        return <>
                                                            <ListItem>
                                                                <ListItemIcon>
                                                                    <Check style={{ color: "#00ccff", }} />
                                                                </ListItemIcon>
                                                                <ListItemText primary={item} />
                                                            </ListItem>
                                                        </>
                                                    })
                                                }
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} >
                                        <Box style={{ backgroundColor: "#161A23", padding: "2.5rem" }}>
                                            <Box>
                                                <h2 className='text-white' style={{ fontWeight: 300, lineHeight: 1.5 }}>TECHNICAL SEO EXPERT SEMRUSH & AHREFS</h2>
                                                <p style={{ fontSize: "1.2rem", color: "#00ccff" }}>You will get Website Health score at +92% (SEMrush/AHREFs)</p>
                                            </Box>
                                            <Box>
                                                {
                                                    ["I will make sure the “Website Health Score is at +90(SEMrush/AHREFs)", "I’m a trusted, dependable, results-oriented person who can consistently meet deadlines and get results for clients. My role will focus entirely on making sure all SEMrush & AHREFs issues are corrected on each client’s website.", "I have the following experience:", "Technical SEO and On-Page SEO Here are examples of issues I will fix:"].map(item => {
                                                        return <>
                                                            <p className='text-white'>{item}</p>
                                                        </>
                                                    })
                                                }
                                            </Box>
                                            <Box>
                                                <ul className='list-unstyled'>
                                                    {
                                                        ["Issues with Unmagnified and Uncoached JS and CSS file", "External & Internal broken links", "Images alt attributes & non-descriptive anchor text, Pages don’t have an h1, h2 heading", "Sitemap.xml & robots.txt issues", "Pages have a low text-HTML ratio", "Pages have a low word count", "Pages don’t have meta title & descriptions"].map(item => {
                                                            return <>
                                                                <li className='text-white mb-2'>{item}</li>
                                                            </>
                                                        })
                                                    }
                                                </ul>
                                            </Box>
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

export default StatSection