import Vue from 'vue'
import VueRouter from 'vue-router'

import AuthService from './services/auth'

/*
 |--------------------------------------------------------------------------
 | Admin Views
 |--------------------------------------------------------------------------|
 */

//Dashboard
import Basic from './views/admin/dashboard/Basic.vue';
import Ecommerce from './views/admin/dashboard/Ecommerce.vue';
import Finance from './views/admin/dashboard/Finance.vue';

//Layouts
import LayoutBasic from './views/layouts/LayoutBasic.vue';
import LayoutHorizontal from './views/layouts/LayoutHorizontal.vue';
import LayoutIconSidebar from './views/layouts/LayoutIconSidebar.vue';
import LayoutLogin from './views/layouts/LayoutLogin.vue';
import LayoutFront from './views/layouts/LayoutFront.vue';

//Basic UI
import Buttons from './views/admin/basic-ui/Buttons.vue';
import Cards from './views/admin/basic-ui/Cards.vue';
import Tabs from './views/admin/basic-ui/Tabs.vue';
import Typography from './views/admin/basic-ui/Typography.vue';
import Tables from './views/admin/basic-ui/Tables.vue';

//Components
import Calendar from './views/admin/components/Calendar.vue';
import Datatables from './views/admin/components/Datatables.vue';
import ImageCropper from './views/admin/components/ImageCropper.vue';
import ImageZoom from './views/admin/components/ImageZoom.vue';
import NestableList from './views/admin/components/NestableList.vue'
import NestableTree from './views/admin/components/NestableTree.vue'
import Notifications from './views/admin/components/Notifications.vue';
    //1. Ratings
import BarRating from './views/admin/components/ratings/BarRating.vue'
import StarRating from './views/admin/components/ratings/StarRating.vue'

//Charts
import Amchart from './views/admin/charts/Amchart.vue';
import ChartJS from './views/admin/charts/ChartJS.vue';
import Gauge from './views/admin/charts/Gauge.vue';
import Morris from './views/admin/charts/Morris.vue';
import Sparkline from './views/admin/charts/Sparkline.vue';

//Forms
import General from './views/admin/forms/General.vue';
import Advanced from './views/admin/forms/Advanced.vue';
import Layouts from './views/admin/forms/FormLayouts.vue';
import Validation from './views/admin/forms/FormValidation.vue';
import Editors from './views/admin/forms/Editors.vue';
import VeeValidate from './views/admin/forms/VeeValidate.vue';

//Settings
import Settings from './views/admin/Settings.vue';

/*
 |--------------------------------------------------------------------------
 | Other
 |--------------------------------------------------------------------------|
 */

//Auth
import Login from './views/auth/Login.vue';
import Register from './views/auth/Register.vue';

import NotFoundPage from './views/errors/404.vue';

/*
 |--------------------------------------------------------------------------
 | Frontend Views
 |--------------------------------------------------------------------------|
 */

import Home from './views/front/Home.vue';

Vue.use(VueRouter);

const routes = [
    
    /*
     |--------------------------------------------------------------------------
     | Layout Routes for DEMO
     |--------------------------------------------------------------------------|
     */

    {
        path: '/admin/layouts', component: LayoutBasic,
        children: [
            {
                path: 'sidebar',
                component: Basic
            },
        ]
    },
    {
        path: '/admin/layouts', component: LayoutHorizontal,
        children: [
            {
                path: 'horizontal',
                component: Basic
            },
        ]
    },
    {
        path: '/admin/layouts', component: LayoutIconSidebar,
        children: [
            {
                path: 'icon-sidebar',
                component: Basic
            },
        ]
    },

    /*
     |--------------------------------------------------------------------------
     | Frontend Routes
     |--------------------------------------------------------------------------|
     */

    {
        path: '/', component: LayoutFront,
        children: [
            {
                path: '/',
                component: Home,
                name: 'home'
            },
        ]
    },

    /*
     |--------------------------------------------------------------------------
     | Admin Backend Routes
     |--------------------------------------------------------------------------|
     */
    {
        path: '/admin', component: LayoutBasic,  // Change the desired Layout here
        meta: { requiresAuth: true },
        children: [

            //Dashboard
            {
                path: 'dashboard/basic',
                component: Basic,
                name: 'dashboard',
            },
            {
                path: 'dashboard/ecommerce',
                component: Ecommerce
            },
            {
                path: 'dashboard/finance',
                component: Finance
            },

            //Basic UI
            {
                path: 'basic-ui/buttons',
                component: Buttons
            },
            {
                path: 'basic-ui/cards',
                component: Cards
            },
            {
                path: 'basic-ui/tabs',
                component: Tabs
            },
            {
                path: 'basic-ui/typography',
                component: Typography
            },
            {
                path: 'basic-ui/tables',
                component: Tables
            },

            //Components
            {
                path: 'components/calendar',
                component: Calendar
            },
            {
                path: 'components/datatables',
                component: Datatables
            },
            {
                path: 'components/notifications',
                component: Notifications
            },
            {
                path: 'components/image-cropper',
                component: ImageCropper
            },
            {
                path: 'components/image-zoom',
                component: ImageZoom
            },
            {
                path: 'components/nestable-list',
                component: NestableList

            },
            {
                path: 'components/nestable-tree',
                component: NestableTree
            },
            {
                path: 'components/notifications',
                component: Notifications
            },
            {
                path: 'components/ratings/bar-rating',
                component: BarRating

            },
            {
                path: 'components/ratings/star-rating',
                component:StarRating

            },

            //chart
            {
                path: 'charts/amchart',
                component: Amchart
            },
            {
                path: 'charts/chartjs',
                component: ChartJS
            },
            {
                path: 'charts/gauge',
                component: Gauge

            },
            {
                path: 'charts/morris',
                component: Morris

            },
            {
                path: 'charts/sparkline',
                component: Sparkline

            },



            //Forms
            {
                path: 'forms/general',
                component: General
            },
            {
                path: 'forms/advanced',
                component: Advanced
            },
            {
                path: 'forms/layouts',
                component: Layouts
            },
            {
                path: 'forms/validation',
                component: Validation
            },
            {
                path: 'forms/editors',
                component: Editors
            },
            {
                path: 'forms/vee',
                component: VeeValidate
            },

            //Settings
            {
                path: 'settings',
                component: Settings
            },
        ]
    },

    /*
     |--------------------------------------------------------------------------
     | Auth & Registration Routes
     |--------------------------------------------------------------------------|
     */

    {
        path: '/', component: LayoutLogin,
        children: [
            {
                path: 'login',
                component: Login,
                name: 'login'
            },
            {
                path: 'register',
                component: Register,
                name: 'register'
            },
        ]
    },

    // DEFAULT ROUTE
    {   path: '*', component : NotFoundPage }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {

    // If the next route is requires user to be Logged IN
    if (to.matched.some(m => m.meta.requiresAuth)){

        return AuthService.check().then(authenticated => {
            if(!authenticated){
                return next({ path : '/login'})
            }

            return next()
        })
    }

    return next()
});

export default router