const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

const path = require('path')

mix
    .ts(path.resolve(__dirname, 'src/theme/theme.ts'), './assets/js/theme.js')
    .sass(path.resolve(__dirname, 'src/theme/theme.scss'), './assets/css/theme.css')
    .options({
        postCss: [
            tailwindcss('./tailwind.config.js'),
            require('autoprefixer')
        ]
    })
;
