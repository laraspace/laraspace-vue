<template>
  <span class="spl-boxplotraw">1, 3, 5, 8, 10, 15, 18</span>
</template>
<script>
import 'jquery-sparkline'
export default {
  computed: {
    barWidth () {
      if (jquery(window).width() > 440) {
        return jquery(window).width() / 70
      } else {
        return jquery(window).width() / 50
      }
    },

    width () {
      if (jquery(window).width() > 440) {
        return Math.floor(jquery(window).width() / 5)
      } else {
        return Math.floor(jquery(window).width() / 4)
      }
    }
  },
  mounted () {
    let vm = this
    let SparklineCharts = (function () {
      return {
        // main function to initiate the module
        init: function () {
          vm.handleBoxPlotRawChart()
        }
      }
    })()
    this.$nextTick(() => {
      SparklineCharts.init()
    })
  },
  methods: {
    handleBoxPlotRawChart () {
      jquery('.spl-boxplotraw').sparkline('html', {
        type: 'box',
        raw: true,
        showOutliers: true,
        target: 6,
        width: '80%',
        height: '70'
      })
    },
  }
}
</script>