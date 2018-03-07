<template>
  <div
    class="sidebar-left">
    <div
      class="sidebar-body scroll-pane">
      <v-items
        title="Dashbord">  
        <v-item></v-item>
      </v-items>
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
