import React, { useState, useEffect } from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    para: { fontSize: "1.2rem", color: "#54595f", textAlign: "center", fontWeight: 500 },
    head: { fontSize: "3.6rem", color: "#000", textAlign: 'center' },
    mobHead: { fontSize: "1.8rem", color: "#000", textAlign: 'center' }
}))

const SectionalHeading = ({ para, head, color }) => {
    const [width, setWidth] = useState();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    const classes = useStyles();
    return (
        <>
            <Box>
                <p className={classes.para}>{para}</p>
                <h2 className={width < 576 ? classes.mobHead : classes.head} style={{color: color ? color : "#000"}}>{head}</h2>
            </Box>
        </>
    )
}

export default SectionalHeading