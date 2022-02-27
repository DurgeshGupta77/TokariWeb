import React, { useState } from "react";
import Logo from "../assets/final_logo_1.png";
import links from "../data/links";

//CSS
import '../styles/Navbar.css';


const Navbar = () => {
    const [navbarColor, setNavbarColor] = useState(false);

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
                <img src={Logo} alt='Company' className="logo-container" />
                <ul>
                    {
                        links.map((link, index) => {
                            const { page, path } = link;
                            return (
                                <li key={index}>
                                    <a href={path}>{page}</a>
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