<template>
  <span class="spl-chart spl-mousespeed"/>
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
          vm.handledrawMouseSpeedChart()
        }
      }
    })()
    this.$nextTick(() => {
      SparklineCharts.init()
    })
  },
  methods: {
    handledrawMouseSpeedChart () {
      var mrefreshinterval = 500 // update display every 500ms
      var lastmousex = -1
      var lastmousey = -1
      var lastmousetime
      var mousetravel = 0
      var mpoints = []
      var mpointsmax = 30
      jquery('html').mousemove(function (e) {
        var mousex = e.pageX
        var mousey = e.pageY
        if (lastmousex > -1) {
          mousetravel += Math.max(
            Math.abs(mousex - lastmousex),
            Math.abs(mousey - lastmousey)
          )
        }
        lastmousex = mousex
        lastmousey = mousey
      })
      var mdraw = function () {
        var md = new Date()
        var timenow = md.getTime()
        if (lastmousetime && lastmousetime !== timenow) {
          var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000)
          mpoints.push(pps)
          if (mpoints.length > mpointsmax) mpoints.splice(0, 1)
          mousetravel = 0
          jquery('.spl-mousespeed').sparkline(mpoints, {
            // width: mpoints.length * 2,
            width: '100%',
            tooltipSuffix: ' pixels per second',
            height: '100'
          })
        }
        lastmousetime = timenow
        setTimeout(mdraw, mrefreshinterval)
      }
      // We could use setInterval instead, but I prefer to do it this way
      setTimeout(mdraw, mrefreshinterval)
    },
  }
}
</script>