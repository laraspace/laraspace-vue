<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Vuelidate Validation</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Forms</a></li>
        <li class="breadcrumb-item active">Vuelidate</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>
          Basic Form
          <a
            class="source-link"
            href="https://monterail.github.io/vuelidate/#sub-basic-usage"
            target="_blank"
          >
            source
          </a>
        </h6>
      </div>
      <div class="card-body">
        <div class="form-group">
          <label>Name</label>
          <input
            :class="{ 'is-invalid': $v.name.$error }"
            v-model.trim="name"
            class="form-control"
            @input="$v.name.$touch()"
          >
          <div v-if="$v.name.$error">
            <span v-if="!$v.name.required" class="help-block help-block-error">
              Field is required
            </span>
            <span v-if="!$v.name.minLength" class="help-block help-block-error">
              Name must have at least {{ $v.name.$params.minLength.min }} letters.
            </span>
          </div>
        </div>
        <pre class="pre-format">name: {{ $v.name }}</pre>
        <div class="form-group">
          <label>Age</label>
          <input
            :class="{ 'is-invalid': $v.age.$error }"
            v-model.trim="age"
            class="form-control"
            @blur="$v.age.$touch()"
          >
          <div v-if="$v.age.$error">
            <span v-if="!$v.age.between" class="help-block help-block-error">
              Must be between {{ $v.age.$params.between.min }} and {{ $v.age.$params.between.max }}
            </span>
          </div>
        </div>
        <pre class="pre-format">age: {{ $v.age }}</pre>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Contextified validators
          <a
            class="source-link"
            href="https://monterail.github.io/vuelidate/#sub-contextified-validators"
            target="_blank"
          >
            source
          </a>
        </h6>
      </div>
      <div class="card-body">
        <div class="form-group">
          <label>Password</label>
          <input
            :class="{ 'is-invalid': $v.password.$error }"
            v-model.trim="password"
            class="form-control"
            @input="$v.password.$touch()"
          >
          <div v-if="$v.password.$error">
            <span v-if="!$v.password.required" class="help-block help-block-error">
              Password is required.
            </span>
            <span v-if="!$v.password.minLength" class="help-block help-block-error">
              Password must have at least {{ $v.password.$params.minLength.min }} letters.
            </span>
          </div>
        </div>
        <div class="form-group">
          <label>Repeat password</label>
          <input
            :class="{ 'is-invalid': $v.repeatPassword.$error }"
            v-model.trim="repeatPassword"
            class="form-control"
            @input="$v.repeatPassword.$touch()"
          >
          <div v-if="$v.repeatPassword.$error">
            <span v-if="!$v.repeatPassword.sameAsPassword" class="help-block help-block-error">
              Passwords must be identical.
            </span>
          </div>
        </div>
        <pre class="pre-format">password: {{ $v.password }}repeatPassword: {{ $v.repeatPassword }}</pre>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Asynchronous validation
          <a
            class="source-link"
            href="https://monterail.github.io/vuelidate/#sub-asynchronous-validation"
            target="_blank"
          >
            source
          </a>
        </h6>
      </div>
      <div class="card-body">
        <div class="form-group">
          <label>Email</label>
          <input
            :class="{ 'is-invalid': $v.email.$error, 'form-group--loading': $v.email.$pending }"
            v-model.trim.lazy="email"
            class="form-control"
            @change="$v.email.$touch()"
          >
          <div v-if="$v.email.$error">
            <span v-if="!$v.email.required" class="help-block help-block-error">
              Email is required.
            </span>
            <span v-if="!$v.email.isUnique" class="help-block help-block-error">
              This email is already registered.
            </span>
          </div>
        </div>
        <p>
          The above input validation checks the database in realtime to make sure that user enters a unique email on blur event. You can test with <code>admin@laraspace.in</code>
        </p>
        <pre class="pre-format">email: {{ $v.email }}</pre>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
import { required, sameAs, minLength, between } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      name: '',
      email: '',
      age: 0,
      password: '',
      validate: '',
      repeatPassword: ''
    }
  },
  validations: {
    name: {
      required,
      minLength: minLength(4)
    },
    age: {
      between: between(20, 30)
    },
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    },
    email: {
      required,
      async isUnique (value) {
        // standalone validator ideally should not assume a field is required
        if (value === '') return true

        // simulate async call, fail for all logins with even length

        let response = await window.axios.post('/api/email-exist', { email: value })
        return response.data
      }
    }
  }
}
</script>
