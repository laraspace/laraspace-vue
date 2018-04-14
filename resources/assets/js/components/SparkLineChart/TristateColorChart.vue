<template>
  <span class="spl-tristate-color">1,2,0,2,-1,-2,1,-2,0,0,1,1</span>
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
       let self =this
        $('.spl-tristate-color').sparkline('html', {
            type: 'tristate',
            colorMap: {'-2': '#fa7', '2': '#44f'},
            barWidth: barWidth,
            barSpacing: 3,
            height: '100'
        })
    }
  }
  }
</script>
