<template>
  <div
    class="sidebar-left">
    <div
      class="sidebar-body scroll-pane">
      <v-items
        :routers="[
          {
            to:'/admin/dashboard/basic',
            title:'Basic'
          },
          {
            to:'/admin/dashboard/ecommerce',
            title:'Ecommerce'
          },
          {
            to:'/admin/dashboard/finance',
            title:'Finance'
          }]"
        title="Dashbord"
        icon="icon-fa icon-fa-dashboard"/>
      <v-items
        :routers="[
          {
            to:'/admin/layouts/sidebar',
            title:'Sidebar'
          },
          {
            to:'/admin/layouts/horizontal',
            title:'Horizontal'
          },
          {
            to:'/admin/layouts/icons-sidebare',
            title:'Icon Sidebar'
          }]"
        title="Layouts"
        icon="icon-fa icon-fa-th-large"/>
      <v-items
        :routers="[
          {
            to:'/admin/basic-ui/buttons',
            title:'Buttons'
          },
          {
            to:'/admin/basic-ui/cards',
            title:'Cards'
          },
          {
            to:'/admin/basic-ui/tabs',
            title:'Tabs &amp; Accordians'
          },
          {
            to:'/admin/basic-ui/typography',
            title:'Typography'
          },
          {
            to:'/admin/basic-ui/tables',
            title:'Tables'
          },
          {
            to:'/admin/basic-ui/modals',
            title:'Modals'
          },
          {
            to:'/admin/basic-ui/progress-bars',
            title:'Progress Bar'
          }]"
        title="Basic UI"
        icon="icon-fa icon-fa-th-large"/>
      <v-items
        :routers="[
          {
            to:'/admin/components/calendar',
            title:'Calendar'
          },
          {
            to:'/admin/components/mail-box',
            title:'MailBox'
          },
          {
            to:'/admin/components/datatables',
            title:'Jquery Datatables'
          },
          {
            to:'/admin/components/image-cropper',
            title:'ImageCropper'
          },
          {
            to:'/admin/components/image-zoom',
            title:'ImageZoom'
          },
          {
            to:'/admin/components/nestable-list',
            title:'Nestable List'
          },
          {
            to:'/admin/components/nestable-tree',
            title:'Nestable Tree'
          },
          {
            to:'/admin/components/notifications',
            title:'Notifications'
          },
          {
            to:'/admin/components/sweet-modals',
            title:'Sweet Modals'
          }]"
        title="Components"
        icon="icon-fa icon-fa-th-large"/>
    </div>
  </div>
</template>

<script type="text/babel">

import VItems from '../../../components/v-items'

export default {
  components: {
    VItems
  },
  data () {
    return {
      sidebar: 'sidebar'
    }
  },
  mounted () {
  },
  methods: {
    initPlugins () {
      $('.scroll-pane').mCustomScrollbar({ theme: 'minimal-dark' })
    }
  }
}
</script>
