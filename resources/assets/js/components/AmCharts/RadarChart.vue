<template>
  <div>
    <div
      class="amcharts"
      id="radar-chart"/>
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
          vm.handleRadarChart()
        }
      }
    })()
    console.log(window.image)
    this.$nextTick(() => {
      AMCharts.init()
    })
  },

  methods: {
    handleRadarChart () {
      var radarchart = window.AmCharts.makeChart('radar-chart', {
        type: 'radar',
        theme: 'light',
        dataProvider: [
          {
            country: 'Czech Republic',
            litres: 156.9
          },
          {
            country: 'Ireland',
            litres: 131.1
          },
          {
            country: 'Germany',
            litres: 115.8
          },
          {
            country: 'Australia',
            litres: 109.9
          },
          {
            country: 'Austria',
            litres: 108.3
          },
          {
            country: 'UK',
            litres: 99
          }
        ],
        valueAxes: [
          {
            axisTitleOffset: 20,
            minimum: 0,
            axisAlpha: 0.15
          }
        ],
        startDuration: 2,
        graphs: [
          {
            balloonText: '[[value]] litres of beer per year',
            bullet: 'round',
            lineThickness: 2,
            valueField: 'litres'
          }
        ],
        categoryField: 'country',
        export: {
          enabled: true
        }
      })
    },
  }
}
</script>
