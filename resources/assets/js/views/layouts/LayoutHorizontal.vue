<template>
  <div class="template-container">
    <site-header/>
    <site-header-bottom/>
    <router-view/>
    <site-footer/>
  </div>
</template>

<script type="text/babel">
import SiteHeader from './partials/SiteHeader.vue'
import SiteFooter from './partials/SiteFooter.vue'
import SiteHeaderBottom from './partials/SiteHeaderBottom.vue'
import Layout from '../../helpers/layout'
export default {
  components: {
    SiteHeader,
    SiteHeaderBottom,
    SiteFooter
  },
  data () {
    return {
      header: 'header'
    }
  },
  mounted () {
    Layout.set('layout-horizontal')
  }
}
</script>
