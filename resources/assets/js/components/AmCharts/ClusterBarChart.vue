<template>
  <div>
    <div
      class="amcharts"
      id="clust-bar-chart"/>
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
          vm.handleClusterBarChart()
        }
      }
    })()
    console.log(window.image)
    this.$nextTick(() => {
      AMCharts.init()
    })
  },

  methods: {
    handleClusterBarChart () {
      var clusterBarChart = window.AmCharts.makeChart('clust-bar-chart', {
        type: 'serial',
        categoryField: 'year',
        theme: 'light',
        rotate: true,
        startDuration: 1,
        categoryAxis: {
          gridPosition: 'start',
          position: 'left'
        },
        trendLines: [],
        graphs: [
          {
            balloonText: 'Income:[[value]]',
            fillAlphas: 0.8,
            id: 'AmGraph-1',
            lineAlpha: 0.2,
            title: 'Income',
            type: 'column',
            valueField: 'income'
          },
          {
            balloonText: 'Expenses:[[value]]',
            fillAlphas: 0.8,
            id: 'AmGraph-2',
            lineAlpha: 0.2,
            title: 'Expenses',
            type: 'column',
            valueField: 'expenses'
          }
        ],
        guides: [],
        valueAxes: [
          {
            id: 'ValueAxis-1',
            position: 'top',
            axisAlpha: 0
          }
        ],
        allLabels: [],
        balloon: {},
        titles: [],
        dataProvider: [
          {
            year: 2005,
            income: 23.5,
            expenses: 18.1
          },
          {
            year: 2006,
            income: 26.2,
            expenses: 22.8
          },
          {
            year: 2007,
            income: 30.1,
            expenses: 23.9
          },
          {
            year: 2008,
            income: 29.5,
            expenses: 25.1
          },
          {
            year: 2009,
            income: 24.6,
            expenses: 25
          }
        ],
        export: {
          enabled: true
        }
      })
    },
  }
}
</script>
