<template>
    <div class="sidebar-left" id="mobile-nav">
        <div class="sidebar-body scroll-pane">
            <ul class="metismenu side-nav" id="menu">
                <li :class="{ active : isActive('/admin/dashboard') }">
                    <a href="#" aria-expanded="true"><i class="icon-fa icon-fa-dashboard"></i> Dashboard <span class="icon-fa arrow icon-fa-fw"></span></a>
                    <ul aria-expanded="true">
                        <router-link to="/admin/dashboard/basic" tag="li"><a>Basic</a></router-link>
                        <router-link to="/admin/dashboard/ecommerce" tag="li"><a>Ecommerce</a></router-link>
                        <router-link to="/admin/dashboard/finance" tag="li"><a>Finance</a></router-link>
                    </ul>
                </li>
                <li :class="{ active : isActive('/admin/layouts') }">
                    <a href="#" aria-expanded="true"><i class="icon-fa icon-fa-th-large"></i> Layouts <span class="icon-fa arrow icon-fa-fw"></span></a>
                    <ul aria-expanded="true">
                        <router-link to="/admin/layouts/sidebar" tag="li"><a>Sidebar</a></router-link>
                        <router-link to="/admin/layouts/horizontal" tag="li"><a>Horizontal</a></router-link>
                        <router-link to="/admin/layouts/icons-sidebar" tag="li"><a>Icon Sidebar</a></router-link>
                    </ul>
                </li>
                <li :class="{ active : isActive('/admin/basic-ui') }">
                    <a href="#" aria-expanded="true"><i class="icon-fa icon-fa-star"></i> Basic UI <span class="icon-fa arrow icon-fa-fw"></span></a>
                    <ul aria-expanded="true">
                        <router-link to="/admin/basic-ui/buttons" tag="li"><a>Buttons</a></router-link>
                        <router-link to="/admin/basic-ui/cards" tag="li"><a>Cards</a></router-link>
                        <router-link to="/admin/basic-ui/tabs" tag="li"><a>Tabs &amp; Accordians</a></router-link>
                        <router-link to="/admin/basic-ui/typography" tag="li"><a>Typography</a></router-link>
                        <router-link to="/admin/basic-ui/tables" tag="li"><a>Tables</a></router-link>
                        <router-link to="/admin/basic-ui/modals" tag="li"><a>Modals</a></router-link>
                    </ul>
                </li>
                <li :class="{ active: isActive('/admin/components') }">
                    <a href="#" aria-expanded="true"><i class="icon-fa icon-fa-puzzle-piece"></i> Components <span class="icon-fa arrow icon-fa-fw"></span></a>
                    <ul aria-expanded="true">
                        <router-link to="/admin/components/calendar" tag="li"><a>Calendar</a></router-link>
                        <router-link to="/admin/components/datatables" tag="li"><a>Jquery Datatables</a></router-link>
                        <router-link to="/admin/components/image-cropper" tag="li"><a>ImageCropper</a></router-link>
                        <router-link to="/admin/components/image-zoom" tag="li"><a>ImageZoom</a></router-link>
                        <router-link to="/admin/components/nestable-list" tag="li"><a>Nestable List</a></router-link>
                        <router-link to="/admin/components/nestable-tree" tag="li"><a>Nestable Tree</a></router-link>
                        <router-link to="/admin/components/notifications" tag="li"><a>Notifications</a></router-link>
                        <li :class="{ active: isActive('/admin/components/rating') }">
                            <a href="#" aria-expanded="true">Rating <span class="icon-fa arrow icon-fa-fw"></span></a>
                            <ul aria-expanded="true" class="submenu">
                                <router-link to="/admin/components/rating/bar-rating" tag="li"><a>Bar Rating</a></router-link>
                                <router-link to="/admin/components/rating/star-rating" tag="li"><a>Star Rating </a></router-link>
                            </ul>
                        </li>
                        <router-link to="/admin/components/sweet-modals" tag="li"><a>SweetModals</a></router-link>
                    </ul>
                </li>
                <li :class="{ active: isActive('/admin/chart') }">
                    <a href="#" aria-expanded="true"><i class="icon-fa icon-fa-bar-chart"></i> Charts <span class="icon-fa arrow icon-fa-fw"></span></a>
                    <ul aria-expanded="true">
                        <router-link to="/admin/charts/amchart" tag="li"><a>AM Charts</a></router-link>
                        <router-link to="/admin/charts/chartjs" tag="li"><a>Chart JS</a></router-link>
                        <router-link to="/admin/charts/gauge" tag="li"><a>Gauges</a></router-link>
                        <router-link to="/admin/charts/morris" tag="li"><a>Morris</a></router-link>
                        <router-link to="/admin/charts/sparkline" tag="li"><a>Sparkline</a></router-link>
                    </ul>
                </li>
                <li :class="{ active: isActive('/admin/icons') }">
                    <a href="#" aria-expanded="true"><i class="icon-fa icon-fa-eye"></i> Icons <span class="icon-fa arrow icon-fa-fw"></span></a>
                    <ul aria-expanded="true">
                        <router-link to="/admin/icons/icomoon" tag="li"><a>IcoMoon</a></router-link>
                        <!--<router-link to="/admin/icons/evil" tag="li"><a>Evil Icons</a></router-link>-->
                        <!--<router-link to="/admin/icons/meteo" tag="li"><a>Meteo Icons</a></router-link>-->
                        <!--<router-link to="/admin/icons/line" tag="li"><a>Line Icons</a></router-link>-->
                        <!--<router-link to="/admin/icons/fpsline" tag="li"><a>FPS Line</a></router-link>-->
                        <router-link to="/admin/icons/fontawesome" tag="li"><a>Font Awesome</a></router-link>
                    </ul>
                </li>
                <li :class="{ active: isActive('/admin/forms') }">
                    <a href="#" aria-expanded="true"><i class="icon-fa icon-fa-rocket"></i> Forms <span class="icon-fa arrow icon-fa-fw"></span></a>
                    <ul aria-expanded="true">
                        <router-link to="/admin/forms/general" tag="li"><a>General Elements</a></router-link>
                        <router-link to="/admin/forms/advanced" tag="li"><a>Advanced Elements</a></router-link>
                        <router-link to="/admin/forms/layouts" tag="li"><a>Form Layouts</a></router-link>
                        <router-link to="/admin/forms/validation" tag="li"><a>Form Validation</a></router-link>
                        <router-link to="/admin/forms/wizards" tag="li"><a>Form Wizard</a></router-link>
                        <router-link to="/admin/forms/wizards-2" tag="li"><a>Form Wizard 2</a></router-link>
                        <router-link to="/admin/forms/wizards-3" tag="li"><a>Form Wizard 3</a></router-link>
                        <router-link to="/admin/forms/editors" tag="li"><a>Editors</a></router-link>
                        <router-link to="/admin/forms/vee" tag="li"><a>Vee Validate</a></router-link>
                        <router-link to="/admin/forms/vuelidate" tag="li"><a>Vuelidate</a></router-link>
                    </ul>
                </li>
                <!--<li :class="{ active: isActive('/admin/pages') }">-->
                    <!--<a href="#" aria-expanded="true"><i class="fa fa-th-large"></i> Pages <span class="fa arrow fa-fw"></span></a>-->
                    <!--<ul aria-expanded="true">-->
                        <!--<router-link :to="'/admin/pages/login'" tag="li"><a>Login</a></router-link>-->
                        <!--<router-link :to="'/admin/pages/register'" tag="li"><a>Register</a></router-link>-->
                        <!--<router-link :to="'/admin/pages/404'" tag="li"><a>404 Page</a></router-link>-->
                    <!--</ul>-->
                <!--</li>-->
                <li :class="{ active: isActive('/admin/gallery') }">
                    <a href="#" aria-expanded="true"><i class="icon-fa icon-fa-image"></i> Gallery <span class="icon-fa arrow icon-fa-fw"></span></a>
                    <ul aria-expanded="true">
                        <router-link to="/admin/gallery/grid" tag="li"><a>Grid</a></router-link>
                        <router-link to="/admin/gallery/masonry-grid" tag="li"><a>Masonry Grid </a></router-link>
                    </ul>
                </li>
                <li :class="{ active: isActive('/admin/users') }">
                    <a href="#" aria-expanded="true"><i class="icon-fa icon-fa-user"></i> Users <span class="icon-fa arrow icon-fa-fw"></span></a>
                    <ul aria-expanded="true">
                        <router-link to="/admin/users/profile" tag="li"><a>Profile</a></router-link>
                        <router-link to="/admin/users" tag="li"><a>All Users </a></router-link>
                    </ul>
                </li>
                <li :class="{ active: isActive('/admin/todos') }">
                    <router-link to="/admin/todos" tag="li"><a><i class="icon-fa icon-fa-check"></i> Todos </a></router-link>
                </li>
                <li :class="{ active: isActive('/admin/settings') }">
                    <router-link to="/admin/settings" tag="li"><a><i class="icon-fa icon-fa-cogs"></i> Settings </a></router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      sidebar: "sidebar"
    };
  },
  mounted () {
    Plugin.initPlugins(["MetisMenu"])
  },
  methods: {
    initPlugins() {
      $(".scroll-pane").mCustomScrollbar({ theme: "minimal-dark" })
    },
    isActive (url) {
      return this.$route.path.indexOf(url) > -1
    }
  }
};
</script>