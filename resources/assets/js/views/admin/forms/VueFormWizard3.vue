<template>
  <div class="main-content form-wizard">
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
        <div class="content ls-wizard wizard-3">
          <form-wizard
            @on-complete="onComplete"
            shape="tab"
            title=""
            subtitle=""
            stepSize="sm">
            <tab-content
              title="Step 1"
              icon="ti-user">
              My first tab content
            </tab-content>
            <tab-content
              title="Step 2"
              icon="ti-settings">
              My second tab content
            </tab-content>
            <tab-content
              title="Step 3"
              icon="ti-check">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
            <tab-content
              title="Step 4"
              icon="ti-check">
              Yuhuuu! This seems pretty damn simple
            </tab-content>
          </form-wizard>
        </div>
      </div>
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
  methods: {
    onComplete: function () {
      alert('Yay. Done!')
    },
    beforeTabSwitch: function () {
      alert('This is called before switchind tabs')
      return true
    }
  }
}
</script>
