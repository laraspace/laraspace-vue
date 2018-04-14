<template>
  <span class="spl-tristate">1,1,0,1,-1,-1,1,-1,0,0,1,1</span>
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
          vm.handleTristateChart()
        }
      }
    })()
    this.$nextTick(() => {
      SparklineCharts.init()
    })
  },
  methods: {
    handleTristateChart () {
      jquery('.spl-tristate').sparkline('html', {
        type: 'tristate',
        barWidth: this.barWidth,
        barSpacing: 3,
        height: '100'
      })
    },
  }
}
</script>