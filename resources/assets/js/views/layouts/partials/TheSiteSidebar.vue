<template>
  <div class="sidebar-left">
    <div class="sidebar-body scroll-pane">
      <div class="side-nav">
        <v-collapse accordion>
          <v-collapse-item active-url="/admin/dashboard">
            <a slot="item-title" href="#">
              <i class="icon-fa icon-fa-dashboard"/>Dashboard
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link to="/admin/dashboard/basic">
              Basic
            </router-link>

            <router-link to="/admin/dashboard/ecommerce">
              Ecommerce
            </router-link>

            <router-link to="/admin/dashboard/finance">
              Finance
            </router-link>
          </v-collapse-item>

          <v-collapse-item active-url="/admin/layouts">
            <a slot="item-title" href="#">
              <i class="icon-fa icon-fa-th-large"/>Layouts
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link to="/admin/layouts/sidebar">
              Sidebar
            </router-link>

            <router-link to="/admin/layouts/horizontal">
              Horizontal
            </router-link>

            <router-link to="/admin/layouts/icons-sidebar">
              Icon Sidebar
            </router-link>
          </v-collapse-item>

          <v-collapse-item active-url="/admin/basic-ui">
            <a slot="item-title" href="#">
              <i class="icon-fa icon-fa-star"/>Basic UI
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link to="/admin/basic-ui/buttons">
              Buttons
            </router-link>

            <router-link to="/admin/basic-ui/cards">
              Cards
            </router-link>

            <router-link to="/admin/basic-ui/typography">
              Typography
            </router-link>

            <router-link to="/admin/basic-ui/tables">
              Tables
            </router-link>

            <router-link to="/admin/basic-ui/progress-bars">
              Progress Bars
            </router-link>
          </v-collapse-item>

          <v-collapse-item active-url="/admin/components">
            <a slot="item-title" href="#">
              <i class="icon-fa icon-fa-puzzle-piece"/>Components
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link to="/admin/components/notifications">
              Notifications
            </router-link>

            <router-link to="/admin/components/sweet-modals">
              Sweet Modals
            </router-link>

            <router-link to="/admin/components/vue-carousel">
              Vue Carousel
            </router-link>

            <router-link to="/admin/components/vue-dropzone">
              Vue Dropzone
            </router-link>

            <router-link to="/admin/components/vue-tables">
              Vue DataTables
            </router-link>

            <router-link to="/admin/components/vue-tabs">
              Vue Tabs
            </router-link>

            <router-link to="/admin/components/vue-collapse">
              Vue Collapse
            </router-link>

            <router-link to="/admin/components/tooltips">
              Vue Tooltips
            </router-link>
          </v-collapse-item>

          <v-collapse-item active-url="/admin/chart">
            <a slot="item-title" href="#">
              <i class="icon-fa icon-fa-bar-chart"/>Charts
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link to="/admin/charts/chartjs">
              Chart JS
            </router-link>

            <router-link to="/admin/charts/gauges">
              Gauge Charts
            </router-link>
          </v-collapse-item>

          <v-collapse-item active-url="/admin/icons">
            <a slot="item-title" href="#">
              <i class="icon-fa icon-fa-eye"/>Icons
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link to="/admin/icons/icomoon">
              IcoMoon
            </router-link>

            <router-link to="/admin/icons/meteo">
              Meteo Icons
            </router-link>

            <router-link to="/admin/icons/line">
              Line Icons
            </router-link>

            <router-link to="/admin/icons/fpsline">
              FPS Line
            </router-link>

            <router-link to="/admin/icons/fontawesome">
              Font Awesome
            </router-link>

          </v-collapse-item>

          <v-collapse-item active-url="/admin/forms">
            <a slot="item-title" href="#">
              <i class="icon-fa icon-fa-rocket"/>Forms
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link to="/admin/forms/general">
              General Elements
            </router-link>

            <router-link to="/admin/forms/advanced">
              Advanced Elements
            </router-link>

            <router-link to="/admin/forms/layouts">
              Form Layouts
            </router-link>

            <router-link to="/admin/forms/vuelidate">
              Vuelidate
            </router-link>

            <router-link to="/admin/forms/vee-validate">
              Vee Validate
            </router-link>
          </v-collapse-item>

          <v-collapse-item active-url="/admin/gallery">
            <a slot="item-title" href="#">
              <i class="icon-fa icon-fa-image"/>Gallery
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link to="/admin/gallery/image">
              Image Gallery
            </router-link>

            <router-link to="/admin/gallery/video">
              Video Gallery
            </router-link>
          </v-collapse-item>

          <v-collapse-item active-url="/admin/pages">
            <a slot="item-title" href="#"
            >
              <i class="icon-fa icon-fa-file"/>Pages
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link to="/admin/pages/login">
              Login
            </router-link>

            <router-link to="/admin/pages/login-2">
              Login 2
            </router-link>

            <router-link to="/admin/pages/login-3">
              Login 3
            </router-link>

            <router-link to="/admin/pages/register">
              Register
            </router-link>

            <router-link to="/admin/pages/register-2">
              Register 2
            </router-link>

            <router-link to="/admin/pages/register-3">
              Register 3
            </router-link>
          </v-collapse-item>

          <v-collapse-item active-url="/admin/users">
            <a slot="item-title" href="#">
              <i class="icon-fa icon-fa-user"/>Users
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link to="/admin/users/profile">
              Profile
            </router-link>

            <router-link to="/admin/users/all">
              All Users
            </router-link>
          </v-collapse-item>

          <v-collapse-item active-url="/admin/apps">
            <a slot="item-title" href="#">
              <i class="icon-fa icon-fa-adn"/>Apps
              <span class="icon-fa arrow icon-fa-fw"/>
            </a>

            <router-link
              to="/admin/apps/mailbox">
              Mailbox
            </router-link>

            <router-link to="/admin/apps/todos">
              Todos
            </router-link>
          </v-collapse-item>

          <v-collapse-item active-url="/admin/settings">
            <router-link
              slot="item-title"
              to="/admin/settings">
              <i class="icon-fa icon-fa-cogs"/>Settings
            </router-link>
          </v-collapse-item>
        </v-collapse>
      </div>
    </div>
  </div>
</template>