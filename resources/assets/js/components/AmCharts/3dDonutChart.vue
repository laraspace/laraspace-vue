<template>
<div>
<div
  class="amcharts"
  id="3d-donut-chart">
</div>
  <div class="row chart-controls">
    <div class="col-md-4">
      <label class="section-semi-title">Angle:</label>
      <input
        class="pie_donut_chart_input"
        data-property="angle"
        type="range"
        min="0"
        max="89"
        value="30"
        step="1">
    </div>
    <div class="col-md-4">
      <label class="section-semi-title">Depth:</label>
      <input
        class="pie_donut_chart_input"
        data-property="depth3D"
        type="range"
        min="1"
        max="120"
        value="40"
        step="1">
    </div>
  </div>
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
          vm.handle3dDonutChart()
        }
      }
    })()
    console.log(window.image)
    this.$nextTick(() => {
      AMCharts.init()
    })
  },

  methods: {
    handle3dDonutChart () {
      var donutChart = window.AmCharts.makeChart('3d-donut-chart', {
        type: 'pie',
        theme: 'light',
        titles: [
          {
            text: 'Visitors countries',
            size: 16
          }
        ],
        dataProvider: [
          {
            country: 'United States',
            visits: 7252
          },
          {
            country: 'China',
            visits: 3882
          },
          {
            country: 'Japan',
            visits: 1809
          },
          {
            country: 'Germany',
            visits: 1322
          },
          {
            country: 'United Kingdom',
            visits: 1122
          },
          {
            country: 'France',
            visits: 414
          },
          {
            country: 'India',
            visits: 384
          },
          {
            country: 'Spain',
            visits: 211
          }
        ],
        valueField: 'visits',
        titleField: 'country',
        startEffect: 'elastic',
        startDuration: 2,
        labelRadius: 15,
        innerRadius: '50%',
        depth3D: 10,
        balloonText:
          '[[title]]<br><span style="font-size:14px"><b>[[value]]</b> ([[percents]]%)</span>',
        angle: 15,
        export: {
          enabled: true
        }
      })

      $('.pie_donut_chart_input')
        .off()
        .on('input change', function () {
          var t = $(this).data('property')
          var a = donutChart
          var l = Number(this.value)(donutChart.startDuration = 0)
          var innerRadius = t && (l += '%')(a[t] = l)
          donutChart.validateNow()
        })
    }
  }
}
</script>
