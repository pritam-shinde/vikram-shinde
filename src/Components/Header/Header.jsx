import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import Logo from '../../Assets/Image/Logo/logo.png';
import './Sass/Header.css'

const useStyles = makeStyles(theme => ({
    brandImageDesktop: { width: "75%", height: "auto" },
    brandImageMobile: { width: "70%", height: "auto" },
    bgDark: {backgroundColor: "#000000c4 !important"},
    bgTransparent:{backgroundColor:"transparent"},
    txtWhite:{color: "#fff !important"}
}))

const Header = () => {
    const [width, setWidth] = useState();
    const [scrollHeight, setScrollHeight] = useState()
    const location = useLocation();

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width]);

    window.addEventListener('scroll', () => {
        setScrollHeight(window.scrollY)
    })

    const classes = useStyles()
    return (
        <>
            <header className={`fixed-top ${location.pathname === "/contact/" ? classes.bgDark : location.pathname === "/portfolio/" ? classes.bgDark : null}`} style={{ backgroundColor: (scrollHeight > 50) ?  "#000000c4" : "transparent" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 col-12 mx-auto">
                            <nav className={`navbar navbar-expand-lg bg-transparent px-1 navbar-light`}>
                                {
                                    location.pathname !== "/" ? <Link className='navbar-brand' to="/">
                                        <img src={Logo} alt="logo" className={width < 576 ? classes.brandImageMobile : classes.brandImageDesktop} />
                                    </Link> : <div style={{ flexGrow: 1 }} />
                                }
                                <Button className="navbar-toggler border-0 outline-0 text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className={scrollHeight > 50 ?'text-white' : "text-dark"}>menu</span>
                                </Button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto">
                                        <li className="nav-item"><Link style={{color: scrollHeight > 50 ? "#fff" : "#000" }} to="/" className={`nav-link ${location.pathname === "/contact/" ? classes.txtWhite : null} ${location.pathname === "/portfolio/" ? classes.txtWhite : null}`}>Home</Link></li>
                                        <li className="nav-item"><Link style={{color: scrollHeight > 50 ? "#fff" : "#000" }} to="/services/" className={`nav-link ${location.pathname === "/contact/" ? classes.txtWhite : null} ${location.pathname === "/portfolio/" ? classes.txtWhite : null}`}>Service</Link></li>
                                        <li className="nav-item"><Link style={{color: scrollHeight > 50 ? "#fff" : "#000" }} to="/portfolio/" className={`nav-link ${location.pathname === "/contact/" ? classes.txtWhite : null} ${location.pathname === "/portfolio/" ? classes.txtWhite : null}`}>Portfolio</Link></li>
                                        <li className="nav-item"><Link style={{color: scrollHeight > 50 ? "#fff" : "#000" }} to="/contact/" className={`nav-link ${location.pathname === "/contact/" ? classes.txtWhite : null} ${location.pathname === "/portfolio/" ? classes.txtWhite : null}`}>Contact</Link></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div> 
                </div>
            </header>
        </>
    )
}

export default Header