<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Form Validation</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Forms</a></li>
        <li class="breadcrumb-item active">Form Validation</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Jquery Validate
          <a
            class="source-link"
            href="https://jqueryvalidation.org/"
            target="_blank"
          >
            source
          </a>
        </h6>
      </div>
      <div class="card-body">
        <form id="validateForm" novalidate>
          <div class="form-group">
            <label>Email address</label>
            <input
              type="email"
              class="form-control"
              name="email"
              placeholder="Email"
            >
          </div>
          <div class="form-group">
            <label>Username</label>
            <input
              type="text"
              class="form-control"
              name="username"
              placeholder="Username"
            >
          </div>
          <div class="form-group">
            <label>Password</label>
            <input
              id="password"
              type="password"
              class="form-control"
              name="password"
              placeholder="Password"
            >
          </div>
          <div class="form-group">
            <label>Retype Password</label>
            <input
              type="password"
              name="password_confirmation"
              class="form-control"
              placeholder="Password"
            >
          </div>
          <div class="form-group">
            <div class="checkbox checkbox-full">
              <label>
                <input
                  type="checkbox"
                  value=""
                  name="terms"
                >
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
export default {
  mounted () {
    this.handleValidation()
  },
  methods: {
    handleValidation () {
      // for more info visit the official plugin documentation:
      // http://docs.jquery.com/Plugins/Validation
      let form = document.getElementById('validateForm')

      form.validate({
        errorElement: 'span', // default input error message container
        errorClass: 'help-block help-block-error', // default input error message class
        focusInvalid: false, // do not focus the last invalid input
        ignore: '', // validate all fields including form hidden input
        rules: {
          password: {
            minlength: 2,
            required: true
          },
          password_confirmation: {
            equalTo: '#password',
            required: true
          },
          email: {
            required: true,
            email: true
          },
          username: {
            required: true
          },
          terms: {
            required: true
          }
        },

        highlight: function (element) {
          // hightlight error inputs
          document.element
            .closest('.form-group .form-control')
            .addClass('is-invalid') // set danger class to the control group
        },

        unhighlight: function (element) {
          // revert the change done by hightlight
          document.element
            .closest('.form-group .form-control')
            .removeClass('is-invalid') // set danger class to the control group
            .closest('.form-group .form-control')
            .addClass('is-valid') // set danger class to the control group
        },
        errorPlacement: function (error, element) {
          if (
            element.parent('.input-group').length ||
            element.prop('type') === 'checkbox' ||
            element.prop('type') === 'radio'
          ) {
            error.insertAfter(element.parent())
          } else {
            error.insertAfter(element)
          }
        },
        success: function (label) {
          label.closest('.form-group .form-control').removeClass('is-invalid') // set success class to the control group
        }
      })
    }
  }
}
</script>
