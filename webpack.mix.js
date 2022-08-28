const mix = require('laravel-mix');

const path = require('path')

mix
    .sass(path.resolve(__dirname, 'src/theme/theme.scss'), './assets/css/theme.css')
    .ts(path.resolve(__dirname, 'src/theme/theme.ts'), './assets/js/theme.js')
