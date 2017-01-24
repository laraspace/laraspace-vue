import Vue from 'vue'
import VueRouter from 'vue-router'

//Dashboard
import Basic from './pages/dashboard/Basic.vue'
import Ecommerce from './pages/dashboard/Ecommerce.vue'
import Finance from './pages/dashboard/Finance.vue'

//Layouts
import LayoutBasic from './layouts/LayoutBasic.vue'
import LayoutHorizontal from './layouts/LayoutHorizontal.vue'
import LayoutIconSidebar from './layouts/LayoutIconSidebar.vue'

//Basic UI
import Buttons from './pages/basic-ui/Buttons.vue'
import Cards from './pages/basic-ui/Cards.vue'
import Tabs from './pages/basic-ui/Tabs.vue'
import Typography from './pages/basic-ui/Typography.vue'
import Tables from './pages/basic-ui/Tables.vue'

//Components
import Datatables from './pages/components/Datatables.vue'
import Notifications from './pages/components/Notifications.vue'
import Graphs from './pages/components/Graphs.vue'

//Forms
import General from './pages/forms/General.vue'
import Advanced from './pages/forms/Advanced.vue'
import Layouts from './pages/forms/FormLayouts.vue'
import Validation from './pages/forms/FormValidation.vue'
import Editors from './pages/forms/Editors.vue'
import VeeValidate from './pages/forms/VeeValidate.vue'

//Settings
import Settings from './pages/Settings.vue'

Vue.use(VueRouter)

const routes = [

    /*
     |--------------------------------------------------------------------------
     | Layout Routes for DEMO
     |--------------------------------------------------------------------------|
     */

    {
        path: '/layouts', component: LayoutBasic,
        children: [
            {
                path: 'sidebar',
                component: Basic
            },
        ]
    },

    {
        path: '/layouts', component: LayoutHorizontal,
        children: [
            {
                path: 'horizontal',
                component: Basic
            },
        ]
    },

    {
        path: '/layouts', component: LayoutIconSidebar,
        children: [
            {
                path: 'icon-sidebar',
                component: Basic
            },
        ]
    },

    /*
     |--------------------------------------------------------------------------
     | Main Application Routes
     |--------------------------------------------------------------------------|
     */

    {
        path: '/', component: LayoutBasic,  // Change the desired Layout here
        children: [

            //Dashboard
            {
                path: '/dashboard/basic',
                component: Basic
            },
            {
                path: '/dashboard/ecommerce',
                component: Ecommerce
            },
            {
                path: '/dashboard/finance',
                component: Finance
            },

            //Basic UI
            {
                path: '/basic-ui/buttons',
                component: Buttons
            },
            {
                path: '/basic-ui/cards',
                component: Cards
            },
            {
                path: '/basic-ui/tabs',
                component: Tabs
            },
            {
                path: '/basic-ui/typography',
                component: Typography
            },
            {
                path: '/basic-ui/tables',
                component: Tables
            },

            //Components
            {
                path: '/components/datatables',
                component: Datatables
            },
            {
                path: '/components/notifications',
                component: Notifications
            },
            {
                path: '/components/graphs',
                component: Graphs
            },

            //Forms
            {
                path: '/forms/general',
                component: General
            },
            {
                path: '/forms/advanced',
                component: Advanced
            },
            {
                path: '/forms/layouts',
                component: Layouts
            },
            {
                path: '/forms/validation',
                component: Validation
            },
            {
                path: '/forms/editors',
                component: Editors
            },
            {
                path: '/forms/vee',
                component: VeeValidate
            },

            //Settings
            {
                path: '/settings',
                component: Settings
            },

            // DEFAULT ROUTE
            {   path: '*', redirect: '/dashboard/basic' }
        ]
    },

]


const router = new VueRouter({
    routes,
    mode: 'history',
    base: 'admin',
    linkActiveClass: 'active'
})

export default router