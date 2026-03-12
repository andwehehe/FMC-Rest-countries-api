import { createContext, useState, useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

function ThemeContextProvider({ children }) {

    const [ theme, setTheme ] = useState(
        () => localStorage.getItem("theme") || "dark"
    );

    const toggleTheme = () => {
        const savedTheme = theme === "dark" ? "light" : "dark";
        setTheme(savedTheme);
        localStorage.setItem("theme", savedTheme);
        document.body.classList.toggle('dark_body');
        document.documentElement.classList.toggle('dark');
    };

    useEffect(() => {
        if(theme === 'dark') {
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark_body');
        }
    }, [theme])

    return(
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider