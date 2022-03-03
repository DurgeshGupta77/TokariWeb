import React from "react";
import "../styles/Error.css";
import { Link } from "react-router-dom";

const Error = () => {
    return <section className="error-section">
        <h1>Oops! Looks like you are in the wrong place</h1>
        <button><Link to='/'>Go back to Home Page!</Link></button>
    </section>
}

export default Error;