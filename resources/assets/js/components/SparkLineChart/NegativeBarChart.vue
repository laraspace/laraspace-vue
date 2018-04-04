<template>
  <span class="spl-bar-chart">5,6,7,2,0,-4,-2,4,2,4,-7,3,-3,5</span>
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
          vm.handleBarNegativeChart()
        }
      }
    })()
    this.$nextTick(() => {
      SparklineCharts.init()
    })
  },
  methods: {
    handleBarNegativeChart () {
      jquery('.spl-bar-negative').sparkline('html', {
        type: 'bar',
        barWidth: '100%',
        barSpacing: 3,
        height: '100'
      })
    },
  }
}
</script>