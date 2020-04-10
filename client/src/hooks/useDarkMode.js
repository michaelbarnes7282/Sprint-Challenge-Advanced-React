import {useLocalStorage} from './useLocalStorage'
import { useEffect } from 'react'

export const useDarkMode = key => {
    const [darkMode, setDarkMode] = useLocalStorage(key);
    
    useEffect(() => {
        if(darkMode === true){
            document.body.className = 'dark-mode';
        } else {
            document.body.className = '';
        }

    }, [darkMode])

    return [darkMode, setDarkMode];
};