import React from 'react';
import { Container, Box, Grid, List, ListItem, ListItemIcon,} from '@material-ui/core';
import { Check } from '@material-ui/icons';
import './Sass/ExpSec.css'

const ExperienceSec = () => {
    return (
        <>
            <Container maxWidth="xl" id="expSec">
                <Box py={3}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={11} lg={10} xl={10} className="mx-auto">
                            <Box>
                                <Grid container>
                                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                                        <Box id="list">
                                            <h6 style={{ color: "#fff", fontSize: "1.3rem" }}>I’m highly experienced in:</h6>
                                            <Box>
                                                <List>
                                                    {
                                                        ["Website SEO Audit", "SEO strategy planning", "Comprehensive Keyword Research", "Competitor Analysis", "Content Optimization", "Schema Markup", "On-page SEO", "Technical SEO", "Content Marketing", "Web Analytics (Google Analytics)", "Link Building", "Link Detox (Google Penalty Removal)", "SEO project management"].map(item => {
                                                            return <ListItem>
                                                                <ListItemIcon>
                                                                    <Check style={{ color: "#00ccff", }} />
                                                                </ListItemIcon>
                                                                <p className="text-white">{item}</p>
                                                            </ListItem>
                                                        })
                                                    }
                                                </List>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={7} lg={7} xl={7}></Grid>
                                </Grid>
                            </Box>
                            <Box>
                                <h3 style={{fontStyle:"italic",textAlign:"center"}}>Thoughts become things. If you see it in your mind, you will hold it in your hand.</h3>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default ExperienceSec