<template>
  <div :class="['gauge','gauge-' + gaugeSize]">
    <canvas class="basic-gauge"/>
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
        return  {
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
      this.handleGauges()
    })
  },
  methods: {
    handleGauges () {
     
      let elements = document.getElementsByClassName('basic-gauge')
      for (let el of elements) {
        if (this.option !== false) {
          let gauge = new Gauge(el).setOptions(this.option)
          gauge.maxValue = 3000 // set max gauge value
          gauge.setMinValue(0) // set min value
          gauge.animationSpeed = 32 // set animation speed (32 is default value)
          gauge.set(1250) // set actual value
          gauge.setTextField(el.nextElementSibling)
        }
      }
    }
  }
}
</script>
