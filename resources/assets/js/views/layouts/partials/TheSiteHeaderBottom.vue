<template>
  <div class="header-bottom">
    <div class="header-nav vue-dropdown-menu">
      <v-dropdown active-url="/admin/dashboard">
        <a
          slot="title"
          href="#">
          <i class="icon-fa icon-fa-dashboard"/>Dashboard
        </a>

        <v-dropdown-item>
         <router-link
            slot="item-title"
            to="/admin/dashboard/basic">
            Basic
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/dashboard/ecommerce">
            Ecommerce
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/dashboard/finance">
            Finance
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/layouts">
        <a
          slot="title"
          href="#">
          <i class="icon-fa icon-fa-th-large"/>Layouts
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/layouts/sidebar">
            Sidebar
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/layouts/horizontal">
            Horizontal
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/layouts/icons-sidebar">
            Icon Sidebar
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/basic-ui">
        <a
          slot="title"
          href="#">
          <i class="icon-fa icon-fa-star"/>Basic UI
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/basic-ui/buttons">
            Buttons
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/basic-ui/cards">
            Cards
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/basic-ui/typography">
            Typography
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/basic-ui/tables">
            Tables
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/basic-ui/progress-bars">
            Progress Bar
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/components">
        <a
          slot="title"
          href="#">
          <i class="icon-fa icon-fa-puzzle-piece"/>Components
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/components/vue-tables">
            Vue DataTables
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/components/vue-tabs">
            Vue Tabs
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/components/vue-carousel">
            Vue Carousel
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/components/notifications">
            Notifications
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/components/tooltips">
            Vue Tooltips
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/components/vue-carousel">
            VueCarousel
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/components/sweet-modals">
            Sweet Modals
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/components/vue-dropzone">
            VueDropzone
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/components/vee">
            Vee Validate
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/chart">
        <a
          slot="title"
          href="#">
          <i class="icon-fa icon-fa-bar-chart"/>Charts
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/charts/chartjs">
            Chart JS
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/charts/gauges">
            Gauges
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/icons">
        <a
          slot="title"
          href="#">
          <i class="icon-fa icon-fa-eye"/>Icons
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/icons/fpsline">
            Fpsline
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/icons/fontawesome">
            FontAwesome
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/icons/icomoon">
            IcoMoon
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/icons/line">
            Line
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/icons/meteo">
            Meteo
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/forms">
        <a
          slot="title"
          href="#">
          <i class="icon-fa icon-fa-rocket"/>Form
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/forms/general">
            General Elements
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/forms/advanced">
            Advanced Elements
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/forms/layouts">
            Form Layouts
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/forms/validation">
            Form Validation
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/forms/wizards">
            Form Wizard
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/forms/wizards-2">
            Form Wizard 2
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/forms/wizards-3">
            Form Wizard 3
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/forms/editors">
            Editors
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/forms/vuelidate">
            Vuelidate
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/gallery">
        <a
          slot="title"
          href="#">
          <i class="icon-fa icon-fa-image"/>Gallery
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/gallery/grid">
            Grid
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/gallery/masonry-grid">
            Masonry Grid
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/pages">
        <a
          slot="title"
          href="#">
          <i class="icon-fa icon-fa-image"/>Pages
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/pages/login">
            Login
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/pages/login-2">
            Login 2
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/pages/login-3">
            Login 3
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/pages/register">
            Register
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/pages/register-2">
            Register 2
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/pages/register-3">
            Register 3
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/users">
        <a
          slot="title"
          href="#">
          <i class="icon-fa icon-fa-user"/>Users
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/users/profile">
            Profile
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/users">
            All Users
          </router-link>
        </v-dropdown-item>
      </v-dropdown>
      <v-dropdown active-url="/admin/apps">
        <a
          slot="title"
          href="#">
          <i class="icon-fa icon-fa-adn"/>Apps
        </a>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/apps/mail-box">
            <i class="icon-fa icon-fa-envelope-o"/> MailBox
          </router-link>
        </v-dropdown-item>

        <v-dropdown-item>
          <router-link
            slot="item-title"
            to="/admin/apps/todo-item">
            <i class="icon-fa icon-fa-check"/>Todos
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/settings">
        <router-link
          slot="title"
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

export default {
  components: {
    VDropdown,
    VDropdownItem
  },
  data () {
    return {
      sidebar: 'sidebar'
    }
  }
}
</script>
