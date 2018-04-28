<template>
  <div class="login-page login-1">
    <div class="login-wrapper">
      <div class="login-box">
        <div class="logo-main">
          <a href="/admin"><img
            src="/assets/img/logo-large.png"
            alt="Laraspace Logo"></a>
        </div>
        <router-view/>
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
import Layout from '../../helpers/layout'
export default {
  mounted () {
    this.setLayoutClasses()
  },
  destroyed () {
    Layout.resetLogin('login-1')
  },
  methods: {
    setLayoutClasses () {
      Layout.setLogin('login-1')
    }
  }
}
</script>
