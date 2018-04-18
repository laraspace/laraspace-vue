<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Advanced Elements</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Forms</a></li>
        <li class="breadcrumb-item active">Advanced Elements</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Multi Select <a
          class="source-link"
          href="https://vue-multiselect.js.org/"
          target="_blank">source</a></h6>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-xl-4 mb-4">
            <h5 class="section-semi-title">SINGLE SELECT</h5>
            <multiselect
              v-model="value"
              :options="SingleOptions"
              :searchable="true"
              :close-on-select="true"
              :show-labels="true"
              placeholder="Pick a value"
            />
          </div>
          <div class="col-xl-4 mb-4">
            <h5 class="section-semi-title">WITH GROUPS</h5>
            <multiselect
              v-model="GroupValue"
              :options="GroupOptions"
              :multiple="true"
              group-values="libs"
              group-label="language"
              placeholder="Type to search"
              track-by="name"
              label="name">
              <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
            </multiselect>
          </div>
          <div class="col-xl-4 mb-4">
            <h5 class="section-semi-title">MULTI SELECT</h5>
            <multiselect
              v-model="selected"
              :options="MultiOptions"
              :multiple="true"/>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Text Mask <a
          class="source-link"
          href="https://text-mask.github.io/text-mask/"
          target="_blank">source</a></h6>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-xl-4 mb-4">
            <h5 class="section-semi-title">Phone number</h5>
            <masked-input
              v-model="phone"
              :mask="['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]"
              :guide="true"
              :keep-char-positions="true"
              :show-mask="true"
              type="text"
              name="phone"
              class="form-control"/>
          </div>
          <div class="col-xl-4 mb-4">
            <h5 class="section-semi-title">Date</h5>
            <masked-input
              v-model="date"
              :mask="[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]"
              :guide="true"
              :keep-char-positions="true"
              :show-mask="true"
              type="text"
              name="date"
              class="form-control"/>
          </div>
          <div class="col-xl-4 mb-4">
            <h5 class="section-semi-title">Auto Correct Date</h5>
            <masked-input
              v-model="dateAuto"
              :mask="[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]"
              :guide="true"
              :pipe="auto"
              :keep-char-positions="true"
              :show-mask="true"
              type="text"
              name="dateAuto"
              class="form-control"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
import MaskedInput from 'vue-text-mask'
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import createAutoCorrectedDatePipe from 'text-mask-addons/dist/createAutoCorrectedDatePipe'
const autoCorrectedDatePipe = createAutoCorrectedDatePipe('mm/dd/yyyy HH:MM')

export default {
  components: {
    'masked-input': MaskedInput,
    Multiselect
  },
  data () {
    return {
      phone: '',
      date: '',
      dateAuto: '',
      auto: autoCorrectedDatePipe,
      selected: null,
      value: '',
      GroupValue: '',
      SingleOptions: ['Select option', 'options', 'selected', 'mulitple', 'label', 'searchable', 'clearOnSelect', 'hideSelected', 'maxHeight', 'allowEmpty', 'showLabels', 'onChange', 'touched'],
      MultiOptions: ['list', 'of', 'options'],
      GroupOptions: [
        {
          language: 'Javascript',
          libs: [
            { name: 'Vue.js', category: 'Front-end' },
            { name: 'Adonis', category: 'Backend' }
          ]
        },
        {
          language: 'Ruby',
          libs: [
            { name: 'Rails', category: 'Backend' },
            { name: 'Sinatra', category: 'Backend' }
          ]
        },
        {
          language: 'Other',
          libs: [
            { name: 'Laravel', category: 'Backend' },
            { name: 'Phoenix', category: 'Backend' }
          ]
        }
      ],
      value: []
    }
  }
}
</script>
