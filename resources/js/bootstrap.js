import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'
import Vuelidate from 'vuelidate'
import VuePrism from 'vue-prism'
import VTooltip from 'v-tooltip'

import Ls from './services/ls'
import VDropdown from './components/dropdown/VDropdown'
import VDropdownItem from './components/dropdown/VDropdownItem'
import VDropdownDivider from './components/dropdown/VDropdownDivider'
import VCollapse from './components/collapse/VCollapse'
import VCollapseItem from './components/collapse/VCollapseItem'

/**
 * Global CSS imports
 */
import 'vue-tabs-component/docs/resources/tabs-component.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import 'vue2-dropzone/dist/vue2Dropzone.css'

/**
 * Global plugins
 */
global.notie = require('notie')
global.toastr = require('toastr')
global._ = require('lodash')

/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */

global.Vue = require('vue')

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

global.axios = require('axios')

global.axios.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
}

/**
 * Global Axios Request Interceptor
 */

global.axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  const AUTH_TOKEN = Ls.get('auth.token')

  if (AUTH_TOKEN) {
    config.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
  }

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from "laravel-echo"

// global.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// })

/**
 * Custom Directives
 */
require('./helpers/directives')

/**
 * Global Components
 */
Vue.component('v-dropdown', VDropdown)
Vue.component('v-dropdown-item', VDropdownItem)
Vue.component('v-dropdown-divider', VDropdownDivider)
Vue.component('v-collapse', VCollapse)
Vue.component('v-collapse-item', VCollapseItem)

Vue.use(VueRouter)
Vue.use(VuePrism)
Vue.use(VTooltip)
Vue.use(VeeValidate)
Vue.use(Vuelidate)
