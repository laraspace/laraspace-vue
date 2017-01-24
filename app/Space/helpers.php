<?php

use Illuminate\Support\HtmlString;
use Laraspace\Space\Settings\Setting;

/**
 * Set Active Path
 *
 * @param $path
 * @param string $active
 * @return string
 */
function set_active($path, $active = 'active') {

    return call_user_func_array('Request::is', (array)$path) ? $active : '';

}

/**
 * @param $path
 * @return mixed
 */
function is_url($path){
    return call_user_func_array('Request::is', (array)$path);
}

/**
 * @param $string
 * @return string
 */
function clean_slug($string) {
    $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.

    return \Illuminate\Support\Str::lower(preg_replace('/[^A-Za-z0-9\-]/', '', $string)); // Removes special chars.
}

/**
 * @param $set
 * @return null
 */
function get_setting($set){

    $setting = Setting::whereOption($set)->first();

    if($setting){
        return $setting->value;
    }else{
        return null;
    }
}

/**
 * Get the path to the appropriate Laravel Mix assets.
 *
 * @param  string  $file
 * @return string
 *
 * @throws Exception
 */
function mix($path)
{
    static $manifest;
    static $shouldHotReload;
    if (! $manifest) {
        if (! file_exists($manifestPath = public_path('mix-manifest.json'))) {
            throw new Exception('The Mix manifest does not exist.');
        }
        $manifest = json_decode(file_get_contents($manifestPath), true);
    }
    if (! starts_with($path, '/')) {
        $path = "/{$path}";
    }
    if (! array_key_exists($path, $manifest)) {
        throw new Exception(
            "Unable to locate Mix file: {$path}. Please check your ".
            'webpack.mix.js output paths and try again.'
        );
    }
    return $shouldHotReload = file_exists(public_path('hot'))
        ? new HtmlString("http://localhost:8080{$manifest[$path]}")
        : new HtmlString(url($manifest[$path]));
}