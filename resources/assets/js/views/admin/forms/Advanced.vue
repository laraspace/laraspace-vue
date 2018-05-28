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
        <h6>Multi Select
          <a
            class="source-link"
            href="https://vue-multiselect.js.org/"
            target="_blank"
          >
            source
          </a>
        </h6>
      </div>
      <div class="card-body">
        <multi-select-demo />
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Text Mask
          <a
            class="source-link"
            href="https://text-mask.github.io/text-mask/"
            target="_blank"
          >
            source
          </a>
        </h6>
      </div>
      <div class="card-body">
        <text-mask-demo/>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Date Picker
          <a
            class="source-link"
            href="https://github.com/charliekassel/vuejs-datepicker"
            target="_blank"
          >
            source
          </a>
        </h6>
      </div>
      <div class="card-body">
        <div class="row">
          <div class="col-xl-4 mb-4">
            <h5 class="section-semi-title">Default Date Picker</h5>
            <datepicker input-class="form-control" placeholder="Select Date"/>
          </div>
          <div class="col-xl-4 mb-4">
            <h5 class="section-semi-title">Formate Date Picker</h5>
            <div class="form-group">
              <label>Result</label>
              <datepicker :format="format" input-class="form-control"/>
            </div>
            <div class="form-group">
              <label>Formats</label>
              <multi-select
                v-model="format"
                :options="FormatOptions"
                :allow-empty="false"
                :show-labels="false"
                :searchable="true"
                placeholder="Pick a Format"
              />
            </div>
          </div>
          <div class="col-xl-4 mb-4">
            <h5 class="section-semi-title">Inline Date Picker</h5>
            <datepicker :inline="true"/>
          </div>
        </div>
        <div class="row">
          <div class="col-xl-4 mb-4">
            <h5 class="section-semi-title">Highlited Date</h5>
            <div class="form-group">
              <label >From</label>
              <datepicker input-class="form-control" @selected="highlightFrom"/>
            </div>
            <div class="form-group">
              <label>To</label>
              <datepicker input-class="form-control" @selected="highlightTo"/>
            </div>
            <div class="form-group">
              <label>Result</label>
              <datepicker :highlighted="highlighted" input-class="form-control"/>
            </div>
          </div>
          <div class="col-xl-4 mb-4">
            <h5 class="section-semi-title">Disable Specific Range Of Date</h5>
            <div class="form-group">
              <label>From</label>
              <datepicker input-class="form-control" @selected="disableFrom"/>
            </div>
            <div class="form-group">
              <label>To</label>
              <datepicker input-class="form-control" @selected="disableTo"/>
            </div>
            <div class="form-group">
              <label>Result</label>
              <datepicker :disabled-dates="disabledDates" input-class="form-control" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Vue Color Picker
          <a
            class="source-link"
            href="http://xiaokaike.github.io/vue-color/"
            target="_blank"
          >
            source
          </a>
        </h6>
      </div>
      <div class="card-body">
        <color-pickers-demo />
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
import ColorPickersDemo from './advanced-elements/ColorPickersDemo.vue'
import MultiSelectDemo from './advanced-elements/MultiSelectDemo.vue'
import TextMaskDemo from './advanced-elements/TextMaskDemo.vue'
import Datepicker from 'vuejs-datepicker'
import Multiselect from 'vue-multiselect'

export default {
  components: {
    'color-pickers-demo': ColorPickersDemo,
    'multi-select-demo': MultiSelectDemo,
    'text-mask-demo': TextMaskDemo,
    Datepicker,
    'multi-select': Multiselect
  },
  data () {
    return {
      advcolors: '',
      format: 'd MMM yyyy',
      FormatOptions: ['d MMM yyyy', 'd MMMM yyyy', 'yyyy-MM-dd', 'dsu MMM yyyy', 'D dsu MMM yyyy'],
      disabledDates: {
        ranges: [{
          to: '',
          from: ''
        }]
      },
      highlighted: {}
    }
  },
  methods: {
    highlightFrom (val) {
      if (typeof this.highlighted.from === 'undefined') {
        this.highlighted = {
          to: this.highlighted.to,
          daysOfMonth: this.highlighted.daysOfMonth,
          from: null
        }
      }
      this.highlighted.from = val
    },
    highlightTo (val) {
      if (typeof this.highlighted.to === 'undefined') {
        this.highlighted = {
          to: null,
          daysOfMonth: this.highlighted.daysOfMonth,
          from: this.highlighted.from
        }
      }
      this.highlighted.to = val
    },
    disableTo (val) {
      this.disabledDates.ranges[0].to = ''
      if (this.disabledDates.ranges[0].to === '') {
        this.disabledDates.ranges[0].to = val
      }
    },
    disableFrom (val) {
      this.disabledDates.ranges[0].from = ''
      if (this.disabledDates.ranges[0].from === '') {
        this.disabledDates.ranges[0].from = val
      }
    }
  }
}
</script>
