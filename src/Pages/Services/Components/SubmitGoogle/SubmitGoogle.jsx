import React from 'react';
import { Container, Box, Grid, List, ListItem, ListItemIcon } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import { SectionalHeading } from '../Components'

const SubmitGoogle = () => {
    return (
        <>
            <Container maxWidth='xl'>
                <Box py={4}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={11} lg={10} xl={10} className="mx-auto">
                            <SectionalHeading head="That cover every single key area of SEO, so you’re able to rank your website at the submit of google….." />
                            <Box py={5}>
                                <Grid container>
                                    <Grid xs={12} sm={12} md={11} lg={10} xl={10} className="mx-auto">
                                        {
                                            ["Instead of feeling overwhelmed ,you’ll be making steady progress toward your goal of page #1 on Google.", "Instead of confusion about what action to take, you’ll know what needs to be done with a simple look at your checklist.", "Instead of endlessly searching the internet trying to work out how to do something, you’ll follow a detailed, step-by-step process document."].map(item => {
                                                return <ListItem>
                                                    <ListItemIcon>
                                                        <Check style={{ color: "#00cef2" }} />
                                                    </ListItemIcon>
                                                    <p>{item}</p>
                                                </ListItem>
                                            })
                                        }
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

export default SubmitGoogle