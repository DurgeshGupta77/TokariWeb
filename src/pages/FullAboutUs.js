import React, { useState } from "react";
import { FaLightbulb, FaTruckLoading } from "react-icons/fa";

//CSS
import "../styles/FullAboutUs.css";

//Images
import whyus from "../assets/whyus.png";


//Components
import Basket from "../Components/Basket";

const FullAboutUs = () => {
    const [changeProblemBg, setProblemBg] = useState(false);
    const [changeSolutionBg, setSolutionBg] = useState(false);
    return <React.Fragment>
        <section className="about-us-section">
            <h1 className="main-title">About Us!</h1>
            <p className="main-p">We are pioneers in the tech-driven supply chain space for fresh produce</p>
            <div className="about-div">
                <h1>Supply Chain and Tech</h1>
                <p>Ninjacart is India's largest fresh produce supply chain company that is solving one of the toughest problems in the world through technology. We connect producers of food directly with retailers, restaurants, and service providers using in-house applications that drive end to end operations. Currently, our Supply Chain is equipped to move 1400 tonnes of perishables from farms to businesses, every day, in less than 12 hours.</p>
            </div>
            <div className="opportunities">
                <div className={`${changeProblemBg ? "problems change" : "problems"}`} onMouseEnter={() => { setProblemBg(true) }} onMouseLeave={() => { setProblemBg(false) }}>
                    <div className="icon-container">
                        <FaLightbulb className="icon" />
                    </div>
                    <h1>The Problem</h1>
                    <ul>
                        <li>
                            <p>Farmers experience price risk, information asymmetry about demand, distribution inefficiency, and receive late payments.</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>Farmers experience price risk, information asymmetry about demand, distribution inefficiency, and receive late payments.</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>Farmers experience price risk, information asymmetry about demand, distribution inefficiency, and receive late payments.</p>
                        </li>
                    </ul>
                </div>
                <div className={`${changeSolutionBg ? "solutions change" : "solutions"}`} onMouseEnter={() => { setSolutionBg(true) }} onMouseLeave={() => { setSolutionBg(false) }}>
                    <div className="icon-container">
                        <FaTruckLoading className="icon" />
                    </div>
                    <h1>Our Solution</h1>
                    <ul>
                        <li>
                            <p> We eliminated intermediaries by taking control of the Supply Chain by using technology and analytics.</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p> We eliminated intermediaries by taking control of the Supply Chain by using technology and analytics.</p>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p> We eliminated intermediaries by taking control of the Supply Chain by using technology and analytics.</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="why-us-container">
                <h1 className="title">Why Choose Us?</h1>
                <p className="title-p">The fact of the matter is that you really know something's organic when you find bugs! they obviously wouldn't have made it that far in a non-organic growing environment, so better than any certification or seal on a package, the presence of creatures let you know the plant was healthy.</p>
                <div className="design-img-container">
                    <img src={whyus} alt="design" className="design-img" />
                </div>
                <Basket />
            </div>
        </section>
    </React.Fragment>
}

export default FullAboutUs;