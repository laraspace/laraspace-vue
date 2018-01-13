let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Admin
 |--------------------------------------------------------------------------
 */

var pluginPath = 'resources/assets/plugins/';

mix.js('resources/assets/js/app.js', 'public/assets/js/')
    .sass('resources/assets/sass/laraspace.scss', 'public/assets/css/')
    .autoload({
        jquery: ['$', 'window.jQuery',"jQuery","window.$","jquery","window.jquery"]
    })
    .version();


/*
 |--------------------------------------------------------------------------
 | Front
 |--------------------------------------------------------------------------
 */

// mix.combine([
//     // ** Required Plugins **
//     pluginPath + 'jquery/jquery.js',
//     pluginPath + 'bootstrap/tether.js',
//     pluginPath + 'bootstrap/bootstrap.js',
//     pluginPath + 'toastr/toastr.js',
//     pluginPath + 'notie/notie.js',
//
//     //Notifs
//     pluginPath + 'laraspace/laraspace-notifs.js'
// ], 'public/assets/front/js/plugins.js')
//
// .sass('resources/assets/front/sass/front.scss', 'public/assets/front/css/')
//
// .version();
