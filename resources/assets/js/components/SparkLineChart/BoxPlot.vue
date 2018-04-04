<template>
  <span class="spl-boxplot">4,27,34,52,54,59,61,68,78,82,85,87,91,93,100</span>
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
          vm.handleBoxplotChart()
        }
      }
    })()
    this.$nextTick(() => {
      SparklineCharts.init()
    })
  },
  methods: {
    handleBoxplotChart () {
      jquery('.spl-boxplot').sparkline('html', {
        type: 'box',
        target: 6,
        width: '80%',
        height: '70'
      })
    },
  }
}
</script>