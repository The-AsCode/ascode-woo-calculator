let mix = require('laravel-mix');
require('mix-tailwindcss');

mix.js('assets/admin/src/dashboard/index.js', 'assets/admin/js/dashboard.js').react();
mix.js('assets/front/src/view/index.js', 'assets/front/js/frontend.js').react();

mix.postCss('./tailwind/input.css', 'assets/admin/css/output.css').tailwind('./tailwind.config.js');