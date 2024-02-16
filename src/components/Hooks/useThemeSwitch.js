"use client"

import { set } from "date-fns";
import { useEffect, useState } from "react";



export function useThemeSwitch() {
    // if no user preference, use this media query
    const preferDarkQuery = '(prefers-color-schema:dark)';

    // We will use local storage for this
    const storageKey = 'theme';

    const toggleTheme = (theme) => {
        // let userPref = window.localStorage.getItem(storageKey);
        // console.log('toggleTheme, before: ' + userPref)
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        window.localStorage.setItem(storageKey, theme)
        // userPref = window.localStorage.getItem(storageKey);
        // console.log('toggleTheme, after: ' + userPref)
    }

    const getUserPreference = () => {
        const userPref = window.localStorage.getItem(storageKey);
        if (userPref) {
            return userPref;
        }
        return window.matchMedia(preferDarkQuery).matches ? 'dark' : 'light'
    }

    const [mode, setMode] = useState('dark');


    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const handleChange = () => {
            const newMode = getUserPreference();
            setMode(newMode); // triggers [mode] useEffect
            toggleTheme(newMode);
        }

        handleChange();

        mediaQuery.addEventListener('change', handleChange)

        return () => {
            mediaQuery.removeEventListener('change', handleChange)
        }
    }, [])

    useEffect(() => {
        toggleTheme(mode)
    }, [mode])
    
    
    return [mode, setMode]
    
}