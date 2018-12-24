<template>
  <div class="template-container">
    <header class="site-header">
      <a href="#" class="brand-main">
        <img
          id="logo-desk"
          src="/assets/img/logo-desk.png"
          alt="Laraspace Logo"
          class="hidden-sm-down"
        >
      </a>
      <ul class="action-list">
        <li class="action-item">
          <router-link to="/admin/dashboard/basic">Admin Dashboard</router-link>
        </li>
      </ul>
    </header>
    <transition
      name="fade"
      mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
