<template>
    <div class="sidebar-left" id="mobile-nav">
        <div class="sidebar-body scroll-pane">
            <ul class="metismenu side-nav" id="menu">
                <li :class="{ active : isActive('/dashboard') }">
                    <a href="#" aria-expanded="true"><i class="fa fa-dashboard"></i> Dashboard <span class="fa arrow fa-fw"></span></a>
                    <ul aria-expanded="true">
                        <router-link to="/dashboard/basic" tag="li"><a>Basic</a></router-link>
                        <router-link to="/dashboard/ecommerce" tag="li"><a>Ecommerce</a></router-link>
                        <router-link to="/dashboard/finance" tag="li"><a>Finance</a></router-link>
                    </ul>
                </li>
                <li :class="{ active : isActive('/layouts') }">
                    <a href="#" aria-expanded="true"><i class="fa fa-th-large"></i> Layouts <span class="fa arrow fa-fw"></span></a>
                    <ul aria-expanded="true">
                        <router-link to="/layouts/sidebar" tag="li"><a>Sidebar</a></router-link>
                        <router-link to="/layouts/horizontal" tag="li"><a>Horizontal</a></router-link>
                        <router-link to="/layouts/icon-sidebar" tag="li"><a>Icon Sidebar</a></router-link>
                    </ul>
                </li>
                <li :class="{ active : isActive('/basic-ui') }">
                    <a href="#" aria-expanded="true"><i class="fa fa-star"></i> Basic UI <span class="fa arrow fa-fw"></span></a>
                    <ul aria-expanded="true">
                        <router-link to="/basic-ui/buttons" tag="li"><a>Buttons</a></router-link>
                        <router-link to="/basic-ui/cards" tag="li"><a>Cards</a></router-link>
                        <router-link to="/basic-ui/tabs" tag="li"><a>Tabs &amp; Accordians</a></router-link>
                        <router-link to="/basic-ui/typography" tag="li"><a>Typography</a></router-link>
                        <router-link to="/basic-ui/tables" tag="li"><a>Tables</a></router-link>
                    </ul>
                </li>
                <li :class="{ active: isActive('/components') }">
                    <a href="#" aria-expanded="true"><i class="fa fa-puzzle-piece"></i> Components <span class="fa arrow fa-fw"></span></a>
                    <ul aria-expanded="true">
                        <router-link to="/components/datatables" tag="li"><a>Jquery Datatables</a></router-link>
                        <router-link to="/components/notifications" tag="li"><a>Notifications</a></router-link>
                        <router-link to="/components/graphs" tag="li"><a>Graphs</a></router-link>
                    </ul>
                </li>
                <li :class="{ active: isActive('/forms') }">
                    <a href="#" aria-expanded="true"><i class="fa fa-rocket"></i> Forms <span class="fa arrow fa-fw"></span></a>
                    <ul aria-expanded="true">
                        <router-link to="/forms/general" tag="li"><a>General Elements</a></router-link>
                        <router-link to="/forms/advanced" tag="li"><a>Advanced Elements</a></router-link>
                        <router-link to="/forms/layouts" tag="li"><a>Form Layouts</a></router-link>
                        <router-link to="/forms/validation" tag="li"><a>Form Validation</a></router-link>
                        <router-link to="/forms/editors" tag="li"><a>Editors</a></router-link>
                        <router-link to="/forms/vee" tag="li"><a>Vee Validate</a></router-link>
                    </ul>
                </li>
                <!--<li :class="{ active: isActive('/admin/pages') }">-->
                    <!--<a href="#" aria-expanded="true"><i class="fa fa-th-large"></i> Pages <span class="fa arrow fa-fw"></span></a>-->
                    <!--<ul aria-expanded="true">-->
                        <!--<router-link :to="'/admin/pages/login'" tag="li"><a>Login</a></router-link>-->
                        <!--<router-link :to="'/admin/pages/register'" tag="li"><a>Register</a></router-link>-->
                        <!--<router-link :to="'/admin/pages/404'" tag="li"><a>404 Page</a></router-link>-->
                    <!--</ul>-->
                <!--</li>-->
                <li :class="{ active: isActive('/admin/settings') }">
                    <router-link to="/settings" tag="li"><a><i class="fa fa-cogs"></i> Settings </a></router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/babel">

    export default {
        data() {
            return {
                'sidebar' : 'sidebar'
            }
        },
        mounted(){
            Plugin.initPlugins(['MetisMenu'])
        },
        methods : {
            initPlugins(){
                $(".scroll-pane").mCustomScrollbar({theme:"minimal-dark"});
            },
            isActive(url){
                return (this.$route.path.indexOf(url) > -1)
            }
        }

    }
</script>