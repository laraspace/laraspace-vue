<template>
    <div class="template-container">
        <site-header></site-header>
        <site-header-bottom></site-header-bottom>
        <router-view></router-view>
        <site-footer></site-footer>
    </div>
</template>

<script type="text/babel">

    import SiteHeader from './partials/SiteHeader.vue'
    import SiteFooter from './partials/SiteFooter.vue'
    import SiteHeaderBottom from './partials/SiteHeaderBottom.vue'

    export default {
        data() {
            return {
                'header' : 'header'
            }
        },
        components : {
            SiteHeader , SiteHeaderBottom , SiteFooter
        },
        methods : {
            setLayoutClasses(){
                let body = $('body');
                body.removeClass();
                body.addClass('layout-horizontal')
            }
        },
        mounted() {
            this.setLayoutClasses()
        }
    }
</script>