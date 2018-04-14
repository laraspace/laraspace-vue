<template>
  <div class="login-page login-2">
    <div class="login-wrapper">
      <div class="login-box">
        <div class="logo-main">
          <a href="/admin"><img
            src="/assets/img/logo-large.png"
            alt="Laraspace Logo"></a>
        </div>
        <router-view></router-view>
        <div class="page-copyright">
          <p>Powered by <a
            href="http://bytefury.com"
            target="_blank">Bytefury</a></p>
          <p>Laraspace © 2016</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  watch: {
    $route: 'onRouteChange'
  }
  // mounted () {
  //   this.setLayoutClasses()
  // },
  // methods: {
  //   setLayoutClasses () {
  //     let body = $('body')
  //     body.removeClass()
  //     body.addClass('login-page login-2')
  //   }
  // },
  // onRouteChange () {
  //   $('body').removeClass('login-page')
  // }
}
</script>
