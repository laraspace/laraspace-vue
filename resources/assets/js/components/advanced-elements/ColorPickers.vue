<template>
  <div class="row">
    <div class="col-xl-4 mb-4">
      <photoshop-picker v-if="colorpicker === 'photoshope'" v-model="colors"/>
      <slider-picker v-if="colorpicker === 'slider'" v-model="colors"/>
      <sketch-picker v-if="colorpicker === 'sketch'" v-model="colors"/>
      <chrome-picker v-if="colorpicker ==='chrome'" v-model="colors"/>
      <material-picker v-if="colorpicker==='material'" v-model="colors"/><br>
      <compact-picker v-if="colorpicker === 'compact'" v-model="colors"/><br>
      <swatches-picker v-if="colorpicker === 'swatches'" v-model="colors"/>
      <grayscale-picker v-if="colorpicker === 'grayscale'" v-model="colors"/>
    </div>
  </div>
</template>

<script>
import { Grayscale, Photoshop, Material, Compact, Swatches, Slider, Chrome, Sketch } from 'vue-color'
let defaultProps = {
  hex: '#194d33',
  hsl: {
    h: 150,
    s: 0.5,
    l: 0.2,
    a: 1
  },
  hsv: {
    h: 150,
    s: 0.66,
    v: 0.30,
    a: 1
  },
  rgba: {
    r: 25,
    g: 77,
    b: 51,
    a: 1
  },
  a: 1
}
export default {
  components: {
    'material-picker': Material,
    'compact-picker': Compact,
    'swatches-picker': Swatches,
    'slider-picker': Slider,
    'sketch-picker': Sketch,
    'chrome-picker': Chrome,
    'photoshop-picker': Photoshop,
    'grayscale-picker': Grayscale
  },
  props: {
    colorpicker: {
      type: String,
      required: true,
      default: ''
    }
  },
  data () {
    return {
      colors: defaultProps
    }
  },
  watch: {
    colors (value) {
      this.$parent.advcolors = value.hex
    }
  }
}
</script>
