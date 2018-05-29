<template>
  <div class="header-bottom">
    <div class="header-nav vue-dropdown-menu">
      <v-dropdown active-url="/admin/dashboard">
        <a slot="activator" href="#">
          <i class="icon-fa icon-fa-dashboard"/>Dashboard
        </a>

        <v-dropdown-item>
          <router-link to="/admin/dashboard/basic">
            Basic
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/dashboard/ecommerce">
            Ecommerce
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/dashboard/finance">
            Finance
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/layouts">
        <a slot="activator" href="#">
          <i class="icon-fa icon-fa-th-large"/>Layouts
        </a>

        <v-dropdown-item>
          <router-link to="/admin/layouts/sidebar">
            Sidebar
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/layouts/horizontal">
            Horizontal
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/layouts/icons-sidebar">
            Icon Sidebar
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/basic-ui">
        <a slot="activator" href="#">
          <i class="icon-fa icon-fa-star"/>Basic UI
        </a>

        <v-dropdown-item>
          <router-link to="/admin/basic-ui/buttons">
            Buttons
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/basic-ui/cards">
            Cards
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/basic-ui/typography">
            Typography
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/basic-ui/tables">
            Tables
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/basic-ui/progress-bars">
            Progress Bar
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/components">
        <a slot="activator" href="#">
          <i class="icon-fa icon-fa-puzzle-piece"/>Components
        </a>

        <v-dropdown-item>
          <router-link to="/admin/components/vue-tables">
            Vue DataTables
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/components/vue-tabs">
            Vue Tabs
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/components/vue-carousel">
            Vue Carousel
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/components/notifications">
            Notifications
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/components/tooltips">
            Vue Tooltips
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/components/vue-carousel">
            VueCarousel
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/components/sweet-modals">
            Sweet Modals
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/components/vue-dropzone">
            VueDropzone
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/components/vee">
            Vee Validate
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/forms">
        <a slot="activator" href="#">
          <i class="icon-fa icon-fa-rocket"/>Forms
        </a>

        <v-dropdown-item>
          <router-link to="/admin/forms/general">
            General Elements
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/forms/advanced">
            Advanced Elements
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/forms/layouts">
            Form Layouts
          </router-link>
        </v-dropdown-item>
        <v-dropdown-item>
          <router-link to="/admin/forms/vuelidate">
            Vuelidate
          </router-link>
        </v-dropdown-item>
      </v-dropdown>

      <v-dropdown active-url="/admin/settings">
        <router-link slot="activator" to="/admin/settings">
          <i class="icon-fa icon-fa-cogs"/>Settings
        </router-link>
      </v-dropdown>
    </div>
  </div>
</template>
