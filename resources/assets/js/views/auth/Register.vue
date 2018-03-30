<template>
  <form
    id="registerForm"
    @submit.prevent="validateBeforeSubmit">
    <div :class="{'form-group' : true }">
       <input
            v-validate="'required|email'"
            :class="{'is-invalid': errors.has('email') }"
            data-vv-rules="required"
            placeholder="Enter Email"
            class="form-control"
            name="email"
            type="email">
            <div
            v-show="errors.has('email')"
            class="invalid-feedback">{{ errors.first('email') }}</div>
          </div>
          <div :class="{'form-group' : true }">
            <input
              :class="{'is-invalid': errors.has('password') }"
              v-validate="'required|min:6'"
              data-vv-rules="requred|password"
              class="form-control"
              placeholder="Enter Password"
              name="password"
              type="password">
            <div
              v-show="errors.has('password')"
              class="invalid-feedback">{{ errors.first('password') }}
            </div>
          </div>
            <div :class="{'form-group' : true }">
            <input
              v-validate="'required|confirmed:password'"
              :class="{'is-invalid': errors.has('password_confirmation') }"
              data-vv-as="password"
              name="password_confirmation"
              placeholder="Retype Password"
              class="form-control"
              type="password">
               <div
              v-show="errors.has('password_confirmation')"
              class="invalid-feedback">{{ errors.first('password_confirmation') }}
            </div>
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
          return
        }
      })
    }
  }
}
</script>
