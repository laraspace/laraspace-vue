<template>
  <span class="spl-discreate2">4,6,7,7,4,3,2,1,4,4,5,5,8,3,3</span>
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
          vm.handleDiscreateWithThresholdChart()
        }
      }
    })()
    this.$nextTick(() => {
      SparklineCharts.init()
    })
  },
  methods: {
    handleDiscreateWithThresholdChart () {
      jquery('.spl-discreate2').sparkline('html', {
        type: 'discrete',
        lineColor: 'blue',
        thresholdColor: 'red',
        thresholdValue: 4,
        width: this.width,
        height: '100'
      })
    },
  }
}
</script>