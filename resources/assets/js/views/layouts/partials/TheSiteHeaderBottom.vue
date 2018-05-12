<template>
  <div class="header-bottom">
    <div class="header-nav vue-dropdown-menu">
      <v-dropdown active-url="/admin/dashboard">
        <a
          slot="activator"
          href="#">
          <i class="icon-fa icon-fa-dashboard"/>Dashboard
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/dashboard/basic">
            Basic
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/dashboard/ecommerce">
            Ecommerce
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/dashboard/finance">
            Finance
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/layouts">
        <a
          slot="activator"
          href="#">
          <i class="icon-fa icon-fa-th-large"/>Layouts
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/layouts/sidebar">
            Sidebar
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/layouts/horizontal">
            Horizontal
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/layouts/icons-sidebar">
            Icon Sidebar
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/basic-ui">
        <a
          slot="activator"
          href="#">
          <i class="icon-fa icon-fa-star"/>Basic UI
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/basic-ui/buttons">
            Buttons
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/basic-ui/cards">
            Cards
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/basic-ui/typography">
            Typography
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/basic-ui/tables">
            Tables
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/basic-ui/progress-bars">
            Progress Bar
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/components">
        <a
          slot="activator"
          href="#">
          <i class="icon-fa icon-fa-puzzle-piece"/>Components
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/components/vue-tables">
            Vue DataTables
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/components/vue-tabs">
            Vue Tabs
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/components/vue-carousel">
            Vue Carousel
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/components/notifications">
            Notifications
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/components/tooltips">
            Vue Tooltips
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/components/vue-carousel">
            VueCarousel
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/components/sweet-modals">
            Sweet Modals
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/components/vue-dropzone">
            VueDropzone
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/components/vee">
            Vee Validate
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/chart">
        <a
          slot="activator"
          href="#">
          <i class="icon-fa icon-fa-bar-chart"/>Charts
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/charts/chartjs">
            Chart JS
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/charts/gauges">
            Gauges
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/icons">
        <a
          slot="activator"
          href="#">
          <i class="icon-fa icon-fa-eye"/>Icons
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/icons/fpsline">
            Fpsline
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/icons/fontawesome">
            FontAwesome
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/icons/icomoon">
            IcoMoon
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/icons/line">
            Line
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/icons/meteo">
            Meteo
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/forms">
        <a
          slot="activator"
          href="#">
          <i class="icon-fa icon-fa-rocket"/>Form
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/forms/general">
            General Elements
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/forms/advanced">
            Advanced Elements
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/forms/layouts">
            Form Layouts
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/forms/validation">
            Form Validation
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/forms/wizards">
            Form Wizard
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/forms/wizards-2">
            Form Wizard 2
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/forms/wizards-3">
            Form Wizard 3
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/forms/editors">
            Editors
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/forms/vuelidate">
            Vuelidate
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/gallery">
        <a
          slot="activator"
          href="#">
          <i class="icon-fa icon-fa-image"/>Gallery
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/gallery/grid">
            Grid
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/gallery/masonry-grid">
            Masonry Grid
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/pages">
        <a
          slot="activator"
          href="#">
          <i class="icon-fa icon-fa-image"/>Pages
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/pages/login">
            Login
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/pages/login-2">
            Login 2
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/pages/login-3">
            Login 3
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/pages/register">
            Register
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/pages/register-2">
            Register 2
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/pages/register-3">
            Register 3
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/users">
        <a
          slot="activator"
          href="#">
          <i class="icon-fa icon-fa-user"/>Users
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/users/profile">
            Profile
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/users">
            All Users
          </router-link>
        </v-dropdown-item>
      </v-dropdown>
      <v-dropdown active-url="/admin/apps">
        <a
          slot="activator"
          href="#">
          <i class="icon-fa icon-fa-adn"/>Apps
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/apps/mail-box">
            <i class="icon-fa icon-fa-envelope-o"/> MailBox
          </router-link>

          <router-link
            slot="item-title"
            to="/admin/apps/todo-item">
            <i class="icon-fa icon-fa-check"/>Todos
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/settings">
        <router-link
          slot="activator"
          to="/admin/settings">
          <i class="icon-fa icon-fa-cogs"/>Settings
        </router-link>
      </v-dropdown>
    </div>
  </div>
</template>

<script type="text/babel">
import VDropdown from '../../../components/dropdown/VDropdown'
import VDropdownItem from '../../../components/dropdown/VDropdownItem'
import VDropdownSubItem from '../../../components/dropdown/VDropdownSubItem'

export default {
  components: {
    VDropdown,
    VDropdownItem,
    VDropdownSubItem
  },
  data () {
    return {
      sidebar: 'sidebar'
    }
  }
}
</script>
