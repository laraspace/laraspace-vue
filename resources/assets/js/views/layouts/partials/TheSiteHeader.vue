<template>
  <header class="site-header">
    <a
      href="#"
      class="brand-main">
      <img
        src="/assets/img/logo-desk.png"
        id="logo-desk"
        alt="Laraspace Logo"
        class="d-none d-md-inline">
      <img
        src="/assets/img/logo-mobile.png"
        id="logo-mobile"
        alt="Laraspace Logo"
        class="d-md-none">
    </a>
    <a
      href="#"
      class="nav-toggle"
      @click="onNavToggle">
      <div class="hamburger hamburger--htla">
        <span>toggle menu</span>
      </div>
    </a>
    <ul class="action-list">
      <li>
        <a
          href="#"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"><i class="icon-fa icon-fa-plus"/></a>
        <div class="dropdown-menu dropdown-menu-right">
          <a
            class="dropdown-item"
            href="#"><i class="icon-fa icon-fa-edit"/> New Post</a>
          <a
            class="dropdown-item"
            href="#"><i class="icon-fa icon-fa-tag"/> New Category</a>
          <div class="dropdown-divider"/>
          <a
            class="dropdown-item"
            href="#"><i class="icon-fa icon-fa-star"/> Separated link</a>
        </div>
      </li>
      <li>
        <a
          href="#"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"><i class="icon-fa icon-fa-bell"/></a>
        <div class="dropdown-menu dropdown-menu-right notification-dropdown">
          <h6 class="dropdown-header">Notifications</h6>
          <a
            class="dropdown-item"
            href="#"><i class="icon-fa icon-fa-user"/> New User was Registered</a>
          <a
            class="dropdown-item"
            href="#"><i class="icon-fa icon-fa-comment"/> A Comment has been posted.</a>
        </div>
      </li>
      <li>
        <a
          href="#"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          class="avatar">
          <img
            src="/assets/img/avatars/avatar.png"
            alt="Avatar"></a>
        <div class="dropdown-menu dropdown-menu-right notification-dropdown">
          <router-link
            class="dropdown-item"
            to="/admin/settings"><i class="icon-fa icon-fa-cogs"/> Settings</router-link>
          <a
            href="#"
            class="dropdown-item"
            @click.prevent="logout"><i class="icon-fa icon-fa-sign-out"/> Logout</a>
        </div>
      </li>
    </ul>
  </header>
</template>
<script type="text/babel">
import Layout from '../../../helpers/layout'
import Auth from '../../../services/auth'

export default {
  data () {
    return {
      header: 'header'
    }
  },
  methods: {
    onNavToggle () {
      Layout.toggleSidebar()
    },
    logout () {
      Auth.logout().then(() => {
        this.$router.replace('/login')
      })
    }
  }
}
</script>
