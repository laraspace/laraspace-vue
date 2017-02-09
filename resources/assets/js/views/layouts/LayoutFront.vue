<template>
    <div class="template-container">
        <header class="site-header">
            <a href="#" class="brand-main">
                <img src="/assets/img/logo-desk.png" id="logo-desk" alt="Laraspace Logo" class="hidden-sm-down">
            </a>

            <ul class="action-list">
                <li>
                    <router-link to="/admin/dashboard/basic">Admin Dashboard</router-link>
                </li>
            </ul>
        </header>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>