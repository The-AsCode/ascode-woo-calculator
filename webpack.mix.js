let mix = require('laravel-mix');
require('mix-tailwindcss');

mix.js('assets/admin/src/dashboard/js/index.js', 'assets/admin/js/dashboard.js').react();
    
mix.postCss('assets/admin/src/dashboard/css/dashboard.css', 'assets/admin/css/dashboard.css').tailwind('./tailwind.config.js');