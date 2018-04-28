<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Form Wizard</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Forms</a></li>
        <li class="breadcrumb-item active">Form Wizard</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Basic Form Wizard</h6>
      </div>
      <div class="card-body">
        <div class="content ls-wizard">
          <form-wizard
            stepSize="sm"
            title=""
            subtitle=""
            @on-complete="onComplete">
            <tab-content
              title="Step 1"
              icon="1">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>DOB</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control ls-datepicker"
                        value="06/10/2017">
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="icon-fa icon-fa-calendar"/>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Hobbies</label>
                    <select class="form-control ls-select2">
                      <option value="developing">Developing</option>
                      <option value="singing">Singing</option>
                      <option value="reading">Reading</option>
                      <option value="internet-surfing">Internet Surfing</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Occupation</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                </div>
              </div>
            </tab-content>
            <tab-content
              title="Step 2"
              icon="2">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Phone No.</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Password Confirmation</label>
                    <input
                      type="password"
                      class="form-control">
                  </div>
                </div>
              </div>
            </tab-content>
            <tab-content
              title="Step 3"
              icon="3">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Address Line1</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Address Line2</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>State</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Pincode</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                </div>
              </div>
            </tab-content>
            <tab-content
              title="Step 4"
              icon="4">
              <div class="form-group">
                <label>Facebook</label>
                <input
                  type="text"
                  class="form-control">
              </div>
              <div class="form-group">
                <label>Twitter</label>
                <input
                  type="text"
                  class="form-control">
              </div>
              <div class="form-group">
                <label>Google +</label>
                <input
                  type="text"
                  class="form-control">
              </div>
            </tab-content>
          </form-wizard>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Form Wizard with icon</h6>
      </div>
      <div class="card-body">
        <div class="content ls-wizard with-icon">
          <form-wizard
            title=""
            subtitle=""
            stepSize="sm"
            @on-complete="onComplete">
            
            <tab-content
              title="Step 1"
              icon="icon-fa icon-fa-home">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>DOB</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control ls-datepicker"
                        value="06/10/2017">
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="icon-fa icon-fa-calendar"/>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Hobbies</label>
                    <select class="form-control ls-select2">
                      <option value="developing">Developing</option>
                      <option value="singing">Singing</option>
                      <option value="reading">Reading</option>
                      <option value="internet-surfing">Internet Surfing</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Occupation</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                </div>
              </div>
            </tab-content>
            <tab-content
              title="Step 2"
              icon="icon-fa icon-fa-key">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Phone No.</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Password Confirmation</label>
                    <input
                      type="password"
                      class="form-control">
                  </div>
                </div>
              </div>
            </tab-content>
            <tab-content
              title="Step 3"
              icon="icon-fa icon-fa-map-marker">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Address Line1</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Address Line2</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>State</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Pincode</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                </div>
              </div>
            </tab-content>
            <tab-content
              title="Step 4"
              icon="icon-fa icon-fa-twitter">
              <div class="form-group">
                <label>Facebook</label>
                <input
                  type="text"
                  class="form-control">
              </div>
              <div class="form-group">
                <label>Twitter</label>
                <input
                  type="text"
                  class="form-control">
              </div>
              <div class="form-group">
                <label>Google +</label>
                <input
                  type="text"
                  class="form-control">
              </div>
            </tab-content>
          </form-wizard>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Form Wizard validation</h6>
      </div>
      <div class="card-body">
        <div class="content ls-wizard with-icon validation">
          <form-wizard
            stepSize="sm"
             title=""
            subtitle=""
            error-color="#ff4949"
            @on-complete="onComplete">
            <tab-content
              title="Step 1"
              icon="icon-fa icon-fa-home"
              :before-change="validateFirstStep">
              <form :rules="rules" ref="ruleForm">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label>First Name</label>
                      <input
                        type="text"
                        class="form-control">
                    </div>
                    <div class="form-group">
                      <label>Last Name</label>
                      <input
                        type="text"
                        class="form-control">
                    </div>
                    <div class="form-group">
                      <label>DOB</label>
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control ls-datepicker"
                          value="06/10/2017">
                        <div class="input-group-append">
                          <span class="input-group-text">
                            <i class="icon-fa icon-fa-calendar"/>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label>Hobbies</label>
                      <select class="form-control ls-select2">
                        <option value="developing">Developing</option>
                        <option value="singing">Singing</option>
                        <option value="reading">Reading</option>
                        <option value="internet-surfing">Internet Surfing</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>Occupation</label>
                      <input
                        type="text"
                        class="form-control">
                    </div>
                  </div>
                </div>
              </form>
            </tab-content>
            <tab-content
              title="Step 2"
              icon="2">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Phone No.</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Password Confirmation</label>
                    <input
                      type="password"
                      class="form-control">
                  </div>
                </div>
              </div>
            </tab-content>
            <tab-content
              title="Step 3"
              icon="3">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Address Line1</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Address Line2</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>City</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>State</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Pincode</label>
                    <input
                      type="text"
                      class="form-control">
                  </div>
                </div>
              </div>
            </tab-content>
            <tab-content
              title="Step 4"
              icon="4">
              <div class="form-group">
                <label>Facebook</label>
                <input
                  type="text"
                  class="form-control">
              </div>
              <div class="form-group">
                <label>Twitter</label>
                <input
                  type="text"
                  class="form-control">
              </div>
              <div class="form-group">
                <label>Google +</label>
                <input
                  type="text"
                  class="form-control">
              </div>
            </tab-content>
          </form-wizard>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { FormWizard, TabContent } from 'vue-form-wizard'

export default {
  components: {
    FormWizard,
    TabContent
  },
  data () {
    return {
      formInline: {
        user: '',
        region: ''
      },
      rules: {
        user: [
          {
            required: true,
            message: 'Please input Activity name',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 5,
            message: 'Length should be 3 to 5',
            trigger: 'blur'
          }
        ],
        region: [
          {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change'
          }
        ]
      }
    }
  },
  mounted(){
    console.log(this.$refs)
  },
  methods: {
    onComplete: function () {
      alert('Yay. Done!')
    },
       validateFirstStep() {
           return new Promise((resolve, reject) => {
             this.$refs.ruleForm.validate((valid) => {
               resolve(valid);
             });
           })

         }
  }
}
</script>
