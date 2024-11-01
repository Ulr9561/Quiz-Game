/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {
            backgroundImage: {
                "light-gradient":
                    "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)",
                "dark-gradient":
                    "linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.9) 100%)",
            },
            colors: {
                light: {
                    background: "#FAFAFA",
                    tertiary: "#F0F2F5",
                    primary: "#3A86FF",
                    secondary: "#00D084",
                    textPrimary: "#333333",
                    textSecondary: "#666666",
                    border: "#E0E0E0",
                    error: "#FF595E",
                    success: "#00D084",
                },
                dark: {
                    background: "#121212",
                    tertiary: "#1E1E1E",
                    primary: "#3A86FF",
                    secondary: "#38B2AC",
                    textPrimary: "#E5E5E5",
                    textSecondary: "#B0B0B0",
                    border: "#333333",
                    error: "#FF6D72",
                    success: "#38B2AC",
                },
            },
            fontFamily: {
                mono: ["Space Mono", "monospace"],
                grotesk: ["Space Grotesk", "sans-serif"],
            },
        },
    },
    variants: {
        extend: {
            backgroundImage: ["dark"],
        },
    },
    plugins: [],
};
