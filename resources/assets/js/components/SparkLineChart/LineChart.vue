<template>
  <span class="spl-chart spl-line-chart"/>
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
          vm.handleLineChart()
        }
      }
    })()
    this.$nextTick(() => {
      SparklineCharts.init()
    })
  },
  methods: {
    handleLineChart () {
      jquery('.spl-line-chart').sparkline(
        [5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7],
        {
          type: 'line',
          width: '100%',
          height: '100'
        }
      )
    },
  }
}
</script>