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
            v-model="basic_validation.name"
            :class="['form-control', {'is-invalid': errors.has('basic_validation.name') }]"
            data-vv-rules="required"
            name="basic_validation.name"
            data-vv-as="Name"
            type="text"
          >
          <div v-show="errors.has('basic_validation.name')" class="invalid-feedback">
            {{ errors.first('basic_validation.name') }}
          </div>
        </div>
        <div :class="{'form-group' : true }">
          <label>Email Address</label>
          <input
            v-validate
            v-model="basic_validation.email"
            :class="['form-control', {'is-invalid': errors.has('basic_validation.email') }]"
            data-vv-rules="required|email"
            name="basic_validation.email"
            data-vv-as="Email"
            type="text"
          >
          <div v-show="errors.has('basic_validation.email')" class="invalid-feedback">
            {{ errors.first('basic_validation.email') }}
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
              v-validate.initial="'required'"
              v-model="form_validation.name"
              :class="['form-control', {'is-invalid': errors.has('form_validation.name') }]"
              name="form_validation.name"
              data-vv-as="Name"
              type="text"
            >
            <div v-show="errors.has('form_validation.name')" class="invalid-feedback">
              {{ errors.first('form_validation.name') }}
            </div>
          </div>
          <div :class="{'form-group' : true }">
            <label>Email Address</label>
            <input
              v-validate.initial="'required|email'"
              v-model="form_validation.email"
              :class="['form-control', {'is-invalid': errors.has('form_validation.email') }]"
              name="form_validation.email"
              data-vv-as="Email"
              type="text"
            >
            <div v-show="errors.has('form_validation.email')" class="invalid-feedback">
              {{ errors.first('form_validation.email') }}
            </div>
          </div>
          <div :class="{'form-group' : true }">
            <label>Password</label>
            <input
              v-validate
              id="password"
              v-model="form_validation.password"
              type="password"
              data-vv-rules="required"
              class="form-control"
              name="form_validation.password"
              data-vv-as="Password"
            >
          </div>
          <label>Confirm Password</label>
          <input
            v-validate="'required|confirmed:form_validation.password'"
            v-model="form_validation.cnfpassword"
            :class="{'is-invalid': errors.has('form_validation.password_confirmation') }"
            data-vv-as="Confirm Password"
            name="form_validation.password_confirmation"
            data-vv-rules="required"
            class="form-control"
            type="password"
          >
          <div v-show="errors.has('form_validation.password_confirmation')" class="invalid-feedback">
            {{ errors.first('form_validation.password_confirmation') }}
          </div>
          <div :class="{'form-group' : true }">
            <div class="checkbox checkbox-full">
              <label>
                <input
                  v-validate.initial="'required'"
                  v-model="form_validation.terms"
                  type="checkbox"
                  name="terms"
                  data-vv-rules=""
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

export default {
  data () {
    return {
      basic_validation: {
        name: '',
        email: ''
      },
      form_validation: {
        name: '',
        email: '',
        password: '',
        cnfpassword: '',
        terms: false
      }
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
