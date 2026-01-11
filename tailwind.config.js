/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0a0a0a",
                surface: "#1a1a1a",
                primary: "#3b82f6", // Electric blue
                secondary: "#8b5cf6", // Purple
                text: "#f3f4f6",
                muted: "#9ca3af",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Geist Mono', 'monospace'],
            },
        },
    },
    plugins: [],
}
