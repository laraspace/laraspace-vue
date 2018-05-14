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
          <div class="col-sm-4">
            <h5 class="section-semi-title">Photoshope</h5>
            <color-pickers-demo :colorpicker="'photoshope'" />
            <div
              :style="{ 'background': advcolors }"
              class="demo-div"
            >
              Applied on Me
            </div>
          </div>
          <div class="col-sm-4">
            <h5 class="section-semi-title">Swatches</h5>
            <color-pickers-demo :colorpicker="'swatches'" />
          </div>
          <div class="col-sm-4">
            <h5 class="section-semi-title">Sketch</h5>
            <color-pickers-demo :colorpicker="'sketch'"/>
          </div>

        </div>
        <div class="row mt-5">
          <div class="col-sm-4">
            <h5 class="section-semi-title">Chrome</h5>
            <color-pickers-demo :colorpicker="'chrome'"/>
          </div>
          <div class="col-sm-4">
            <h5 class="section-semi-title">Compact</h5>
            <color-pickers-demo :colorpicker="'compact'"/>
          </div>
          <div class="col-sm-4">
            <h5 class="section-semi-title">Material</h5>
            <color-pickers-demo :colorpicker="'material'"/>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-sm-4">
            <h5 class="section-semi-title">Slider</h5>
            <color-pickers-demo :colorpicker="'slider'"/>
          </div>
          <div class="col-sm-4">
            <h5 class="section-semi-title">Grayscale</h5>
            <color-pickers-demo :colorpicker="'grayscale'"/>
          </div>
          <div class="col-sm-4"/>
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
      advcolors: ''
    }
  }
}
</script>
