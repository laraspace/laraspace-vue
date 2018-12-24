import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthService from './services/auth'

/*
 |--------------------------------------------------------------------------
 | Admin Views
 |--------------------------------------------------------------------------|
 */

// Dashboard
import Basic from './views/admin/dashboard/Basic.vue'
import Ecommerce from './views/admin/dashboard/Ecommerce.vue'
import Finance from './views/admin/dashboard/Finance.vue'

// Layouts
import LayoutBasic from './views/layouts/LayoutBasic.vue'
import LayoutHorizontal from './views/layouts/LayoutHorizontal.vue'
import LayoutIconSidebar from './views/layouts/LayoutIconSidebar.vue'
import LayoutLogin from './views/layouts/LayoutLogin.vue'
import LayoutLogin2 from './views/layouts/LayoutLogin2.vue'
import LayoutLogin3 from './views/layouts/LayoutLogin3.vue'
import LayoutFront from './views/layouts/LayoutFront.vue'

// Basic UI
import Buttons from './views/admin/basic-ui/Buttons.vue'
import Cards from './views/admin/basic-ui/Cards.vue'
import Typography from './views/admin/basic-ui/Typography.vue'
import Tables from './views/admin/basic-ui/Tables.vue'
import ProgressBar from './views/admin/basic-ui/ProgressBars.vue'

// Components
import Notifications from './views/admin/components/Notifications.vue'
import SweetModals from './views/admin/components/SweetModals.vue'
import VueCarousel from './views/admin/components/VueCarousel.vue'
import VueDropzone from './views/admin/components/VueDropzone.vue'
import VueTable from './views/admin/components/VueTables.vue'
import VueTabs from './views/admin/components/VueTabs.vue'
import VueTooltips from './views/admin/components/VueTooltips.vue'
import VueCollapse from './views/admin/components/VueCollapse.vue'

// Charts
import Chartjs from './views/admin/charts/Chartjs.vue'
import Gauges from './views/admin/charts/Gauge.vue'

// Icons
import Fontawesome from './views/admin/icons/Fontawesome.vue'
import Fpsline from './views/admin/icons/FpsLine.vue'
import IcoMoon from './views/admin/icons/IcoMoon.vue'
import Line from './views/admin/icons/Line.vue'
import Meteo from './views/admin/icons/Meteo.vue'

// Forms
import General from './views/admin/forms/General.vue'
import Advanced from './views/admin/forms/Advanced.vue'
import Layouts from './views/admin/forms/FormLayouts.vue'
import VeeValidate from './views/admin/forms/VeeValidate.vue'
import Vuelidate from './views/admin/forms/Vuelidate.vue'

// Gallery
import ImageGallery from './views/admin/gallery/ImageGallery.vue'
import VideoGallery from './views/admin/gallery/VideoGallery.vue'

// Apps
import TodosApp from './views/admin/apps/todos/TodosApp.vue'
import MailboxApp from './views/admin/apps/mailbox/MailboxApp.vue'

// Users
import Users from './views/admin/users/Users.vue'
import Profile from './views/admin/users/Profile.vue'

// Settings
import Settings from './views/admin/Settings.vue'

/*
 |--------------------------------------------------------------------------
 | Other
 |--------------------------------------------------------------------------|
 */

// Auth
import Login from './views/auth/Login.vue'
import Register from './views/auth/Register.vue'

import NotFoundPage from './views/errors/404.vue'

/*
 |--------------------------------------------------------------------------
 | Frontend Views
 |--------------------------------------------------------------------------|
 */

import Home from './views/front/Home.vue'

Vue.use(VueRouter)

const routes = [

  /*
   |--------------------------------------------------------------------------
   | Layout Routes for DEMO
   |--------------------------------------------------------------------------|
   */

  {
    path: '/admin/layouts',
    component: LayoutBasic,
    children: [
      {
        path: 'sidebar',
        component: Basic
      }
    ]
  },
  {
    path: '/admin/layouts',
    component: LayoutHorizontal,
    children: [
      {
        path: 'horizontal',
        component: Basic
      }
    ]
  },
  {
    path: '/admin/layouts',
    component: LayoutIconSidebar,
    children: [
      {
        path: 'icons-sidebar',
        component: Basic
      }
    ]
  },

  /*
   |--------------------------------------------------------------------------
   | Frontend Routes
   |--------------------------------------------------------------------------|
   */

  {
    path: '/',
    component: LayoutFront,
    children: [
      {
        path: '/',
        component: Home,
        name: 'home'
      }
    ]
  },

  /*
   |--------------------------------------------------------------------------
   | Admin Backend Routes
   |--------------------------------------------------------------------------|
   */
  {
    path: '/admin',
    component: LayoutBasic, // Change the desired Layout here
    meta: { requiresAuth: true },
    children: [
      // Dashboard
      {
        path: 'dashboard/basic',
        component: Basic,
        name: 'dashboard'
      },
      {
        path: 'dashboard/ecommerce',
        component: Ecommerce
      },
      {
        path: 'dashboard/finance',
        component: Finance
      },

      // Basic UI
      {
        path: 'basic-ui/buttons',
        component: Buttons
      },
      {
        path: 'basic-ui/cards',
        component: Cards
      },
      {
        path: 'basic-ui/typography',
        component: Typography
      },
      {
        path: 'basic-ui/tables',
        component: Tables
      },

      {
        path: 'basic-ui/progress-bars',
        component: ProgressBar
      },

      // Components
      {
        path: 'components/vue-tabs',
        component: VueTabs
      },
      {
        path: 'components/vue-collapse',
        component: VueCollapse
      },
      {
        path: 'components/notifications',
        component: Notifications
      },
      {
        path: 'components/vue-dropzone',
        component: VueDropzone
      },
      {
        path: 'components/sweet-modals',
        component: SweetModals
      },
      {
        path: 'components/vue-tables',
        component: VueTable
      },
      {
        path: 'components/vue-carousel',
        component: VueCarousel
      },
      {
        path: 'components/tooltips',
        component: VueTooltips
      },

      // Charts
      {
        path: 'charts/chartjs',
        component: Chartjs
      },
      {
        path: 'charts/gauges',
        component: Gauges
      },

      //  Icons
      {
        path: 'icons/fontawesome',
        component: Fontawesome
      },
      {
        path: 'icons/fpsline',
        component: Fpsline
      },
      {
        path: 'icons/icomoon',
        component: IcoMoon
      },
      {
        path: 'icons/line',
        component: Line
      },
      {
        path: 'icons/meteo',
        component: Meteo
      },

      // Forms
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
        path: 'forms/vuelidate',
        component: Vuelidate
      },
      {
        path: 'forms/vee-validate',
        component: VeeValidate
      },

      // Gallery
      {
        path: 'gallery/image',
        component: ImageGallery
      },
      {
        path: 'gallery/video',
        component: VideoGallery
      },

      // Users
      {
        path: 'users/profile',
        component: Profile
      },
      {
        path: 'users/all',
        component: Users
      },

      // Apps
      {
        path: 'apps/mailbox',
        component: MailboxApp
      },
      {
        path: 'apps/todos',
        component: TodosApp
      },

      // Settings
      {
        path: 'settings',
        component: Settings
      }
    ]
  },

  /*
   |--------------------------------------------------------------------------
   | Auth & Registration Routes
   |--------------------------------------------------------------------------|
   */

  {
    path: '/',
    component: LayoutLogin,
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
      }
    ]
  },

  // Demo Pages
  {
    path: '/admin/pages',
    component: LayoutLogin,
    children: [
      {
        path: 'login',
        component: Login
      },
      {
        path: 'register',
        component: Register
      }
    ]
  },
  {
    path: '/admin/pages',
    component: LayoutLogin2,
    children: [
      {
        path: 'login-2',
        component: Login
      },
      {
        path: 'register-2',
        component: Register
      }
    ]
  },
  {
    path: '/admin/pages',
    component: LayoutLogin3,
    children: [
      {
        path: 'login-3',
        component: Login
      },
      {
        path: 'register-3',
        component: Register
      }
    ]
  },

  //  DEFAULT ROUTE
  { path: '*', component: NotFoundPage }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  //  If the next route is requires user to be Logged IN
  if (to.matched.some(m => m.meta.requiresAuth)) {
    return AuthService.check().then(authenticated => {
      if (!authenticated) {
        return next({ path: '/login' })
      }

      return next()
    })
  }

  return next()
})

export default router
