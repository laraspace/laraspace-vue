<template>
  <div
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
        <li :class="{ active: isActive('/admin/gallery') }">
          <a
            href="#"
            aria-expanded="true"><i class="icon-fa icon-fa-image"/> Gallery <span class="icon-fa arrow icon-fa-fw"/></a>
          <ul aria-expanded="true">
            <router-link
              to="/admin/gallery/grid"
              tag="li"><a>Grid</a></router-link>
            <router-link
              to="/admin/gallery/masonry-grid"
              tag="li"><a>Masonry Grid </a></router-link>
          </ul>
        </li>
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
      </ul>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  data () {
    return {
      sidebar: 'sidebar'
    }
  },
  methods: {
    isActive (url) {
      return this.$route.path.indexOf(url) > -1
    }
  }
}
</script>
