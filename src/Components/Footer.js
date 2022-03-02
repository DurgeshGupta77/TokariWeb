import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Aos from "aos";
import { Link as ScrollLink } from "react-scroll";

import "../styles/Footer.css";

const Footer = () => {
    useState(() => {
        Aos.init({});
    });

    return (
        <footer data-aos="fade-up" data-aos-duration="1000"
            data-aos-easing="ease-in-out">
            <div className="footer-company">
                <h1>Company</h1>
                <ul>
                    <li>
                        <ScrollLink to='home' spy={true} activeClass="active" offset={-200} duration={1500} smooth={true}>Home</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to='singleAbout' spy={true} activeClass="active" offset={-200} duration={1500} smooth={true}>About Us</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to='people' spy={true} activeClass="active" offset={-200} duration={1500} smooth={true}>People</ScrollLink>
                    </li>
                    <li>
                        <ScrollLink to='contact' spy={true} activeClass="active" offset={-200} duration={1500} smooth={true}>Contact Us</ScrollLink>
                    </li>
                </ul>
            </div>
            <div className="footer-contact">
                <h1>Contact Us</h1>
                <ul>
                    <li>
                        <a href="tel:9861444355"><FaPhoneAlt /><span>9861444355</span></a>
                    </li>
                    <li>
                        <a href="mailto:sagarkunwar618@gmail.com"><AiOutlineMail /><span>tokari@gmail.com</span></a>
                    </li>
                </ul>
            </div>
            <div className="footer-social">
                <h1>Connect with Us</h1>
                <ul>
                    <li>
                        <a href="/"><FaFacebook /></a>
                    </li>
                    <li>
                        <a href="/"><FaInstagram /></a>
                    </li>
                    <li>
                        <a href="/"><FaLinkedin /></a>
                    </li>
                    <li>
                        <a href="/"><FaTwitter /></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;