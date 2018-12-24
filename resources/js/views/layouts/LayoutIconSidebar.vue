<template>
  <div class="template-container">
    <site-header/>
    <site-sidebar type="icon"/>
    <router-view/>
    <site-footer/>
  </div>
</template>

<script type="text/babel">
import SiteHeader from './partials/TheSiteHeader.vue'
import SiteFooter from './partials/TheSiteFooter.vue'
import SiteSidebar from './partials/TheSiteSidebar.vue'

export default {
  components: {
    SiteHeader,
    SiteSidebar,
    SiteFooter
  },
  mounted () {
    this.$utils.setLayout('icon-sidebar')
  }
}
</script>
