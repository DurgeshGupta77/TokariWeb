import React from "react";
import '../styles/Dropdown.css';

//Context.js
import { useGlobalContext } from "../context";

const Dropdown = ({ label, url }) => {
    const { isDropDownDisplay } = useGlobalContext();
    return <div className={`${isDropDownDisplay ? 'drop-list show' : 'drop-list'}`}>
        <a href={url}>{label}</a>
    </div>
}

export default Dropdown;