<template>
  <span class="spl-bar-chart">6, 10, 5, 2, 0, 6, 15, 13, 1, 4, 2, 3</span>
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
          vm.handleBarChart()
        }
      }
    })()
    this.$nextTick(() => {
      SparklineCharts.init()
    })
  },
  methods: {
    handleBarChart () {
      jquery('.spl-bar-chart').sparkline('html', {
        type: 'bar',
        height: '100',
        barWidth: this.barWidth,
        barSpacing: 3
      })
    },
  }
}
</script>