<template>
    <div class="template-container">
        <site-header></site-header>
        <site-sidebar type="basic"></site-sidebar>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <site-footer></site-footer>
    </div>
</template>

<script type="text/babel">

    import SiteHeader from './partials/SiteHeader.vue'
    import SiteFooter from './partials/SiteFooter.vue'
    import SiteSidebar from './partials/SiteSidebar.vue'

    import Layout from '../../helpers/layout'

    export default {
        data() {
            return {
                'header': 'header'
            }
        },
        components: {
            SiteHeader, SiteSidebar, SiteFooter
        },
        mounted() {
            Layout.set('layout-default');
        }
    }
</script>