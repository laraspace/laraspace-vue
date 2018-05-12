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
        <h6>Text Mask <a
          class="source-link"
          href="https://text-mask.github.io/text-mask/"
          target="_blank">source</a></h6>
      </div>
      <div class="card-body">
        <text-mask-demo/>
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
        <div class="row">
          <div class="col-sm-6">
            <h5 class="section-semi-title">Photoshope Color Picker</h5>
            <color-pickers-demo :colorpicker="'photoshope'" />
            <button
              :style="{ 'background': setColors('photoshope') }"
              class="btn btn-primary demo-btn"
              @click="colorpickerdemo='photoshope'"
            >
              Apply Me
            </button>
          </div>
          <div class="col-sm-6">
            <h5 class="section-semi-title">Swatches Color Picker</h5>
            <color-pickers-demo :colorpicker="'swatches'" />
            <button
              :style="{ 'background': setColors('swatches') }"
              class="btn btn-primary demo-btn"
              @click="colorpickerdemo='swatches'"
            >
              Apply Me
            </button>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-sm-6">
            <h5 class="section-semi-title">Chrome Color Picker</h5>
            <color-pickers-demo :colorpicker="'chrome'"/>
            <button
              :style="{ 'background': setColors('chrome') }"
              class="btn btn-primary demo-btn"
              @click="colorpickerdemo='chrome'"
            >
              Apply Me
            </button>
          </div>
          <div class="col-sm-6">
            <h5 class="section-semi-title">Sketch Color Picker</h5>
            <color-pickers-demo :colorpicker="'sketch'"/>
            <button
              :style="{ 'background': setColors('Sketch') }"
              class="btn btn-primary demo-btn"
              @click="colorpickerdemo='Sketch'"
            >
              Apply Me
            </button>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-sm-6">
            <h5 class="section-semi-title">Slider Color Picker</h5>
            <color-pickers-demo :colorpicker="'slider'"/>
            <button
              :style="{ 'background': setColors('slider') }"
              class="btn btn-primary demo-btn"
              @click="colorpickerdemo='slider'"
            >
              Apply Me
            </button>
          </div>
          <div class="col-sm-6">
            <h5 class="section-semi-title">Compact Color Picker</h5>
            <color-pickers-demo :colorpicker="'compact'"/>
            <button
              :style="{ 'background': setColors('compact') }"
              class="btn btn-primary demo-btn"
              @click="colorpickerdemo='compact'"
            >
              Apply Me
            </button>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-sm-6">
            <h5 class="section-semi-title">Material Color Picker</h5>
            <color-pickers-demo :colorpicker="'material'"/>
            <button
              :style="{ 'background': setColors('material') }"
              class="btn btn-primary demo-btn"
              @click="colorpickerdemo='material'"
            >
              Apply Me
            </button>
          </div>
          <div class="col-sm-6">
            <h5 class="section-semi-title">Grayscale Color Picker</h5>
            <color-pickers-demo :colorpicker="'grayscale'"/>
            <button
              :style="{ 'background': setColors('grayscale') }"
              class="btn btn-primary demo-btn"
              @click="colorpickerdemo='grayscale'"
            >
              Apply Me
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
import ColorPickersDemo from '../../../components/advanced-elements/ColorPickers.vue'
import MultiSelectDemo from '../../../components/advanced-elements/MultiSelect.vue'
import TextMaskDemo from '../../../components/advanced-elements/TextMask.vue'

export default {
  components: {
    'color-pickers-demo': ColorPickersDemo,
    'multi-select-demo': MultiSelectDemo,
    'text-mask-demo': TextMaskDemo
  },
  data () {
    return {
      colorpickerdemo: '',
      advcolors: ''
    }
  },
  methods: {
    setColors (picker) {
      if (this.colorpickerdemo === picker) {
        return this.advcolors
      }
    }
  }
}
</script>
