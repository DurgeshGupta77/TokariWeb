import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    //Dropdown.js - For Future Update Only
    const [isDropDownDisplay, setIsDropDownDisplay] = useState(false);

    //Navbar.js
    const [navbarColor, setNavbarColor] = useState(false);

    //FullAboutUs.js
    const [changeProblemBg, setProblemBg] = useState(false);
    const [changeSolutionBg, setSolutionBg] = useState(false);

    //ContactUs.js
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState(false);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    return <AppContext.Provider value={{ isDropDownDisplay, setIsDropDownDisplay, navbarColor, setNavbarColor, changeProblemBg, changeSolutionBg, setProblemBg, setSolutionBg, name, setName, phoneNumber, setPhoneNumber, address, setAddress, error, setError, message, setMessage, success, setSuccess }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };