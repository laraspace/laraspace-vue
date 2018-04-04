<template>
<div>
  <div class="row gauges-row">
    <div class="col">
      <div class="gauge gauge-lg">
          <canvas class="basic-gauge"/>
          <div class="gauge-label"/>
      </div>
      </div>
      <div class="col ">
      <div class="gauge gauge-md">
          <canvas class="basic-gauge"/>
          <div class="gauge-label"/>
      </div>
      </div>
      <div class="col">
      <div class="gauge gauge-sm">
          <canvas class="basic-gauge"/>
          <div class="gauge-label"/>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { Gauge, Donut } from 'gaugeJS'

export default {
  mounted  () {
    let vm = this
    let GaugesChart = (function () {
      return {
        init: function () {
          vm.handleGauges()
        }
      }
    })()
    this.$nextTick(() => {
      GaugesChart.init()
    })
  },
  methods: {
    handleGauges () {
      var OptsBasic = {
        angle: 0.15, /// The span of the gauge arc
        lineWidth: 0.44, // The line thickness
        pointer: {
          length: 0.64, // Relative to gauge radius
          strokeWidth: 0.035, // The thickness
          color: '#8C8C8C'
        },
        colorStart: '#ffde00', // Colors
        colorStop: '#ffde00', // just experiment with them
        strokeColor: '#E0E0E0' // to see which ones work best for you
      }

      jquery('.basic-gauge').each(function () {
        if (OptsBasic !== false) {
          var gauge = new Gauge(this).setOptions(OptsBasic)
          gauge.maxValue = 3000 // set max gauge value
          gauge.setMinValue(0) // set min value
          gauge.animationSpeed = 32 // set animation speed (32 is default value)
          gauge.set(1250) // set actual value
          gauge.setTextField(this.nextElementSibling)
        }
      })
    },
  }
}
</script>
