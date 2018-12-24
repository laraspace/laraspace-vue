<template>
  <div :class="['gauge', 'gauge-' + gaugeSize ]">
    <canvas class="color-gauge"/>
    <div class="gauge-label"/>
  </div>
</template>

<script>
import { Gauge } from 'gaugeJS'

export default {
  props: {
    option: {
      type: Object,
      required: false,
      default: function (){
        return {
          angle: -0.2, // The span of the gauge arc
          lineWidth: 0.2, // The line thickness
          radiusScale: 1, // Relative radius
          pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.035, // The thickness
            color: '#000000' // Fill color
          },
          limitMax: false, // If false, the max value of the gauge will be updated if value surpass max
          limitMin: false, // If true, the min value of the gauge will be fixed unless you set it manually
          colorStart: '#6FADCF', // Colors
          colorStop: '#8FC0DA', // just experiment with them
          strokeColor: '#E0E0E0', // to see which ones work best for you
          generateGradient: true,
          highDpiSupport: true, // High resolution support
          staticZones: [
            { strokeStyle: '#F03E3E', min: 100, max: 500 }, // Red from 100 to 130
            { strokeStyle: '#FFDD00', min: 500, max: 1100 }, // Yellow
            { strokeStyle: '#30B32D', min: 1100, max: 2300 }, // Green
            { strokeStyle: '#FFDD00', min: 2300, max: 2700 }, // Yellow
            { strokeStyle: '#F03E3E', min: 2700, max: 3000 } // Red
          ]
        }
      } 
    },
    gaugeSize: {
      type: String,
      required: true,
      default: 'md'
    }
  },
  mounted  () {
    this.$nextTick(() => {
      this.handleColorGauges()
    })
  },
  methods: {
    handleColorGauges () {
      let elements = document.getElementsByClassName('color-gauge')
      for (let el of elements) {
        if (this.option !== false) {
          let colorgauge = new Gauge(el).setOptions(this.option)
          colorgauge.maxValue = 3000 // set max gauge value
          colorgauge.setMinValue(0) // set min value
          colorgauge.animationSpeed = 32 // set animation speed (32 is default value)
          colorgauge.set(1250) // set actual value
          colorgauge.setTextField(el.nextElementSibling)
        }
      }
    }
  }
}
</script>
