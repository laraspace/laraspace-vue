<template>
<div>
  <div
    class="amcharts"
    id="stack-area-chart"/>
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
          vm.handleStackAreaChart()
        }
      }
    })()
    console.log(window.image)
    this.$nextTick(() => {
      AMCharts.init()
    })
  },

  methods: {
    handleStackAreaChart () {
      var stackAreaChart = window.AmCharts.makeChart('stack-area-chart', {
        type: 'serial',
        theme: 'light',
        pathToImages: '/fonts/vendor/amcharts3/amcharts/images/',

        marginRight: 30,
        legend: {
          equalWidths: false,
          periodValueText: 'total: [[value.sum]]',
          position: 'top',
          valueAlign: 'left',
          valueWidth: 100
        },
        dataProvider: [
          {
            year: 1994,
            cars: 1587,
            motorcycles: 650,
            bicycles: 121
          },
          {
            year: 1995,
            cars: 1567,
            motorcycles: 683,
            bicycles: 146
          },
          {
            year: 1996,
            cars: 1617,
            motorcycles: 691,
            bicycles: 138
          },
          {
            year: 1997,
            cars: 1630,
            motorcycles: 642,
            bicycles: 127
          },
          {
            year: 1998,
            cars: 1660,
            motorcycles: 699,
            bicycles: 105
          },
          {
            year: 1999,
            cars: 1683,
            motorcycles: 721,
            bicycles: 109
          },
          {
            year: 2000,
            cars: 1691,
            motorcycles: 737,
            bicycles: 112
          },
          {
            year: 2001,
            cars: 1298,
            motorcycles: 680,
            bicycles: 101
          },
          {
            year: 2002,
            cars: 1275,
            motorcycles: 664,
            bicycles: 97
          },
          {
            year: 2003,
            cars: 1246,
            motorcycles: 648,
            bicycles: 93
          },
          {
            year: 2004,
            cars: 1318,
            motorcycles: 697,
            bicycles: 111
          },
          {
            year: 2005,
            cars: 1213,
            motorcycles: 633,
            bicycles: 87
          },
          {
            year: 2006,
            cars: 1199,
            motorcycles: 621,
            bicycles: 79
          },
          {
            year: 2007,
            cars: 1110,
            motorcycles: 210,
            bicycles: 81
          },
          {
            year: 2008,
            cars: 1165,
            motorcycles: 232,
            bicycles: 75
          },
          {
            year: 2009,
            cars: 1145,
            motorcycles: 219,
            bicycles: 88
          },
          {
            year: 2010,
            cars: 1163,
            motorcycles: 201,
            bicycles: 82
          },
          {
            year: 2011,
            cars: 1180,
            motorcycles: 285,
            bicycles: 87
          },
          {
            year: 2012,
            cars: 1159,
            motorcycles: 277,
            bicycles: 71
          }
        ],
        valueAxes: [
          {
            stackType: 'regular',
            gridAlpha: 0.07,
            position: 'left',
            title: 'Traffic incidents'
          }
        ],
        graphs: [
          {
            balloonText:
              '' +
              '<img src="/assets/img/charts/car.png" style="vertical-align:bottom ' +
              'margin-right: 10px width:28px height:21px"><span style="font-size:14px color:#000000">' +
              '<b>[[value]]</b></span>',
            fillAlphas: 0.6,
            hidden: true,
            lineAlpha: 0.4,
            title: 'Cars',
            valueField: 'cars'
          },
          {
            balloonText:
              '' +
              '<img src="/assets/img/charts/motorcycle.png" style="vertical-align:bottom' +
              ' margin-right: 10px width:28px height:21px"><span style="font-size:14px color:#000000">' +
              '<b>[[value]]</b></span>',
            fillAlphas: 0.6,
            lineAlpha: 0.4,
            title: 'Motorcycles',
            valueField: 'motorcycles'
          },
          {
            balloonText:
              '' +
              '<img src="/assets/img/charts/bicycle.png" style="vertical-align:bottom ' +
              'margin-right: 10px width:28px height:21px"><span style="font-size:14px color:#000000">' +
              '<b>[[value]]</b></span>',
            fillAlphas: 0.6,
            lineAlpha: 0.4,
            title: 'Bicycles',
            valueField: 'bicycles'
          }
        ],
        plotAreaBorderAlpha: 0,
        marginTop: 10,
        marginLeft: 0,
        marginBottom: 0,
        chartScrollbar: {},
        chartCursor: {
          cursorAlpha: 0
        },
        categoryField: 'year',
        categoryAxis: {
          startOnAxis: true,
          axisColor: '#DADADA',
          gridAlpha: 0.07,
          title: 'Year',
          guides: [
            {
              category: '2001',
              toCategory: '2003',
              lineColor: '#CC0000',
              lineAlpha: 1,
              fillAlpha: 0.2,
              fillColor: '#CC0000',
              dashLength: 2,
              inside: true,
              labelRotation: 90,
              label: 'fines for speeding increased'
            },
            {
              category: '2007',
              lineColor: '#CC0000',
              lineAlpha: 1,
              dashLength: 2,
              inside: true,
              labelRotation: 90,
              label: 'motorcycle fee introduced'
            }
          ]
        },
        export: {
          enabled: true
        }
      })
    },
  }
}
</script>
