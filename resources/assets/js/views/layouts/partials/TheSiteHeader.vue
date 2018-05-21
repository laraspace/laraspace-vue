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
      <div class="hamburger hamburger--htla">
        <span>toggle menu</span>
      </div>
    </a>
    <ul class="action-list">
      <li>
        <v-dropdown :toggle-arrow="false">
          <a slot="activator" href="#">
            <i class="icon-fa icon-fa-plus"/>
          </a>
          <v-dropdown-item>
            <a slot="dropdown-item" href="#">
              <i class="icon-fa icon-fa-edit"/> New Post
            </a>
            <a slot="dropdown-item" href="#">
              <i class="icon-fa icon-fa-tag"/> New Category
            </a>
            <v-dropdown-item-divider slot="dropdown-item"/>
            <a slot="dropdown-item" href="#">
              <i class="icon-fa icon-fa-star"/> Separated link
            </a>
          </v-dropdown-item>
        </v-dropdown>
      </li>
      <li>
        <v-dropdown :toggle-arrow="false">
          <a
            slot="activator"
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="icon-fa icon-fa-bell"/>
          </a>
          <v-dropdown-item>
            <h6 slot="dropdown-item" class="dropdown-header">
              Notifications
            </h6>
            <a
              slot="dropdown-item"
              class="dropdown-item"
              href="#"
            >
              <i class="icon-fa icon-fa-user"/> New User was Registered
            </a>
            <a
              slot="dropdown-item"
              class="dropdown-item"
              href="#"
            >
              <i class="icon-fa icon-fa-comment"/> A Comment has been posted.
            </a>
          </v-dropdown-item>
        </v-dropdown>
      </li>
      <li>
        <v-dropdown :toggle-arrow="false">
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
            <router-link
              slot="dropdown-item"
              class="dropdown-item"
              to="/admin/settings"
            >
              <i class="icon-fa icon-fa-cogs"/> Settings
            </router-link>
            <a
              slot="dropdown-item"
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
import VDropdown from '../../../components/dropdown/VDropdown'
import VDropdownItem from '../../../components/dropdown/VDropdownItem'
import VDropdownItemDivider from '../../../components/dropdown/VDropdownItemDivider'

export default {
  components: {
    VDropdown,
    VDropdownItem,
    VDropdownItemDivider,
  },
  data () {
    return {
      header: 'header'
    }
  },
  methods: {
    onNavToggle () {
      this.$layout.toggleSidebar()
    },
    logout () {
      Auth.logout().then(() => {
        this.$router.replace('/login')
      })
    }
  }
}
</script>
