<template>
    <div class="sidebar-left " id="mobile-nav">
        <div class="sidebar-body scroll-pane">
            <ul class="side-nav">
                <li class="has-child">
                    <a href="#"><i class="fa fa-dashboard"></i> Dashboard</a>
                    <ul class="sub-menu collapse">
                        <router-link :to="'/dashboard/basic'" tag="li"><a>Basic</a></router-link>
                        <router-link :to="'/dashboard/ecommerce'" tag="li"><a>Ecommerce</a></router-link>
                        <router-link :to="'/dashboard/finance'" tag="li"><a>Finance</a></router-link>
                    </ul>
                </li>
                <li class="has-child">
                    <a href="#"><i class="fa fa-th-large"></i> Layouts</a>
                    <ul class="sub-menu collapse">
                        <li class="active"><a href="sidebar.html">Sidebar</a></li>
                        <li class=""><a href="icon-sidebar.html">Icon Sidebar</a></li>
                        <li class=""><a href="horizontal-menu.html">Horizontal Menu</a></li>
                    </ul>
                </li>
                <li class="has-child">
                    <a href="#"><i class="fa fa-star"></i> Basic UI</a>
                    <ul class="sub-menu collapse">
                        <li class=""><a href="../basic-ui/buttons.html">Buttons</a></li>
                        <li class=""><a href="../basic-ui/cards.html">Cards</a></li>
                        <li class=""><a href="../basic-ui/tabs.html">Tabs &amp; Accordians</a></li>
                        <li class=""><a href="../basic-ui/typography.html">Typography</a></li>
                        <li class=""><a href="../basic-ui/tables.html">Tables</a></li>
                    </ul>
                </li>
                <li class="has-child">
                    <a href="#"><i class="fa fa-puzzle-piece"></i> Components</a>
                    <ul class="sub-menu collapse">
                        <li class=""><a href="../components/datatables.html">Datatables</a></li>
                        <li class=""><a href="../components/notifications.html">Notifications</a></li>
                        <li class=""><a href="../components/graphs.html">Graphs</a></li>
                    </ul>
                </li>
                <li class="has-child">
                    <a href="#"><i class="fa fa-rocket"></i> Forms</a>
                    <ul class="sub-menu collapse">
                        <li class=""><a href="../forms/general.html">General Elements</a></li>
                        <li class=""><a href="../forms/advanced.html">Advanced Elements</a></li>
                        <li class=""><a href="../forms/layouts.html">Form Layouts</a></li>
                        <li class=""><a href="../forms/validation.html">Form Validation</a></li>
                        <li class=""><a href="../forms/editors.html">Editors</a></li>
                    </ul>
                </li>
                <li class="  has-child ">
                    <a href="#"><i class="fa fa-file"></i> Pages</a>
                    <ul class="sub-menu collapse">
                        <li class=""><a href="../../login.html">Login</a></li>
                        <li class=""><a href="../../register.html">Register</a></li>
                        <li class=""><a href="../404.html">404 Page</a></li>
                    </ul>
                </li>
                <li class="  has-child ">
                    <a href="#"><i class="fa fa-user"></i> Users</a>
                    <ul class="sub-menu collapse">
                        <li class=""><a href="../users.html">All Users</a></li>
                        <li class=""><a href="../users/profile.html">User Profile</a></li>
                    </ul>
                </li>
                <li class=" ">
                    <a href="../todos.html"><i class="fa fa-check"></i> Todo App</a>
                </li>
                <li class=" ">
                    <a href="../settings.html"><i class="fa fa-cogs"></i> Settings</a>
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
          console.log(this.$route);
        },

        methods : {

        }

    }
</script>