<template>
  <span class="spl-cp-inline">8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10</span>
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
          vm.handleCompositeInline()
        }
      }
    })()
    this.$nextTick(() => {
      SparklineCharts.init()
    })
  },
  methods: {
    handleCompositeInline () {
      jquery('.spl-cp-inline').sparkline('html', {
        fillColor: false,
        changeRangeMin: 0,
        chartRangeMax: 10,
        width: '100%',
        height: '100'
      })

      jquery('.spl-cp-inline').sparkline(
        [4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7],
        {
          composite: true,
          fillColor: false,
          lineColor: 'red',
          changeRangeMin: 0,
          chartRangeMax: 10,
          width: '100%',
          height: '100'
        }
      )
    },
  }
}
</script>