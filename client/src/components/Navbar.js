import React from 'react'
import { useDarkMode } from '../hooks/useDarkMode'

const Navbar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
    };
    return (
        <nav className="navbar">
            <h1>Player Cards</h1>
            <div className="dark-mode__toggle" data-testid='dark'>
                <div
                    data-testid='toggled'
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                    
                />
            </div>
        </nav>
    );
};

export default Navbar;
