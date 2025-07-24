import {Config} from "tailwindcss";

const config: Config = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#1A5D1A',
            },
        },
    },
};

export default config;
