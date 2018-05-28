<template>
  <div class="color-pickers-demo">
    <div :style="{ 'background': selectedHex }" class="demo-div">
      Colors applied here
    </div>

    <div class="row">
      <div class="col-xl-7 mb-5">
        <h5 class="section-semi-title">Photoshop</h5>
        <photoshop-picker v-model="colors"/>

      </div>
      <div class="col-xl-5 mb-5 ">
        <h5 class="section-semi-title">Swatches</h5>
        <swatches-picker v-model="colors"/>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-4 mb-5 ">
        <h5 class="section-semi-title">Sketch</h5>
        <sketch-picker v-model="colors"/>
      </div>
      <div class="col-xl-4 mb-5 ">
        <h5 class="section-semi-title">Chrome</h5>
        <chrome-picker v-model="colors"/>
      </div>
      <div class="col-xl-4 mb-5 ">
        <h5 class="section-semi-title">Compact</h5>
        <compact-picker v-model="colors"/>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-6 mb-5 ">
        <h5 class="section-semi-title">Slider</h5>
        <slider-picker v-model="colors"/>
      </div>
      <div class="col-xl-3 mb-5 ">
        <h5 class="section-semi-title">Material</h5>
        <material-picker v-model="colors"/>
      </div>
      <div class="col-xl-3 mb-5 ">
        <h5 class="section-semi-title">Grayscale</h5>
        <grayscale-picker v-model="colors"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Grayscale, Photoshop, Material, Compact, Swatches, Slider, Chrome, Sketch } from 'vue-color'
let defaultProps = {
  hex: '#ffde00'
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
  data () {
    return {
      colors: defaultProps,
      selectedHex: '#ffde00'
    }
  },
  watch: {
    colors (value) {
      this.selectedHex = value.hex
    }
  }
}
</script>
