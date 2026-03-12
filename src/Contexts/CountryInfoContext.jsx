/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const CountryInfoContext = createContext();

function CountryInfoContextProvider({ children }) {

    const [ moreCountryInfo, setMoreCountryInfo ] = useState([]); 

    return(
        <CountryInfoContext.Provider value={{ moreCountryInfo, setMoreCountryInfo }}>
            {children}
        </CountryInfoContext.Provider>
    );
}

export default CountryInfoContextProvider;