<template>
  <div>
    <div class="row gauges-row">
      <div class="col">
        <div class="gauge gauge-lg">
          <canvas
            id="donut"
            class="donut-gauge"
            height="250"
            width="500"
          />
          <div class="gauge-label middle-label"/>
        </div>
      </div>
      <div class="col">
        <div class="gauge gauge-md">
          <canvas
            class="donut-gauge"
            height="180"
            width="360"
          />
          <div class="gauge-label middle-label"/>
        </div>
      </div>
      <div class="col">
        <div class="gauge gauge-sm">
          <canvas
            class="donut-gauge"
            height="120"
            width="240"
          />
          <div class="gauge-label middle-label"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Donut } from 'gaugeJS'

export default {
  mounted  () {
    let vm = this
    let GaugesChart = (function () {
      return {
        init: function () {
          vm.handleDonutGauges()
        }
      }
    })()
    this.$nextTick(() => {
      GaugesChart.init()
    })
  },
  methods: {
    handleDonutGauges () {
      var OptsDonuts = {
        angle: 0.35, // The span of the gauge arc
        lineWidth: 0.07, // The line thickness
        radiusScale: 1, // Relative radius
        limitMax: false, // If false, the max value of the gauge will be updated if value surpass max
        limitMin: false, // If true, the min value of the gauge will be fixed unless you set it manually
        colorStart: '#ffde00', // Colors
        colorStop: '#ffde00', // just experiment with them
        strokeColor: '#E0E0E0', // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true // High resolution support
      }
      let elements = document.getElementsByClassName('donut-gauge')
      for (let el of elements) {
        if (OptsDonuts !== false) {
          var donut = new Donut(el).setOptions(OptsDonuts)
          donut.maxValue = 3000 // set max gauge value
          donut.setMinValue(0) // set min value
          donut.animationSpeed = 32 // set animation speed (32 is default value)
          donut.set(1250) // set actual value
          donut.setTextField(el.nextElementSibling)
        }
      }
    }
  }
}
</script>
