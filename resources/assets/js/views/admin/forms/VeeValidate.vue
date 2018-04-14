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
        <h6>Basic Validation <a
          class="source-link"
          href="http://vee-validate.logaretm.com/#basic-example"
          target="_blank">source</a>
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
            type="text">
          <div
            v-show="errors.has('name')"
            class="invalid-feedback">
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
            type="text">
          <div
            v-show="errors.has('email')"
            class="invalid-feedback">
            {{ errors.first('email') }}
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Form Validation <a
          class="source-link"
          href="http://vee-validate.logaretm.com/examples#validate-form"
          target="_blank">source</a>
        </h6>
      </div>
      <div class="card-body">
        <form @submit="validateBeforeSubmit">
          <div :class="{'form-group' : true}">
            <label>Name </label>
            <input
              v-validate.initial="name"
              v-model="name"
              :class="['form-control', {'is-invalid': errors.has('name') }]"
              data-vv-rules="required"
              name="name"
              type="text">
            <div
              v-show="errors.has('name')"
              class="invalid-feedback">
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
              type="text">
            <div
              v-show="errors.has('email')"
              class="invalid-feedback">
              {{ errors.first('email') }}
            </div>
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              name="password">
          </div>
          <div class="form-group">
            <label>Retype Password</label>
            <input
              type="password"
              name="password_confirmation"
              class="form-control">
          </div>
          <div :class="{'form-group' : true }">
            <div class="checkbox checkbox-full">
              <label>
                <input
                  v-validate.initial="terms"
                  type="checkbox"
                  name="terms"
                  data-vv-rules="required">
                I Accept Terms & Conditions
              </label>
            </div>
          </div>
          <button class="btn btn-primary">Submit</button>
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
      email: '',
      name: '',
      terms: false
    }
  },
  methods: {
    validateBeforeSubmit (e) {
      this.$validator.validateAll()

      if (this.errors.any()) {
        e.preventDefault()
      }
    }
  }
}
</script>
