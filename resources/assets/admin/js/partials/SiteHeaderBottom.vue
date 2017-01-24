<template>
    <div class="header-bottom">
        <ul class="header-nav">
            <li :class="{ active: isActive('/dashboard') }">
                <a href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-dashboard"></i> Dashboard</a>
                <div class="dropdown-menu">
                    <router-link to="/dashboard/basic" class="dropdown-item">Basic</router-link>
                    <router-link to="/dashboard/ecommerce" class="dropdown-item">Ecommerce</router-link>
                    <router-link to="/dashboard/finance" class="dropdown-item">Finance</router-link>
                </div>
            </li>
            <li :class="{ active: isActive('/layouts') }">
                <a href="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-th-large"></i> Layouts</a>
                <div class="dropdown-menu">
                    <router-link to="/layouts/sidebar" class="dropdown-item">Sidebar</router-link>
                    <router-link to="/layouts/horizontal" class="dropdown-item">Horizontal</router-link>
                    <router-link to="/layouts/icon-sidebar" class="dropdown-item">Icon Sidebar</router-link>
                </div>
            </li>
            <li :class="{ active: isActive('/settings') }">
                <router-link to="/settings"><i class="fa fa-cogs"></i> Settings</router-link>
            </li>
        </ul>
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
            $("#menu").metisMenu();
        },

        methods : {
            isActive(url){
                return (this.$route.path.indexOf(url) > -1)
            }
        }

    }
</script>