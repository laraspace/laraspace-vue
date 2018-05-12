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
        <h6>Vue Color Picker <a
          class="source-link"
          href="http://xiaokaike.github.io/vue-color/"
          target="_blank">source</a></h6>
      </div>
      <div class="card-body">
        <color-pickers-demo :colorpicker="colorpickerdemo"/>

        <button :style="{ 'background': setColors('photoshope') }" class="btn btn-primary" @click="colorpickerdemo='photoshope'">photoshope</button>
        <button :style="{ 'background': setColors('chrome') }" class="btn btn-primary" @click="colorpickerdemo='chrome'">chrome</button>
        <button :style="{ 'background': setColors('slider') }" class="btn btn-primary" @click="colorpickerdemo='slider'">slider</button>
        <button :style="{ 'background': setColors('sketch') }" class="btn btn-primary" @click="colorpickerdemo='sketch'">sketch</button>
        <button :style="{ 'background': setColors('material') }" class="btn btn-primary" @click="colorpickerdemo='material'">material</button>
        <button :style="{ 'background': setColors('compact') }" class="btn btn-primary" @click="colorpickerdemo='compact'">compact</button>
        <button :style="{ 'background': setColors('swatches') }" class="btn btn-primary" @click="colorpickerdemo='swatches'">swatches</button>
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
