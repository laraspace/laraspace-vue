<template>
  <form
    id="registerForm"
    action=""
    method="post"
  >
    {{ csrf_field() }}
    <div class="form-group">
      <input
        type="email"
        class="form-control form-control-danger"
        placeholder="Enter email"
        name="email"
      >
    </div>
    <div class="form-group">
      <input
        id="password"
        type="password"
        class="form-control form-control-danger"
        placeholder="Enter Password"
        name="password"
      >
    </div>
    <div class="form-group">
      <input
        type="password"
        class="form-control form-control-danger"
        placeholder="Retype Password"
        name="password_confirmation"
      >
    </div>
    <button class="btn btn-login btn-full">Register</button>
  </form>
</template>
<script type="text/babel">
import Auth from '../../services/auth'
import 'vee-validate/dist/vee-validate'

export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    }
  },
  methods: {
    validateBeforeSubmit (e) {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!')
        }
      })
    }
  }
}
</script>
