import {useContext} from "react";
import {LOCAL_STORAGE_KEY_THEME, Theme, ThemeContext} from "./ThemeContext";

interface UseTheme {
    toggleTheme: () => void,
    theme: Theme,
}


export function useTheme(): UseTheme {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () =>{
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_KEY_THEME, newTheme)
    };
    return {
        theme,
        toggleTheme
    }
}