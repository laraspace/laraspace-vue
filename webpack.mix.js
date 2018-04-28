let mix = require('laravel-mix')

/*
 |--------------------------------------------------------------------------
 | Admin
 |--------------------------------------------------------------------------
 */

mix.js('resources/assets/js/app.js', 'public/assets/js/')
  .sass('resources/assets/sass/laraspace.scss', 'public/assets/css/')

if (!mix.inProduction()) {
  mix.webpackConfig({
    devtool: 'source-map'
  }).sourceMaps()
} else {
  mix.version()
}

/*
 |--------------------------------------------------------------------------
 | Front
 |--------------------------------------------------------------------------
 */

// mix.sass('resources/assets/front/sass/front.scss', 'public/assets/front/css/').version()
