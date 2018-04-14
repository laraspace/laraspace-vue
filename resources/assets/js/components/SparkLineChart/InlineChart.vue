<template>
  <span class="spl-inline">1,4,4,7,5,9,10</span>
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
          vm.handleInlineChart()
        }
      }
    })()
    this.$nextTick(() => {
      SparklineCharts.init()
    })
  },
  methods: {
    handleInlineChart () {
      jquery('.spl-inline').sparkline('html', {
        width: '100%',
        height: '100'
      })
    },
  }
}
</script>