<template>
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
              to="/admin/basic-ui/modals"
              tag="li"><a>Modals</a></router-link>
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
              to="/admin/components/calendar"
              tag="li"><a>Calendar</a></router-link>
            <router-link
              to="/admin/components/mail-box"
              tag="li"><a>MailBox</a></router-link>
            <router-link
              to="/admin/components/datatables"
              tag="li"><a>Jquery Datatables</a></router-link>
            <router-link
              to="/admin/components/image-cropper"
              tag="li"><a>ImageCropper</a></router-link>
            <router-link
              to="/admin/components/image-zoom"
              tag="li"><a>ImageZoom</a></router-link>
            <router-link
              to="/admin/components/nestable-list"
              tag="li"><a>Nestable List</a></router-link>
            <router-link
              to="/admin/components/nestable-tree"
              tag="li"><a>Nestable Tree</a></router-link>
            <router-link
              to="/admin/components/notifications"
              tag="li"><a>Notifications</a></router-link>
            <router-link
              to="/admin/components/sweet-modals"
              tag="li"><a>Sweet Modals</a></router-link>
            <li :class="{ active: isActive('/admin/components/rating') }">
              <a
                href="#"
                aria-expanded="true">Rating <span class="icon-fa arrow icon-fa-fw"/></a>
              <ul aria-expanded="true">
                <router-link
                  to="/admin/components/rating/bar-rating"
                  tag="li"><a>Bar Rating</a></router-link>
                <router-link
                  to="/admin/components/rating/star-rating"
                  tag="li"><a>Star Rating </a></router-link>
              </ul>
            </li>
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
            <!--<router-link to="/admin/icons/evil" tag="li"><a>Evil Icons</a></router-link>-->
            <!--<router-link to="/admin/icons/meteo" tag="li"><a>Meteo Icons</a></router-link>-->
            <!--<router-link to="/admin/icons/line" tag="li"><a>Line Icons</a></router-link>-->
            <!--<router-link to="/admin/icons/fpsline" tag="li"><a>FPS Line</a></router-link>-->
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
              to="/admin/forms/advanced"
              tag="li"><a>Advanced Elements</a></router-link>
            <router-link
              to="/admin/forms/layouts"
              tag="li"><a>Form Layouts</a></router-link>
            <router-link
              to="/admin/forms/validation"
              tag="li"><a>Form Validation</a></router-link>
            <router-link
              to="/admin/forms/wizards"
              tag="li"><a>Form Wizard</a></router-link>
            <router-link
              to="/admin/forms/wizards-2"
              tag="li"><a>Form Wizard 2</a></router-link>
            <router-link
              to="/admin/forms/wizards-3"
              tag="li"><a>Form Wizard 3</a></router-link>
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
</template>

<style>
  /*
 * metismenu - v2.7.1
 * A jQuery menu plugin
 * https://github.com/onokumus/metismenu#readme
 *
 * Made by Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
 * Under MIT License
 */

.metismenu .arrow {
  float: right;
  line-height: 1.42857;
}
*[dir="rtl"] .metismenu .arrow {
  float: left;
}

/*
 * Require Bootstrap 3.x
 * https://github.com/twbs/bootstrap
*/

.metismenu .glyphicon.arrow:before {
  content: "\e079";
}
.metismenu .active > a > .glyphicon.arrow:before {
  content: "\e114";
}

/*
 * Require Font-Awesome
 * http://fortawesome.github.io/Font-Awesome/
*/

.metismenu .fa.arrow:before {
  content: "\f104";
}
.metismenu .active > a > .fa.arrow:before {
  content: "\f107";
}

/*
 * Require Ionicons
 * http://ionicons.com/
*/

.metismenu .ion.arrow:before {
  content: "\f3d2"
}
.metismenu .active > a > .ion.arrow:before {
  content: "\f3d0";
}
.metismenu .plus-times {
  float: right;
}
*[dir="rtl"] .metismenu .plus-times {
  float: left;
}
.metismenu .fa.plus-times:before {
  content: "\f067";
}
.metismenu .active > a > .fa.plus-times {
  -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
       -o-transform: rotate(45deg);
          transform: rotate(45deg);
}
.metismenu .plus-minus {
  float: right;
}
*[dir="rtl"] .metismenu .plus-minus {
  float: left;
}
.metismenu .fa.plus-minus:before {
  content: "\f067";
}
.metismenu .active > a > .fa.plus-minus:before {
  content: "\f068";
}
.metismenu .collapse {
  display: none;
}
.metismenu .collapse.in {
  display: block;
}
.metismenu .collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition-timing-function: ease;
       -o-transition-timing-function: ease;
          transition-timing-function: ease;
  -webkit-transition-duration: .35s;
       -o-transition-duration: .35s;
          transition-duration: .35s;
  -webkit-transition-property: height, visibility;
  -o-transition-property: height, visibility;
  transition-property: height, visibility;
}

.metismenu .has-arrow {
  position: relative;
}

.metismenu .has-arrow::after {
  position: absolute;
  content: '';
  width: .5em;
  height: .5em;
  border-width: 1px 0 0 1px;
  border-style: solid;
  border-color: initial;
  right: 1em;
  -webkit-transform: rotate(-45deg) translate(0, -50%);
      -ms-transform: rotate(-45deg) translate(0, -50%);
       -o-transform: rotate(-45deg) translate(0, -50%);
          transform: rotate(-45deg) translate(0, -50%);
  -webkit-transform-origin: top;
      -ms-transform-origin: top;
       -o-transform-origin: top;
          transform-origin: top;
  top: 50%;
  -webkit-transition: all .3s ease-out;
  -o-transition: all .3s ease-out;
  transition: all .3s ease-out;
}

*[dir="rtl"] .metismenu .has-arrow::after {
  right: auto;
  left: 1em;
  -webkit-transform: rotate(135deg) translate(0, -50%);
      -ms-transform: rotate(135deg) translate(0, -50%);
       -o-transform: rotate(135deg) translate(0, -50%);
          transform: rotate(135deg) translate(0, -50%);
}

.metismenu .active > .has-arrow::after,
.metismenu .has-arrow[aria-expanded="true"]::after {
  -webkit-transform: rotate(-135deg) translate(0, -50%);
      -ms-transform: rotate(-135deg) translate(0, -50%);
       -o-transform: rotate(-135deg) translate(0, -50%);
          transform: rotate(-135deg) translate(0, -50%);
}

</style>
