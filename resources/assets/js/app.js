/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import router from './router.js'

import Layout from './helpers/layout'

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import Plugin from './helpers/plugin'
window.Plugin = Plugin

const app = new Vue({
    router,
    methods : {
        onOverlayClick(){
            Layout.toggleSidebar()
        }
    }
}).$mount('#app')