<template>
  <span class="spl-bar-chart">0:2,2:4,4:2,4:1,6:2,3:3,5:7,3,2:6</span>
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
          vm.handleTristateColorChart()
        }
      }
    })()
    this.$nextTick(() => {
      SparklineCharts.init()
    })
  },
  methods: {
    handleTristateColorChart () {
      jquery('.spl-tristate-color').sparkline('html', {
        type: 'tristate',
        colorMap: { '-2': '#fa7', '2': '#44f' },
        barWidth: this.barWidth,
        barSpacing: 3,
        height: '100'
      })
    },
  }
}
</script>