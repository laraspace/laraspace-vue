<template>
  <div class="sidebar-left">
    <div class="sidebar-body scroll-pane">
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
  mounted () {
  },
  methods: {
    initPlugins () {
      $('.scroll-pane').mCustomScrollbar({ theme: 'minimal-dark' })
    }
  }
}
</script>
