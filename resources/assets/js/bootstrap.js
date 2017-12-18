
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate';
import Axios from 'axios';
import Ls from './services/ls';

//notification
import 'notie/src/notie.scss';
import 'toastr/build/toastr.css';

//bs-datepicker
import "bootstrap-datepicker/dist/css/bootstrap-datepicker3.css"

//datatable
import 'datatables.net-responsive-bs4';
import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.css';
import 'datatables.net-bs4/css/datatables.bootstrap4.css';

//Metis Menu
import "metismenu/src/metisMenu.css"

//MultiSelect
import 'multiselect/css/multi-select.css'

//notification
import 'notie/src/notie.scss';
import 'toastr/build/toastr.css';

//datatable
import 'datatables.net-responsive-bs4';
import 'datatables.net-responsive-bs4/css/responsive.bootstrap4.css';
import 'datatables.net-bs4/css/datatables.bootstrap4.css';

//switchery css
import "switchery/switchery.css"

//Ladda .scss
import "ladda/css/ladda.scss"

//clock picker
import "clockpicker/dist/bootstrap-clockpicker.css"

//time picker
import "timepicker/jquery.timepicker.css"

//Select2
import "select2/dist/css/select2.css"


window._ = require('lodash');

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

window.Vue = require('vue');

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

window.axios = require('axios');



window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};

/**
 * Interceptors
 */

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const AUTH_TOKEN = Ls.get('auth.token');

    if(AUTH_TOKEN){
        config.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

/**
 * global required plugins
 */
window.jquery = require('jquery');
window.clockpicker= require('clockpicker/dist/bootstrap-clockpicker');
window.select2 = require('select2');
window.metisMenu = require('metismenu');
window.Switchery = require('switchery/switchery');
window.Ladda = require('ladda/js/ladda');
window.multiSelect = require('multiselect');
window.datepicker= require('bootstrap-datepicker/dist/js/bootstrap-datepicker');
window.notie = require('notie');
window.toastr = require('toastr');
window.DataTable = require('datatables.net-bs4');
window.timepicker = require('timepicker');
window.Raphael = require('raphael/raphael');

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

Vue.use(VueRouter);
Vue.use(VeeValidate);

