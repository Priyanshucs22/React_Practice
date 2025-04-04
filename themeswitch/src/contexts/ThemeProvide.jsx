// we dont use in this code but we also use this in a way there is 2 way to use context
import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [themeMode, setThemeMode] = useState("light");

    const lightTheme = () => setThemeMode("light");
    const darkTheme = () => setThemeMode("dark");

    useEffect(() => {
        document.querySelector("html").classList.remove("light", "dark");
        document.querySelector("html").classList.add(themeMode);
    }, [themeMode]);

    return (
        <ThemeContext.Provider value={{ themeMode, lightTheme, darkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}