import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isDropDownDisplay, setIsDropDownDisplay] = useState(false);
    return <AppContext.Provider value={{ isDropDownDisplay, setIsDropDownDisplay }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider };