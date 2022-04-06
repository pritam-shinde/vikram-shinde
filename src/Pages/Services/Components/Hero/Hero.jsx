import React,{useState, useEffect} from 'react';
import { Container, Box, Grid, makeStyles } from '@material-ui/core';
import './Sass/Hero.css'

const useStyles = makeStyles(theme=>({
    para: { color: "#00ccff", fontSize: "2.5rem",fontStyle:"italic"},
    head:{fontSize: "3rem", color:"#fff"},
    mobPara:{fontSize:"1.5rem", color: "#00ccff",fontStyle:"italic"},
    mobHead:{fontSize:"2rem", color:"#fff"}
}))

const Hero = () => {
    const [width, setWidth] = useState();

    useEffect(()=>{
        setWidth(window.innerWidth)
    },[width])

    const classes = useStyles()
    return (
        <>
            <Container maxWidth="xl" className='root'>
                <Box style={{ height: "inherit" }}>
                    <Grid container style={{ height: "inherit" }}>
                        <Grid item xs={12} sm={12} md={11} lg={10} style={{ height: "inherit" }} className="mx-auto d-flex flex-column justify-content-center">
                            <p className={width < 576 ? classes.mobPara : classes.para}>Welcome To My Galaxy</p>
                            <h1 className={width < 576 ? classes.mobHead : classes.head}>Investing in SEO = <br/>
                                Investing in your business</h1>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Hero