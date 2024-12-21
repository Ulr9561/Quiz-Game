import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ToggleDarkMode: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const [isDark, setIsDark] = useState(false);

    const toggleDarkMode = () => {
        const root = document.getElementById("root");

        if (root) {
            const dark = root.classList.toggle("dark");
            setIsDark(dark);
            localStorage.setItem("darkMode", dark.toString());
        }
    };

    useEffect(() => {
        setMounted(true);
        const root = document.getElementById("root");
        const darkMode = localStorage.getItem("darkMode") === "true";
        if (darkMode && root) {
            root.classList.add("dark");
        }
        setIsDark(darkMode);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <button
            onClick={toggleDarkMode}
            className="relative flex items-center justify-center w-12 h-6 sm:w-14 sm:h-7 rounded-full bg-light-secondary-300 dark:bg-dark-tertiary transition-colors duration-300 ease-in outline-none border-none focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 focus:border-transparent"
            aria-label="Toggle dark mode"
        >
            <div
                className={`absolute inset-y-0.5 left-0.5 top-0 bottom-0 mt-0.5 bg-white dark:bg-dark-background w-6 h-full sm:w-6 sm:h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in flex items-center justify-center
                    ${isDark ? "translate-x-6 sm:translate-x-7" : ""}`}
            >
                <FontAwesomeIcon
                    icon={isDark ? faMoon : faSun}
                    className={`text-xs sm:text-sm ${
                        isDark ? "text-dark-primary" : "text-light-primary"
                    }`}
                />
            </div>
            <span className="sr-only">Toggle dark mode</span>
        </button>
    );
};

export default ToggleDarkMode;
