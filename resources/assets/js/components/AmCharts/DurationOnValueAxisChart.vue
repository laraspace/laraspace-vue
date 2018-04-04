<template>
  <div>
      <div
        class="amcharts"
        id="line-area-value-axis"/>
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
          vm.handleDurationOnValueAxisChart()
        }
      }
    })()
    console.log(window.image)
    this.$nextTick(() => {
      AMCharts.init()
    })
  },

  methods: {
    handleDurationOnValueAxisChart () {
      var durationOnValueAxisChart = window.AmCharts.makeChart(
        'line-area-value-axis',
        {
          type: 'serial',
          theme: 'light',
          legend: {
            equalWidths: false,
            useGraphSettings: true,
            valueAlign: 'left',
            valueWidth: 120
          },
          dataProvider: [
            {
              date: '2012-01-01',
              distance: 227,
              townName: 'New York',
              townName2: 'New York',
              townSize: 25,
              latitude: 40.71,
              duration: 408
            },
            {
              date: '2012-01-02',
              distance: 371,
              townName: 'Washington',
              townSize: 14,
              latitude: 38.89,
              duration: 482
            },
            {
              date: '2012-01-03',
              distance: 433,
              townName: 'Wilmington',
              townSize: 6,
              latitude: 34.22,
              duration: 562
            },
            {
              date: '2012-01-04',
              distance: 345,
              townName: 'Jacksonville',
              townSize: 7,
              latitude: 30.35,
              duration: 379
            },
            {
              date: '2012-01-05',
              distance: 480,
              townName: 'Miami',
              townName2: 'Miami',
              townSize: 10,
              latitude: 25.83,
              duration: 501
            },
            {
              date: '2012-01-06',
              distance: 386,
              townName: 'Tallahassee',
              townSize: 7,
              latitude: 30.46,
              duration: 443
            },
            {
              date: '2012-01-07',
              distance: 348,
              townName: 'New Orleans',
              townSize: 10,
              latitude: 29.94,
              duration: 405
            },
            {
              date: '2012-01-08',
              distance: 238,
              townName: 'Houston',
              townName2: 'Houston',
              townSize: 16,
              latitude: 29.76,
              duration: 309
            },
            {
              date: '2012-01-09',
              distance: 218,
              townName: 'Dalas',
              townSize: 17,
              latitude: 32.8,
              duration: 287
            },
            {
              date: '2012-01-10',
              distance: 349,
              townName: 'Oklahoma City',
              townSize: 11,
              latitude: 35.49,
              duration: 485
            },
            {
              date: '2012-01-11',
              distance: 603,
              townName: 'Kansas City',
              townSize: 10,
              latitude: 39.1,
              duration: 890
            },
            {
              date: '2012-01-12',
              distance: 534,
              townName: 'Denver',
              townName2: 'Denver',
              townSize: 18,
              latitude: 39.74,
              duration: 810
            },
            {
              date: '2012-01-13',
              townName: 'Salt Lake City',
              townSize: 12,
              distance: 425,
              duration: 670,
              latitude: 40.75,
              dashLength: 8,
              alpha: 0.4
            },
            {
              date: '2012-01-14',
              latitude: 36.1,
              duration: 470,
              townName: 'Las Vegas',
              townName2: 'Las Vegas'
            },
            {
              date: '2012-01-15'
            },
            {
              date: '2012-01-16'
            },
            {
              date: '2012-01-17'
            },
            {
              date: '2012-01-18'
            },
            {
              date: '2012-01-19'
            }
          ],
          valueAxes: [
            {
              id: 'distanceAxis',
              axisAlpha: 0,
              gridAlpha: 0,
              position: 'left',
              title: 'distance'
            },
            {
              id: 'latitudeAxis',
              axisAlpha: 0,
              gridAlpha: 0,
              labelsEnabled: false,
              position: 'right'
            },
            {
              id: 'durationAxis',
              duration: 'mm',
              durationUnits: {
                hh: 'h ',
                mm: 'min'
              },
              axisAlpha: 0,
              gridAlpha: 0,
              inside: true,
              position: 'right',
              title: 'duration'
            }
          ],
          graphs: [
            {
              alphaField: 'alpha',
              balloonText: '[[value]] miles',
              dashLengthField: 'dashLength',
              fillAlphas: 0.7,
              legendPeriodValueText: 'total: [[value.sum]] mi',
              legendValueText: '[[value]] mi',
              title: 'distance',
              type: 'column',
              valueField: 'distance',
              valueAxis: 'distanceAxis'
            },
            {
              balloonText: 'latitude:[[value]]',
              bullet: 'round',
              bulletBorderAlpha: 1,
              useLineColorForBulletBorder: true,
              bulletColor: '#FFFFFF',
              bulletSizeField: 'townSize',
              dashLengthField: 'dashLength',
              descriptionField: 'townName',
              labelPosition: 'right',
              labelText: '[[townName2]]',
              legendValueText: '[[value]]/[[description]]',
              title: 'latitude/city',
              fillAlphas: 0,
              valueField: 'latitude',
              valueAxis: 'latitudeAxis'
            },
            {
              bullet: 'square',
              bulletBorderAlpha: 1,
              bulletBorderThickness: 1,
              dashLengthField: 'dashLength',
              legendValueText: '[[value]]',
              title: 'duration',
              fillAlphas: 0,
              valueField: 'duration',
              valueAxis: 'durationAxis'
            }
          ],
          chartCursor: {
            categoryBalloonDateFormat: 'DD',
            cursorAlpha: 0.1,
            cursorColor: '#000000',
            fullWidth: true,
            valueBalloonsEnabled: false,
            zoomable: false
          },
          dataDateFormat: 'YYYY-MM-DD',
          categoryField: 'date',
          categoryAxis: {
            dateFormats: [
              {
                period: 'DD',
                format: 'DD'
              },
              {
                period: 'WW',
                format: 'MMM DD'
              },
              {
                period: 'MM',
                format: 'MMM'
              },
              {
                period: 'YYYY',
                format: 'YYYY'
              }
            ],
            parseDates: true,
            autoGridCount: false,
            axisColor: '#555555',
            gridAlpha: 0.1,
            gridColor: '#FFFFFF',
            gridCount: 50
          },
          export: {
            enabled: true
          }
        }
      )
    },
  }
}
</script>
