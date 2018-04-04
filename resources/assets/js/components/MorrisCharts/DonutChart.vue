<template>
  <div>
      <div
        class="morris"
        id="morris-donut-chart"/>
  </div>
</template>
<script>
import 'requirejs/require.js'
import Raphael from 'raphael/raphael.js'
import Morris from 'morris.js/morris'

export default {
  mounted () {
    let vm = this
    let MorrisChart = (function () {
      return {
        // main function to initiate the module
        init: function () {
          vm.handleDonutChart()
        }
      }
    })()
    this.$nextTick(() => {
      MorrisChart.init()
    })
  },
  methods: {
    // Handle Donut Chart
    handleDonutChart () {
      window.Morris.Donut({
        element: 'morris-donut-chart',
        data: [
          {
            label: 'iphone',
            value: 65615
          },
          {
            label: 'itouch',
            value: 31956
          },
          {
            label: 'ipad',
            value: 35793
          }
        ],
        resize: true
      })
    }
  }
}
</script>
