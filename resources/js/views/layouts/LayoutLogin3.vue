<template>
  <div class="login-page login-3">
    <div class="site-wrapper">
      <div class="login-box">
        <div class="box-wrapper">
          <div class="logo-main">
            <a href="/admin">
              <img src="/assets/img/logo-login.png" alt="Laraspace Logo">
            </a>
          </div>
          <router-view/>
          <div class="page-copyright">
            <p>Powered by
              <a href="https://www.google.com/" target="_blank">chrome</a>
            </p>
            <p>Admin @ 2022</p>
          </div>
        </div>
      </div>
      <div class="content-box">
        <h1>
          <b>Headstart</b> your project in <br>
          Just 5 minutes.
        </h1>
      </div>
    </div>
  </div>
</template>
