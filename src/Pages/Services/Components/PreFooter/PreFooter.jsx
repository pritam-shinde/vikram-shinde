import React from 'react';
import { Container, Grid, Link } from '@material-ui/core';
import linkdin from './Images/linkdin.png';
import tag from './Images/tag.png';
import upWork from './Images/upwork.png';
import './sass/PreFooter.css'

const PreFooter = () => {
    return (
        <Container maxWidth="xl" id="preFooter">
            <Grid container={true} justifyContent="center">
                <Grid item={true} xs={12} sm={6} md={3} className="d-flex justify-content-center align-items-center">
                    <Link href='https://www.linkedin.com/in/thevikramshinde/' target="_blank" >
                        <img src={linkdin} alt="linkdin vikram" className='img-fluid img1 mb-md-0 mb-3' />
                    </Link>
                </Grid>
                <Grid item={true} xs={12} sm={6} md={3} className="d-flex justify-content-center align-items-center">
                    <Link href='https://www.upwork.com/freelancers/~010a80a28138166829' target="_blank" >
                        <img src={upWork} alt="upwork" className='img-fluid' />
                    </Link>
                </Grid>
                <Grid item={true} xs={12} sm={6} md={6}>
                    <div class="media align-items-center  flex-md-row flex-column">
                        <img src={tag} class="mr-md-5 mr-2" alt="..." />
                            <div class="media-body">
                                <h2 class="mt-0">SO FAR, SO GOOD!</h2>
                            </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default PreFooter