import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, makeStyles } from '@material-ui/core';
import Logo from '../../Assets/Image/Logo/logo.png';
import './Sass/Header.css'

const useStyles = makeStyles(theme => ({
    brandImageDesktop: { width: "75%", height: "auto" },
    brandImageMobile: { width: "70%", height: "auto" },
    bgDark: { backgroundColor: "#000 !important" },
    bgTransparent: { backgroundColor: "transparent" },
    txtWhite: { color: "#fff !important" },
    DeskMenu: { marginLeft: "auto !important" },
    mobMenu: { marginLeft: "auto !important", marginRight: "auto !important" }
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

    let navLinks = document.querySelectorAll('.nav-link');
    Object.keys(navLinks).map(item => {
        navLinks[item].addEventListener('click', () => {
            document.querySelector('.navbar-toggler').classList.remove('collapsed');
            document.querySelector('.navbar-collapse.collapse').classList.remove('show');
        })
    })

    const classes = useStyles()
    return (
        <>
            <header className={`fixed-top ${location.pathname === "/contact/" ? classes.bgDark : location.pathname === "/portfolio/" ? classes.bgDark : null}`} style={{ backgroundColor: (scrollHeight > 50) ? "#000" : "transparent" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 col-12 mx-auto">
                            <nav className={`navbar navbar-expand-lg bg-transparent px-1 navbar-light`}>
                                {
                                    location.pathname !== "/" ? <Link className='navbar-brand' title='Home' to="/">
                                        <img src={Logo} alt="Vikramaa Logo" title='Vikramaa Logo' className={width < 576 ? classes.brandImageMobile : classes.brandImageDesktop} />
                                    </Link> : <div style={{ flexGrow: 1 }} />
                                }
                                <Button className="navbar-toggler border-0 outline-0 text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className={`fas fa-bars ${location.pathname === "/" ? "text-dark" : "text-white"}`}></span>
                                </Button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className={`navbar-nav ml-auto align-items-end`} style={{ marginLeft: "auto !important" }}>
                                        <li className="nav-item"><Link title='Home' style={{ color: scrollHeight > 50 ? "#fff" : "#000" }} to="/" className={`nav-link ${location.pathname === "/" ? "text-dark" : "text-white"}`}>Home</Link></li>
                                        <li className="nav-item"><Link title="services" style={{ color: scrollHeight > 50 ? "#fff" : "#000" }} to="/services/" className={`nav-link ${location.pathname === "/" ? "text-dark" : "text-white"}`}>Service</Link></li>
                                        <li className="nav-item"><Link title="Portfolio" style={{ color: scrollHeight > 50 ? "#fff" : "#000" }} to="/portfolio/" className={`nav-link ${location.pathname === "/" ? "text-dark" : "text-white"}`}>Portfolio</Link></li>
                                        <li className="nav-item"><Link title='contact' style={{ color: scrollHeight > 50 ? "#fff" : "#000" }} to="/contact/" className={`nav-link ${location.pathname === "/" ? "text-dark" : "text-white"}`}>Contact</Link></li>
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