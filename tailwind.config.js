module.exports = {
    purge: {
        content: [
            './src/**/*.{html,js,jsx,ts,tsx}'
        ],
    },
    darkMode: false,
    theme: {
        extend: {
            boxShadow: {
                'inner-sm': 'inset 0 1px 2px 0 rgba(0, 0, 0, 0.05)'
            },
        },
    },
    plugins: [
        require('@ahdcreative/vpilothub-tailwind-config'),
    ],
};