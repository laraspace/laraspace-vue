<template>
  <header class="site-header">
    <a href="#" class="brand-main">
      <img
        id="logo-desk"
        src="/assets/img/logo-desk.png"
        alt="Laraspace Logo"
        class="d-none d-md-inline"
      >
      <img
        id="logo-mobile"
        src="/assets/img/logo-mobile.png"
        alt="Laraspace Logo"
        class="d-md-none"
      >
    </a>
    <a
      href="#"
      class="nav-toggle"
      @click="onNavToggle"
    >
      <div class="hamburger hamburger--arrowturn">
        <div class="hamburger-box">
          <div class="hamburger-inner"/>
        </div>
      </div>
    </a>
    <ul class="action-list">
      <li>
        <v-dropdown :show-arrow="false">
          <a slot="activator" href="#">
            <i class="icon-fa icon-fa-plus"/>
          </a>
          <v-dropdown-item>
            <a href="#">
              <i class="icon-fa icon-fa-edit"/> New Post
            </a>
          </v-dropdown-item>
          <v-dropdown-item>
            <a href="#">
              <i class="icon-fa icon-fa-tag"/> New Category
            </a>
          </v-dropdown-item>
          <v-dropdown-divider/>
          <v-dropdown-item>
            <a href="#">
              <i class="icon-fa icon-fa-star"/> Separated link
            </a>
          </v-dropdown-item>
        </v-dropdown>
      </li>
      <li>
        <v-dropdown :show-arrow="false">
          <a
            slot="activator"
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="icon-fa icon-fa-bell"/>
          </a>
          <div class="notification-dropdown">
            <h6 class="dropdown-header">
              Notifications
            </h6>
            <v-dropdown-item>
              <a class="dropdown-item" href="#">
                <i class="icon-fa icon-fa-user"/> New User was Registered
              </a>
            </v-dropdown-item>
            <v-dropdown-item>
              <a class="dropdown-item" href="#">
                <i class="icon-fa icon-fa-comment"/> A Comment has been posted.
              </a>
            </v-dropdown-item>
          </div>
        </v-dropdown>
      </li>
      <li>
        <v-dropdown :show-arrow="false">
          <a
            slot="activator"
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            class="avatar"
          >
            <img src="/assets/img/avatars/avatar.png" alt="Avatar">
          </a>
          <v-dropdown-item>
            <router-link class="dropdown-item" to="/admin/settings">
              <i class="icon-fa icon-fa-cogs"/> Settings
            </router-link>
          </v-dropdown-item>
          <v-dropdown-item>
            <a
              href="#"
              class="dropdown-item"
              @click.prevent="logout"
            >
              <i class="icon-fa icon-fa-sign-out"/> Logout
            </a>
          </v-dropdown-item>
        </v-dropdown>
      </li>
    </ul>
  </header>
</template>
<script type="text/babel">
import Auth from '../../../services/auth'

export default {
  methods: {
    onNavToggle () {
      this.$utils.toggleSidebar()
    },
    logout () {
      Auth.logout().then(() => {
        this.$router.replace('/login')
      })
    }
  }
}
</script>
