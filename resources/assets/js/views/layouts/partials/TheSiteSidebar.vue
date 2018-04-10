<template>
  <div
<<<<<<< HEAD
    class="sidebar-left">
    <div
      class="sidebar-body scroll-pane">
      <ul
        class="side-nav vue-menu">
        <v-items
          :routers="[
            {
              to:'/admin/dashboard/basic',
              title:'Basic'
            },
            {
              to:'/admin/dashboard/ecommerce',
              title:'Ecommerce'
            },
            {
              to:'/admin/dashboard/finance',
              title:'Finance'
            }
          ]"
          title="Dashboard"
          active-url="/admin/dashboard"
          icon="icon-fa icon-fa-dashboard"/>
        <v-items
          :routers="[
            {
              to:'/admin/layouts/sidebar',
              title:'Sidebar'
            },
            {
              to:'/admin/layouts/horizontal',
              title:'Horizontal'
            },
            {
              to:'/admin/layouts/icons-sidebare',
              title:'Icon Sidebar'
            }
          ]"
          title="Layouts"
          active-url="/admin/layouts"
          icon="icon-fa icon-fa-th-large"/>
        <v-items
          :routers="[
            {
              to:'/admin/basic-ui/buttons',
              title:'Buttons'
            },
            {
              to:'/admin/basic-ui/cards',
              title:'Cards'
            },
            {
              to:'/admin/basic-ui/tabs',
              title:'Tabs &amp; Accordians'
            },
            {
              to:'/admin/basic-ui/typography',
              title:'Typography'
            },
            {
              to:'/admin/basic-ui/tables',
              title:'Tables'
            },
            {
              to:'/admin/basic-ui/modals',
              title:'Modals'
            },
            {
              to:'/admin/basic-ui/progress-bars',
              title:'Progress Bar'
            }
          ]"
          title="Basic UI"
          active-url="/admin/basic-ui"
          icon="icon-fa icon-fa-star"/>
        <v-items
          :routers="[
            {
              to:'/admin/components/calendar',
              title:'Calendar'
            },
            {
              to:'/admin/components/mail-box',
              title:'MailBox'
            },
            {
              to:'/admin/components/datatables',
              title:'Jquery Datatables'
            },
            {
              to:'/admin/components/image-cropper',
              title:'ImageCropper'
            },
            {
              to:'/admin/components/image-zoom',
              title:'ImageZoom'
            },
            {
              to:'/admin/components/nestable-list',
              title:'Nestable List'
            },
            {
              to:'/admin/components/nestable-tree',
              title:'Nestable Tree'
            },
            {
              to:'/admin/components/notifications',
              title:'Notifications'
            },
            {
              to:'/admin/components/sweet-modals',
              title:'Sweet Modals'
            }
          ]"
          title="Components"
          active-url="/admin/components"
          icon="icon-fa icon-fa-puzzle-piece">
          <v-items
            slot="grandChild"
            :routers="[
              {
                to:'/admin/components/rating/bar-rating',
                title:'Bar Rating'
              },
              {
                to:'/admin/components/rating/star-rating',
                title:'Star Rating'
              }
            ]"
            title="Rating"
            active-url="/admin/components/rating"/>
        </v-items>
        <v-items
          :routers="[
            {
              to:'/admin/charts/amchart',
              title:'AM Charts'
            },
            {
              to:'/admin/charts/chartjs',
              title:'Chart JS'
            },
            {
              to:'/admin/charts/gauge',
              title:'Gauges'
            },
            {
              to:'/admin/charts/morris',
              title:'Morris'
            },
            {
              to:'/admin/charts/sparkline',
              title:'Sparkline'
            }
          ]"
          title="Charts"
          active-url="/admin/chart"
          icon="icon-fa icon-fa-bar-chart"/>
        <v-items
          :routers="[
            {
              to:'/admin/icons/icomoon',
              title:'IcoMoon'
            },
            {
              to:'/admin/icons/fontawesome',
              title:'Font Awesome'
            },
          ]"
          title="Icons"
          active-url="/admin/icons"
          icon="icon-fa icon-fa-eye"/>
        <v-items
          :routers="[
            {
              to:'/admin/forms/general',
              title:'General Elements'
            },
            {
              to:'/admin/forms/advanced',
              title:'Advanced Elements'
            },
            {
              to:'/admin/forms/layouts',
              title:'Form Layouts'
            },
            {
              to:'/admin/forms/validation',
              title:'Form Validation'
            },
            {
              to:'/admin/forms/wizards',
              title:'Form Wizard'
            },
            {
              to:'/admin/forms/wizards-2',
              title:'Form Wizard 2'
            },
            {
              to:'/admin/forms/wizards-3',
              title:'Form Wizard 3'
            },
            {
              to:'/admin/forms/editors',
              title:'Editors'
            },
            {
              to:'/admin/forms/vee',
              title:'Vee Validate'
            },
            {
              to:'/admin/forms/vuelidate',
              title:'Vuelidate'
            }
          ]"
          title="Forms"
          active-url="/admin/forms"
          icon="icon-fa icon-fa-rocket"/>
        <v-items
          :routers="[
            {
              to:'/admin/gallery/grid',
              title:'Grid'
            },
            {
              to:'/admin/gallery/masonry-grid',
              title:'Masonry Grid'
            },
          ]"
          title="Gallery"
          active-url="/admin/gallery"
          icon="icon-fa icon-fa-image"/>
        <v-items
          :routers="[
            {
              to:'/admin/users/profile',
              title:'Profile'
            },
            {
              to:'/admin/users',
              title:'All Users'
            },
          ]"
          title="Users"
          active-url="/admin/users"
          icon="icon-fa icon-fa-user"/>
        <v-items
          title="Todos"
          active-url="/admin/todo-item"
          icon="icon-fa icon-fa-check"/>
        <v-items
          title="Settings"
          active-url="/admin/settings"
          icon="icon-fa icon-fa-cogs"/>
=======
    id="mobile-nav"
    class="sidebar-left">
    <div class="sidebar-body scroll-pane">
      <ul
        id="menu"
        class="metismenu side-nav">
        <li :class="{ active : isActive('/admin/dashboard') }">
          <a
            href="#"
            aria-expanded="true">
            <i class="icon-fa icon-fa-dashboard"/>
            Dashboard
            <span class="icon-fa arrow icon-fa-fw"/>
          </a>
          <ul aria-expanded="true">
            <router-link
              to="/admin/dashboard/basic"
              tag="li"
            >
              <a>Basic</a>
            </router-link>
            <router-link
              to="/admin/dashboard/ecommerce"
              tag="li">
              <a>Ecommerce</a>
            </router-link>
            <router-link
              to="/admin/dashboard/finance"
              tag="li"
            >
              <a>Finance</a>
            </router-link>
          </ul>
        </li>
        <li :class="{ active : isActive('/admin/layouts') }">
          <a
            href="#"
            aria-expanded="true">
            <i class="icon-fa icon-fa-th-large"/>
            Layouts
            <span class="icon-fa arrow icon-fa-fw"/>
          </a>
          <ul aria-expanded="true">
            <router-link
              to="/admin/layouts/sidebar"
              tag="li"><a>Sidebar</a></router-link>
            <router-link
              to="/admin/layouts/horizontal"
              tag="li"><a>Horizontal</a></router-link>
            <router-link
              to="/admin/layouts/icons-sidebar"
              tag="li"><a>Icon Sidebar</a></router-link>
          </ul>
        </li>
        <li :class="{ active : isActive('/admin/basic-ui') }">
          <a
            href="#"
            aria-expanded="true"><i class="icon-fa icon-fa-star"/> Basic UI <span class="icon-fa arrow icon-fa-fw"/></a>
          <ul aria-expanded="true">
            <router-link
              to="/admin/basic-ui/buttons"
              tag="li"><a>Buttons</a></router-link>
            <router-link
              to="/admin/basic-ui/cards"
              tag="li"><a>Cards</a></router-link>
            <router-link
              to="/admin/basic-ui/tabs"
              tag="li"><a>Tabs &amp; Accordians</a></router-link>
            <router-link
              to="/admin/basic-ui/typography"
              tag="li"><a>Typography</a></router-link>
            <router-link
              to="/admin/basic-ui/tables"
              tag="li"><a>Tables</a></router-link>
            <router-link
              to="/admin/basic-ui/progress-bars"
              tag="li"><a>Progress Bar</a></router-link>
          </ul>
        </li>
        <li :class="{ active: isActive('/admin/components') }">
          <a
            href="#"
            aria-expanded="true"><i class="icon-fa icon-fa-puzzle-piece"/> Components <span class="icon-fa arrow icon-fa-fw"/></a>
          <ul aria-expanded="true">
            <router-link
              to="/admin/components/mail-box"
              tag="li"><a>MailBox</a></router-link>
            <router-link
              to="/admin/components/notifications"
              tag="li"><a>Notifications</a></router-link>
            <router-link
              to="/admin/components/vue-dropzone"
              tag="li"><a>File-Uploader</a></router-link>
            <router-link
              to="/admin/components/vue-tables"
              tag="li"><a>Vue Table</a></router-link>
            <router-link
              to="/admin/components/vue-tabs"
              tag="li"><a>Vue Tabs</a></router-link>
            <router-link
              to="/admin/components/vue-carousel"
              tag="li"><a>Vue Carousel</a></router-link>
            <router-link
              to="/admin/components/sweet-modals"
              tag="li"><a>Sweet Modals</a></router-link>
          </ul>
        </li>
        <li :class="{ active: isActive('/admin/chart') }">
          <a
            href="#"
            aria-expanded="true"><i class="icon-fa icon-fa-bar-chart"/> Charts <span class="icon-fa arrow icon-fa-fw"/></a>
          <ul aria-expanded="true">
            <router-link
              to="/admin/charts/amchart"
              tag="li"><a>AM Charts</a></router-link>
            <router-link
              to="/admin/charts/chartjs"
              tag="li"><a>Chart JS</a></router-link>
            <router-link
              to="/admin/charts/gauge"
              tag="li"><a>Gauges</a></router-link>
            <router-link
              to="/admin/charts/morris"
              tag="li"><a>Morris</a></router-link>
            <router-link
              to="/admin/charts/sparkline"
              tag="li"><a>Sparkline</a></router-link>
          </ul>
        </li>
        <li :class="{ active: isActive('/admin/icons') }">
          <a
            href="#"
            aria-expanded="true"><i class="icon-fa icon-fa-eye"/> Icons <span class="icon-fa arrow icon-fa-fw"/></a>
          <ul aria-expanded="true">
            <router-link
              to="/admin/icons/icomoon"
              tag="li"><a>IcoMoon</a></router-link>
            <router-link
              to="/admin/icons/evil"
              tag="li"><a>Evil Icons</a></router-link>
            <router-link
              to="/admin/icons/meteo"
              tag="li"><a>Meteo Icons</a></router-link>
            <router-link
              to="/admin/icons/line"
              tag="li"><a>Line Icons</a></router-link>
            <router-link
              to="/admin/icons/fpsline"
              tag="li"><a>FPS Line</a></router-link>
            <router-link
              to="/admin/icons/fontawesome"
              tag="li"><a>Font Awesome</a></router-link>
          </ul>
        </li>
        <li :class="{ active: isActive('/admin/forms') }">
          <a
            href="#"
            aria-expanded="true"><i class="icon-fa icon-fa-rocket"/> Forms <span class="icon-fa arrow icon-fa-fw"/></a>
          <ul aria-expanded="true">
            <router-link
              to="/admin/forms/general"
              tag="li"><a>General Elements</a></router-link>
            <router-link
              to="/admin/forms/layouts"
              tag="li"><a>Form Layouts</a></router-link>
            <router-link
              to="/admin/forms/editors"
              tag="li"><a>Editors</a></router-link>
            <router-link
              to="/admin/forms/vee"
              tag="li"><a>Vee Validate</a></router-link>
            <router-link
              to="/admin/forms/vuelidate"
              tag="li"><a>Vuelidate</a></router-link>
          </ul>
        </li>
        <!--<li :class="{ active: isActive('/admin/pages') }">-->
        <!--<a href="#" aria-expanded="true"><i class="fa fa-th-large"/> Pages <span class="fa arrow fa-fw"/></a>-->
        <!--<ul aria-expanded="true">-->
        <!--<router-link :to="'/admin/pages/login'" tag="li"><a>Login</a></router-link>-->
        <!--<router-link :to="'/admin/pages/register'" tag="li"><a>Register</a></router-link>-->
        <!--<router-link :to="'/admin/pages/404'" tag="li"><a>404 Page</a></router-link>-->
        <!--</ul>-->
        <!--</li>-->
     
        <li :class="{ active: isActive('/admin/users') }">
          <a
            href="#"
            aria-expanded="true"><i class="icon-fa icon-fa-user"/> Users <span class="icon-fa arrow icon-fa-fw"/></a>
          <ul aria-expanded="true">
            <router-link
              to="/admin/users/profile"
              tag="li"><a>Profile</a></router-link>
            <router-link
              to="/admin/users"
              tag="li"><a>All Users </a></router-link>
          </ul>
        </li>
        <li :class="{ active: isActive('/admin/todo-item') }">
          <router-link
            to="/admin/todo-item"
            tag="li"><a><i class="icon-fa icon-fa-check"/> Todos </a></router-link>
        </li>
        <li :class="{ active: isActive('/admin/settings') }">
          <router-link
            to="/admin/settings"
            tag="li"><a><i class="icon-fa icon-fa-cogs"/> Settings </a></router-link>
        </li>
>>>>>>> dev
      </ul>
    </div>
  </div>
</template>

<script type="text/babel">

import VItems from '../../../components/v-items'

export default {
  components: {
    VItems
  },
  data () {
    return {
      sidebar: 'sidebar'
    }
  },
<<<<<<< HEAD
  mounted () {
  },
  methods: {
    initPlugins () {
      $('.scroll-pane').mCustomScrollbar({ theme: 'minimal-dark' })
=======
  methods: {
    isActive (url) {
      return this.$route.path.indexOf(url) > -1
>>>>>>> dev
    }
  }
}
</script>
