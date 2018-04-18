let mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Admin
 |--------------------------------------------------------------------------
 */

mix.js('resources/assets/js/app.js', 'public/assets/js/')
  .sass('resources/assets/sass/laraspace.scss', 'public/assets/css/')
  .version()

/*
 |--------------------------------------------------------------------------
 | Front
 |--------------------------------------------------------------------------
 */

// mix.sass('resources/assets/front/sass/front.scss', 'public/assets/front/css/').version()
