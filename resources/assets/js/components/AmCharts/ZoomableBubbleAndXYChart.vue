<template>
  <div>
    <div
      class="amcharts"
      id="xy-and-bubble-chart"/>
  </div>
</template>

<script>
import AmCharts from 'amcharts3'
import 'amcharts3/amcharts/serial'
import 'amcharts3/amcharts/pie'
import 'amcharts3/amcharts/xy'
import 'amcharts3/amcharts/radar'
import 'amcharts3/amcharts/themes/light'
import 'ammap3'
import 'ammap3/ammap/maps/js/worldLow'
import 'amstock3/amcharts/amstock'
import 'amcharts3/amcharts/plugins/animate/animate'
import 'amcharts3/amcharts/plugins/export/export'
import 'amcharts3/amcharts/images/dragIconRoundBig.svg'
import 'amcharts3/amcharts/images/dragIconRoundBigH.svg'
import 'amcharts3/amcharts/images/lens.svg'
export default {
  mounted () {
    let vm = this
    let AMCharts = (function () {
      return {
        init: function () {
          vm.handleZoomableBubbleAndXYChart()
        }
      }
    })()
    console.log(window.image)
    this.$nextTick(() => {
      AMCharts.init()
    })
  },

  methods: {
    handleZoomableBubbleAndXYChart () {
      var xyandbubblechart = window.AmCharts.makeChart('xy-and-bubble-chart', {
        type: 'xy',
        theme: 'light',
        pathToImages: '/fonts/vendor/amcharts3/amcharts/images/',
        marginRight: 80,
        marginTop: 17,
        dataProvider: [
          {
            y: 10,
            x: 14,
            value: 59,
            y2: -5,
            x2: 0,
            value2: 44
          },
          {
            y: 5,
            x: 3,
            value: 50,
            y2: -15,
            x2: -8,
            value2: 12
          },
          {
            y: -10,
            x: -3,
            value: 19,
            y2: -4,
            x2: 6,
            value2: 35
          },
          {
            y: -6,
            x: 5,
            value: 65,
            y2: -5,
            x2: -6,
            value2: 168
          },
          {
            y: 15,
            x: -4,
            value: 92,
            y2: -10,
            x2: -8,
            value2: 102
          },
          {
            y: 13,
            x: 1,
            value: 8,
            y2: -2,
            x2: -3,
            value2: 41
          },
          {
            y: 1,
            x: 6,
            value: 35,
            y2: 0,
            x2: 1,
            value2: 16
          }
        ],
        valueAxes: [
          {
            position: 'bottom',
            axisAlpha: 0
          },
          {
            minMaxMultiplier: 1.2,
            axisAlpha: 0,
            position: 'left'
          }
        ],
        startDuration: 1.5,
        graphs: [
          {
            balloonText:
              'x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>',
            bullet: 'bubble',
            lineAlpha: 0,
            valueField: 'value',
            xField: 'x',
            yField: 'y',
            fillAlphas: 0,
            bulletBorderAlpha: 0.2,
            maxBulletSize: 80
          },
          {
            balloonText:
              'x:<b>[[x]]</b> y:<b>[[y]]</b><br>value:<b>[[value]]</b>',
            bullet: 'bubble',
            lineAlpha: 0,
            valueField: 'value2',
            xField: 'x2',
            yField: 'y2',
            fillAlphas: 0,
            bulletBorderAlpha: 0.2,
            maxBulletSize: 80
          }
        ],
        marginLeft: 46,
        marginBottom: 35,
        chartScrollbar: {},
        chartCursor: {},
        balloon: {
          fixedPosition: true
        },
        export: {
          enabled: true
        }
      })
    },
  }
}
</script>
