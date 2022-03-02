import React, { useEffect } from "react";
import lines from "../assets/lines.png";
import lines1 from "../assets/lines_img1.png";
import lines2 from "../assets/lines_img2.png";
import lines3 from "../assets/lines_img3.png";
import lines4 from "../assets/lines_img4.png";
import lines5 from "../assets/lines_img5.png";

//CSS file
import '../styles/AboutUs.css';

//Animation on Scroll
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const AboutUs = () => {

    useEffect(() => {
        Aos.init({})
    }, []);

    return <>
        <section className="about-container" id="singleAbout">
            <div className="info-container">
                <h1>About Us</h1>
                <p>Ninjacart is India's largest Fresh Produce Supply Chain Company. We are pioneers in solving one of the toughest supply chain problems of the world by leveraging innovative technology. We source fresh produce from farmers and deliver them to businesses within 12 hours.</p>
                <button>
                    <Link to="/about">Know more</Link>
                </button>
                {/* <Link to="/about">Know More</Link> */}
            </div>
            <div className="lines-container">
                <h1>Tokari</h1>
                <img src={lines} alt="Lines" />
                <div
                    data-aos="zoom-in"
                    data-aos-delay="500"
                    data-aos-easing="ease-in-out"
                    className="line1">
                    <img src={lines1} alt="Line 1" />
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="1000"
                    data-aos-easing="ease-in-out"
                    className="line2">
                    <img src={lines2} alt="Line 1" />
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="1500"
                    data-aos-easing="ease-in-out"
                    className="line3">
                    <img src={lines3} alt="Line 1" />
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="2000"
                    data-aos-easing="ease-in-out"
                    className="line4">
                    <img src={lines4} alt="Line 1" />
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-delay="2500"
                    data-aos-easing="ease-in-out"
                    className="line5">
                    <img src={lines5} alt="Line 1" />
                </div>
            </div>

        </section>
    </>
}

export default AboutUs;