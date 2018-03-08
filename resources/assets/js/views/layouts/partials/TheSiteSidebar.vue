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
          }
            to:'/admin/dashboard/finance',
            title:'Finance'
          }]"
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
