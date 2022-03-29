module.exports = {
    content: [
        './pages/**/*.{js,jsx,ts,tsx}',
        './components/**/*.{js,jsx,ts,tsx}',
    ],
    darkMode: false,
    theme: {
        extend: {
            transitionProperty: {
                right: 'right',
                left: 'left',
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                'maha-purple': '#93268F',
                'maha-green': '#8CC73F',
                'main-background': '#FBF9FA',
            },
        },
    },
    plugins: [],
};
