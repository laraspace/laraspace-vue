let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Admin
 |--------------------------------------------------------------------------
 */

var pluginPath = 'resources/assets/plugins/';

mix.combine([
    // ** Required Plugins **
    pluginPath + 'jquery/jquery.js',
    pluginPath + 'bootstrap/popper.js',
    pluginPath + 'bootstrap/bootstrap.js',

    // ** Additional Plugins **
    // pluginPath + 'ladda/spin.js',
    pluginPath + 'jquery-validate/jquery.validate.js',
    pluginPath + 'jquery-validate/additional-methods.js',
    pluginPath + 'simplemde/simplemde.min.js',
    pluginPath + 'prism/prism.js',
    pluginPath + 'alertify/alertify.js',
    pluginPath + 'easypiecharts/jquery.easypiechart.js',
    // pluginPath + 'form-wizard/jquery.steps.js',
    pluginPath + 'gallery/image/photoswipe.js',
    pluginPath + 'gallery/image/photoswipe-ui-default.js',
    pluginPath + 'gallery/image/mp.mansory.js',
    pluginPath + 'gallery/image/gallery.js',
    pluginPath + 'gallery/video/videobox.js',
    pluginPath + 'ace-editor/ace.js',
    pluginPath + 'icons/evil-icons.min.js',
    pluginPath + 'ace-editor/twilight.js',
    pluginPath + 'dropzone/dropzone.js',

], 'public/assets/js/core/plugins.js')

    .js('resources/assets/js/app.js', 'public/assets/js/')

    .sass('resources/assets/sass/laraspace.scss', 'public/assets/css/')

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
