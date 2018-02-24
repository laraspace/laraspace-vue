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
import LayoutFront from './views/layouts/LayoutFront.vue'

// Basic UI
import Buttons from './views/admin/basic-ui/Buttons.vue'
import Cards from './views/admin/basic-ui/Cards.vue'
import Tabs from './views/admin/basic-ui/Tabs.vue'
import Typography from './views/admin/basic-ui/Typography.vue'
import Tables from './views/admin/basic-ui/Tables.vue'
import Modals from './views/admin/basic-ui/Modals.vue'
import ProgressBar from './views/admin/basic-ui/ProgressBars.vue'

// Components
import Datatables from './views/admin/components/Datatables.vue'
import MailBox from './views/admin/components/MailBox.vue'
import Notifications from './views/admin/components/Notifications.vue'
import ImageCropper from './views/admin/components/ImageCropper.vue'
import ImageZoom from './views/admin/components/ImageZoom.vue'
import Calendar from './views/admin/components/Calendar.vue'
import NestableTree from './views/admin/components/NestableTree.vue'
import NestableList from './views/admin/components/NestableList.vue'
import VueCarousel from './views/admin/components/VueCarousel.vue'
// 1. Ratings
import BarRating from './views/admin/components/ratings/BarRating.vue'
import StarRating from './views/admin/components/ratings/StarRating.vue'
import SweetModals from './views/admin/components/SweetModals.vue'
// Charts
import Amchart from './views/admin/charts/Amchart.vue'
import Chartjs from './views/admin/charts/Chartjs.vue'
import Gauge from './views/admin/charts/Gauge.vue'
import Morris from './views/admin/charts/Morris.vue'
import Sparkline from './views/admin/charts/Sparkline.vue'
// Icons
//  import Evil from './views/admin/icons/Evil.vue'
import Fontawesome from './views/admin/icons/Fontawesome.vue'
//  import Fpsline from './views/admin/icons/FpsLine.vue'
import IcoMoon from './views/admin/icons/IcoMoon.vue'
//  import Line from './views/admin/icons/Line.vue'
//  import Meteo from './views/admin/icons/Meteo.vue'

// Forms
import General from './views/admin/forms/General.vue'
import Advanced from './views/admin/forms/Advanced.vue'
import Layouts from './views/admin/forms/FormLayouts.vue'
import Validation from './views/admin/forms/FormValidation.vue'
import Editors from './views/admin/forms/Editors.vue'
import VeeValidate from './views/admin/forms/VeeValidate.vue'
import Vuelidate from './views/admin/forms/Vuelidate.vue'

// form-wizards
import Wizard from './views/admin/forms/Wizard.vue'
import Wizard2 from './views/admin/forms/Wizard2.vue'
import Wizard3 from './views/admin/forms/Wizard3.vue'
// Gallery
import Grid from './views/admin/gallery/Grid.vue'
import MasonryGrid from './views/admin/gallery/MasonryGrid.vue'
// Todo-Item
import TodoItem from './views/admin/TodoItem.vue'

// users
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
      {
        path: 'basic-ui/modals',
        component: Modals
      },
      {
        path: 'basic-ui/progress-bars',
        component: ProgressBar
      },

      // Components
      {
        path: 'components/calendar',
        component: Calendar
      },
      {
        path: 'components/mail-box',
        component: MailBox
      },
      {
        path: 'components/datatables',
        component: Datatables
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
        path: 'components/sweet-modals',
        component: SweetModals
      },
      {
        path: 'components/vue-carousel',
        component: VueCarousel
      },
      // Rating
      {
        path: 'components/rating/bar-rating',
        component: BarRating
      },
      {
        path: 'components/rating/star-rating',
        component: StarRating
      },
      {
        path: 'components/sweet-modals',
        component: SweetModals
      },

      // chart
      {
        path: 'charts/amchart',
        component: Amchart
      },
      {
        path: 'charts/chartjs',
        component: Chartjs
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

      //  Icons
      //  {
      //      path: 'icons/evil',
      //      component: Evil
      //  },
      {
        path: 'icons/fontawesome',
        component: Fontawesome
      },
      //  {
      //      path: 'icons/fpsline',
      //      component: Fpsline
      //  },
      {
        path: 'icons/icomoon',
        component: IcoMoon
      },
      //  {
      //      path: 'icons/line',
      //      component: Line
      //  },
      //  {
      //      path: 'icons/meteo',
      //      component: Meteo
      //  },

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
      {
        path: 'forms/vuelidate',
        component: Vuelidate
      },
      {
        path: 'forms/wizards',
        component: Wizard
      },
      {
        path: 'forms/wizards-2',
        component: Wizard2
      },
      {
        path: 'forms/wizards-3',
        component: Wizard3
      },

      // Gallery
      {
        path: 'gallery/grid',
        component: Grid
      },
      {
        path: 'gallery/masonry-grid',
        component: MasonryGrid
      },

      // Users
      {
        path: 'users/profile',
        component: Profile
      },
      {
        path: 'users',
        component: Users
      },

      // Todos
      {
        path: 'todo-item',
        component: TodoItem
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
