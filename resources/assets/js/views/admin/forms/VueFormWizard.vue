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
            step-size="sm"
            shape="tab"
            @on-complete="onComplete"
          >
            <tab-content title="Step 1" icon="1">
              <span class="number">1</span>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>DOB</label>
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control ls-datepicker"
                        value="06/10/2017"
                      >
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
                    <input type="text" class="form-control">
                  </div>
                </div>
              </div>
            </tab-content>
            <tab-content title="Step 2" icon="2">
              <span class="number">2</span>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Phone No.</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Password</label>
                    <input type="password" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Password Confirmation</label>
                    <input type="password" class="form-control">
                  </div>
                </div>
              </div>
            </tab-content>
            <tab-content title="Step 3" icon="3">
              <span class="number">3</span>
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Address Line1</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Address Line2</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>City</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>State</label>
                    <input type="text" class="form-control">
                  </div>
                  <div class="form-group">
                    <label>Pincode</label>
                    <input type="text" class="form-control">
                  </div>
                </div>
              </div>
            </tab-content>
            <tab-content title="Step 4" icon="4">
              <span class="number">4</span>
              <div class="form-group">
                <label>Facebook</label>
                <input type="text" class="form-control">
              </div>
              <div class="form-group">
                <label>Twitter</label>
                <input type="text" class="form-control">
              </div>
              <div class="form-group">
                <label>Google +</label>
                <input type="text" class="form-control">
              </div>
            </tab-content>
          </form-wizard>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>form wizard with validation</h6>
      </div>
      <!-- <div class="row">
              <div class="col-lg-6">
                <div class="form-group">
                  <label>First Name *</label>
                  <input type="text" id="firstname" name="firstname" class="form-control required">
                </div>
                <div class="form-group">
                  <label>Last Name *</label>
                  <input type="text" id="lastname" name="lastname" class="form-control required">
                </div>
                <div class="form-group">
                  <label>DOB</label>
                  <div class="input-group">
                    <input type="text" value="06/10/2017" class="form-control ls-datepicker">
                    <div class="input-group-append"><span class="input-group-text"><i class="icon-fa icon-fa-calendar"></i></span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label>Hobbies *</label>
                  <select id="hobby" name="hobby" class="form-control ls-select2 select2-hidden-accessible" data-select2-id="hobby" tabindex="-1" aria-hidden="true">
                    <option value="developing" data-select2-id="8">Developing</option>
                    <option value="singing">Singing</option>
                    <option value="reading">Reading</option>
                    <option value="internet-surfing">Internet Surfing</option>
                  </select>
                  <span class="select2 select2-container select2-container--default" dir="ltr" data-select2-id="7" style="width: 686.547px;">
                    <span class="selection">
                      <span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-hobby-container">
                        <span class="select2-selection__rendered" id="select2-hobby-container" role="textbox" aria-readonly="true" title="Developing">Developing</span>
                        <span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>
                      </span>
                    </span>
                    <span class="dropdown-wrapper" aria-hidden="true"></span>
                  </span>
                </div>
                <div class="form-group">
                  <label>Occupation *</label>
                  <input type="text" id="occupation" name="occupation" class="form-control required">
                </div>
              </div>
            </div> -->
    </div>
  </div>
</template>
<script>
import { FormWizard, TabContent } from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

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
  methods: {
    onComplete: function () {
      alert('Yay. Done!')
    },
    validateFirstStep () {
      return new Promise((resolve, reject) => {
        this.$refs.ruleForm.validate(valid => {
          resolve(valid)
        })
      })
    }
  }
}
</script>
