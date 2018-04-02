<template>
  <div
    class="sidebar-left">
    <div
      class="sidebar-body scroll-pane">
      <div class="side-nav vue-menu">
        <v-collapse active-url="admin/dashboard">
          <template slot="title">
            <a href="#">
               <i class="icon-fa icon-fa-dashboard"/>Dashboard
               <span class="icon-fa arrow icon-fa-fw"/>
            </a>
          </template>
					<v-collapse-item>
            <template slot="title">
             
            </template>
					</v-collapse-item>
				</v-collapse>
        <v-collapse active-url="/admin/basic-ui">
          <template slot="title">
            <a href="#">
               <i class="icon-fa icon-fa-star"/>Basic UI
               <span class="icon-fa arrow icon-fa-fw"/>
            </a>
          </template>
					<v-collapse-item>
            <template slot="title">
             
            </template>
					</v-collapse-item>
				</v-collapse>
        <v-collapse active-url="/admin/components">
          <template slot="title">
            <a href="#">
               <i class="icon-fa icon-fa-puzzle-piece"/>Components
               <span class="icon-fa arrow icon-fa-fw"/>
            </a>
          </template>
					<v-collapse-item>
            <template slot="title">
             
            </template>
					</v-collapse-item>
				</v-collapse>
        <v-collapse active-url="/admin/chart">
          <template slot="title">
            <a href="#">
               <i class="icon-fa icon-fa-bar-chart"/>Charts
               <span class="icon-fa arrow icon-fa-fw"/>
            </a>
          </template>
					<v-collapse-item>
            <template slot="title">
             
            </template>
					</v-collapse-item>
				</v-collapse>
        <v-collapse active-url="admin/dashboard">
          <template slot="title">
            <a href="#">
               <i class="icon-fa icon-fa-dashboard"/>Dashboard
               <span class="icon-fa arrow icon-fa-fw"/>
            </a>
          </template>
					<v-collapse-item>
            <template slot="title">
             
            </template>
					</v-collapse-item>
				</v-collapse>
        <v-collapse active-url="admin/dashboard">
          <template slot="title">
            <a href="#">
               <i class="icon-fa icon-fa-dashboard"/>Dashboard
               <span class="icon-fa arrow icon-fa-fw"/>
            </a>
          </template>
					<v-collapse-item>
            <template slot="title">
             
            </template>
					</v-collapse-item>
				</v-collapse>
        <v-collapse active-url="admin/dashboard">
          <template slot="title">
            <a href="#">
               <i class="icon-fa icon-fa-dashboard"/>Dashboard
               <span class="icon-fa arrow icon-fa-fw"/>
            </a>
          </template>
					<v-collapse-item>
            <template slot="title">
             
            </template>
					</v-collapse-item>
				</v-collapse>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">

import VCollapse from '../../../components/VCollapse'
import VCollapseItem from '../../../components/VCollapseItem'

export default {
  components: {
    VCollapse,
    VCollapseItem
  },
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
<style>
.vue-menu {
      list-style: none;
    margin: 0;
    padding: 0;
}
.side-nav .collapse-group {
    background-color: #3b3b3b;
    padding: 0;
    margin-top: 0;
}
.vue-menu .collapse-group .collapse-group-item{
    display: block;
}
.vue-menu .collapse-group .collapse-group-item a {
    color: #fff;
    display: block;
    font-size: 14px;
    padding: 12px 12px 12px 30px;
    position: relative;
    text-decoration: none;
}
.vue-menu .collapse-group .collapse-group-item.active > a {
    color: #ffde00;
}
.vue-menu .collapse-group .collapse-group-item i {
    width: 30px;
}
.vue-menu .icon-fa.arrow:before {
    content: "\f104";
}

.vue-menu .active > a > .icon-fa.arrow:before {
    content: "\f107";
}
.vue-menu .collapse-group .collapse-group-item > a > .icon-fa.arrow{
    position: absolute;
    right: 21px;
}

</style>
