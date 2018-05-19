<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Vee Validation</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Forms</a></li>
        <li class="breadcrumb-item active">Vee Validation</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Basic Validation
          <a
            class="source-link"
            href="http://vee-validate.logaretm.com/#basic-example"
            target="_blank"
          >
            source
          </a>
        </h6>
      </div>
      <div class="card-body">
        <div :class="{'form-group' : true }">
          <label>Name </label>
          <input
            v-validate
            v-model="name"
            :class="['form-control', {'is-invalid': errors.has('name') }]"
            data-vv-rules="required"
            name="name"
            type="text"
          >
          <div v-show="errors.has('name')" class="invalid-feedback">
            {{ errors.first('name') }}
          </div>
        </div>
        <div :class="{'form-group' : true }">
          <label>Email Address</label>
          <input
            v-validate
            v-model="email"
            :class="['form-control', {'is-invalid': errors.has('email') }]"
            data-vv-rules="required|email"
            name="email"
            type="text"
          >
          <div v-show="errors.has('email')" class="invalid-feedback">
            {{ errors.first('email') }}
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Form Validation
          <a
            class="source-link"
            href="http://vee-validate.logaretm.com/examples#validate-form"
            target="_blank"
          >
            source
          </a>
        </h6>
      </div>
      <div class="card-body">
        <form @submit.prevent="validateBeforeSubmit">
          <div :class="{'form-group' : true}">
            <label>Name </label>
            <input
              v-validate.initial="name"
              v-model="name"
              :class="['form-control', {'is-invalid': errors.has('name') }]"
              data-vv-rules="required"
              name="name"
              type="text"
            >
            <div v-show="errors.has('name')" class="invalid-feedback">
              {{ errors.first('name') }}
            </div>
          </div>
          <div :class="{'form-group' : true }">
            <label>Email Address</label>
            <input
              v-validate.initial="email"
              v-model="email"
              :class="['form-control', {'is-invalid': errors.has('email') }]"
              data-vv-rules="required|email"
              name="email"
              type="text"
            >
            <div v-show="errors.has('email')" class="invalid-feedback">
              {{ errors.first('email') }}
            </div>
          </div>
          <div :class="{'form-group' : true }">
            <label>Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              name="password"
            >
          </div>
          <label>Confirm Password</label>
          <input
            v-validate="'required|confirmed:password'"
            :class="{'is-invalid': errors.has('password_confirmation') }"
            data-vv-as="password"
            name="password_confirmation"
            data-vv-rules="required"
            class="form-control"
            type="password"
          >
          <div v-show="errors.has('password_confirmation')" class="invalid-feedback">
            {{ errors.first('password_confirmation') }}
          </div>
          <div :class="{'form-group' : true }">
            <div class="checkbox checkbox-full">
              <label>
                <input
                  v-validate.initial="terms"
                  type="checkbox"
                  name="terms"
                  data-vv-rules="required"
                >
                I Accept Terms & Conditions
                <div v-show="errors.has('terms')" class="invalid-feedback">
                  {{ errors.first('terms') }}
                </div>
              </label>
            </div>
          </div>
          <button class="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
import 'vee-validate/dist/vee-validate'
export default {
  data () {
    return {
      name: '',
      email1: '',
      email: '',
      password: '',
      cnfpassword: '',
      terms: false
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll().then((result) => {
        if (result) {
          // eslint-disable-next-line
          alert('Form Submitted!')
          return
        }
        alert('Correct them errors!')
      })
    }
  }
}
</script>
