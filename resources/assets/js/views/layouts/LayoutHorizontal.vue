<template>
  <div class="template-container">
    <site-header/>
    <site-header-bottom/>
    <router-view/>
    <site-footer/>
  </div>
</template>

<script type="text/babel">
import SiteHeader from './partials/TheSiteHeader.vue'
import SiteFooter from './partials/TheSiteFooter.vue'
import SiteHeaderBottom from './partials/TheSiteHeaderBottom.vue'
// import Layout from '../../helpers/layout'
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
  beforeRouteUpdate (to, from, next) {
    this.$parent.$el.parentElement.classList.remove('layout-horizontal')
  },
  watch: {
    '$route' (to, from) {
      this.$parent.$el.parentElement.classList.remove('layout-horizontal')
    }
  },
  mounted () {
    // Layout.set('layout-horizontal')
    this.$nextTick(function () {
      this.$parent.$el.parentElement.classList.add('layout-horizontal')
    })
  }
}
</script>
