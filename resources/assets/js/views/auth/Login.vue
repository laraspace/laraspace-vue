<template>
  <form
    id="loginForm"
    method="post"
    @submit.prevent="validateBeforeSubmit"
  >
    <div :class="{'form-group' : true , 'has-danger': errors.has('email') }">
      <input
        v-validate
        v-model="loginData.email"
        type="email"
        class="form-control form-control-danger"
        placeholder="Enter email"
        name="email"
        data-vv-rules="required|email"
      >
    </div>
    <div :class="{'form-group' : true , 'has-danger': errors.has('password') }">
      <input
        v-validate
        v-model="loginData.password"
        type="password"
        class="form-control form-control-danger"
        placeholder="Enter Password"
        name="password"
        data-vv-rules="required"
      >
    </div>
    <div class="other-actions row">
      <div class="col-sm-6">
        <div class="checkbox">
          <label class="c-input c-checkbox">
            <input
              v-model="loginData.remember"
              type="checkbox"
              name="remember"
            >
            <span class="c-indicator" />
            Remember Me
          </label>
        </div>
      </div>
      <div class="col-sm-6 text-sm-right">
        <a
          href="#"
          class="forgot-link"
        >
          Forgot Password?
        </a>
      </div>
    </div>
    <button class="btn btn-theme btn-full">Login</button>
  </form>
</template>

<script type="text/babel">
import Auth from '../../services/auth'

export default {
  data () {
    return {
      loginData: {
        email: 'admin@laraspace.in',
        password: 'admin@123',
        remember: ''
      }
    }
  },
  methods: {
    validateBeforeSubmit (e) {
      this.$validator.validateAll()

      if (!this.errors.any()) {
        Auth.login(this.loginData).then(() => {
          this.$router.push('/admin/dashboard/basic')
        })
      }
    }
  }
}
</script>
