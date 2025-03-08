'use client';
import { useState, useEffect, use } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const ThemeToggle = () => {
    const [darkTheme, setDarkTheme] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setDarkTheme(true);
        } else {
            setDarkTheme(false);
        }
    }, []);

    useEffect(() => {
        if (darkTheme) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkTheme]);

    return (
        <div className="cursor-pointer hover:outline outline-1 outline-blue-400 rounded-full p-1">
            {darkTheme ? (
                <BsMoon onClick={() => setDarkTheme(!darkTheme)} size={20} />
            ) : (
                <BsSun onClick={() => setDarkTheme(!darkTheme)} size={20} />
            )}
        </div>
    );
};

export default ThemeToggle;