<template>
  <div class="template-container">
    <site-header></site-header>
    <site-header-bottom></site-header-bottom>
    <router-view></router-view>
    <site-footer></site-footer>
  </div>
</template>

<script type="text/babel">
import SiteHeader from './partials/TheSiteHeader.vue'
import SiteFooter from './partials/TheSiteFooter.vue'
import SiteHeaderBottom from './partials/TheSiteHeaderBottom.vue'
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
