<template>
    <div class="template-container">
        <header class="site-header">
            <a href="#" class="brand-main">
                <img src="/assets/img/logo-desk.png" id="logo-desk" alt="Laraspace Logo" class="hidden-sm-down">
            </a>

            <ul class="action-list">
                <li>
                    <a href="/admin">Admin Dashboard</a>
                </li>
            </ul>
        </header>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>