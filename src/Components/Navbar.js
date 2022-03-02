import React from "react";
import Logo from "../assets/final_logo_1.png";
import links from "../data/links";

import { Link as ScrollLink } from "react-scroll";
// import { NavHashLink as Link } from "react-router-hash-link";

//CSS
import '../styles/Navbar.css';

import { useGlobalContext } from "../context";


const Navbar = () => {
    const { navbarColor, setNavbarColor } = useGlobalContext();


    const changeBackgroundColor = () => {
        if (window.scrollY >= 80) {
            setNavbarColor(true);
        }
        else {
            setNavbarColor(false);
        }
    }

    window.addEventListener('scroll', changeBackgroundColor);

    return (
        // <nav className="navigation-bar active">
        <nav className={`${navbarColor ? "navigation-bar active" : "navigation-bar"}`}>
            <div className="navigation-links">
                {/* <div className='logo-container'>
                    
                </div> */}
                <ScrollLink to='home' spy={true} activeClass="active" offset={-200} duration={1500} smooth={true}><img src={Logo} alt='Company' className="logo-container" /></ScrollLink>
                <ul>
                    {
                        links.map((link, index) => {
                            const { page, path } = link;
                            return (
                                <li key={index}>
                                    {/* <Link to={path}>{page}</Link> */}
                                    <ScrollLink to={path} spy={true} activeClass="active" offset={-200} duration={1500} smooth={true}>{page}</ScrollLink>
                                    {/* <Link
                                        to={path}
                                        activeClass="active"
                                        spy={true}
                                        smooth={true}
                                    >
                                        {page}
                                    </Link> */}
                                    {/* <a href={path}>{page}</a> */}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;