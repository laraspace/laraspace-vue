<template>
  <span class="spl-cp-bar-chart">4,6,7,7,4,3,2,1,4</span>
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
          vm.handleCompositBarChart()
        }
      }
    })()
    this.$nextTick(() => {
      SparklineCharts.init()
    })
  },
  methods: {
    handleCompositBarChart () {
      jquery('.spl-cp-bar-chart').sparkline('html', {
        type: 'bar',
        barColor: '#aaf',
        height: '100',
        barWidth: this.barWidth,
        barSpacing: 3
      })
      jquery('.spl-cp-bar-chart').sparkline(
        [4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7],
        {
          composite: true,
          fillColor: false,
          lineColor: 'red',
          width: '100%',
          height: '100'
        }
      )
    },
  }
}
</script>