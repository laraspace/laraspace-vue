<template>
  <div
    class="sidebar-left">
    <div
      class="sidebar-body scroll-pane">
      <v-items
        :routers="[{
          title: '/admin/dashboard/basic',
          to: 'Basic'},
          '/admin/dashboard/ecommerce',
          'Ecommerce',
          '/admin/dashboard/finance',
          'Finance'
        ]"
        title="Dashbord"
        icon="icon-fa icon-fa-dashboard"/>
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
