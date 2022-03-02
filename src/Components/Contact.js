import React from "react";
import "../styles/Contact.css";

import { Link } from "react-router-dom";

const Contact = () => {
    return <section className="contact-div" id="contact">
        <h1>Want to Connect with Us?</h1>
        <button><Link to="/contactUs">Connect with Tokari</Link></button>
    </section>
}

export default Contact;