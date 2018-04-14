<template>
<div>
  <div
    class="amcharts"
    id="3d-cylinder-chart">
  </div>
   <div class="row chart-controls">
    <div class="col-md-3">
      <label class="section-semi-title">Top Radius:</label>
      <input
        class="cylinder_chart_input"
        data-property="topRadius"
        type="range"
        min="0"
        max="1.5"
        value="1"
        step="0.01" >
    </div>
    <div class="col-md-3">
      <label class="section-semi-title">Angle:</label>
      <input
        class="cylinder_chart_input"
        data-property="angle"
        type="range"
        min="0"
        max="89"
        value="30"
        step="1">
    </div>
    <div class="col-md-3">
      <label class="section-semi-title">Depth:</label>
      <input
        class="cylinder_chart_input"
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
import AmCharts from "amcharts3";
import "amcharts3/amcharts/serial";
import "amcharts3/amcharts/pie";
import "amcharts3/amcharts/xy";
import "amcharts3/amcharts/radar";
import "amcharts3/amcharts/themes/light";
import "ammap3";
import "ammap3/ammap/maps/js/worldLow";
import "amstock3/amcharts/amstock";
import "amcharts3/amcharts/plugins/animate/animate";
import "amcharts3/amcharts/plugins/export/export";
import "amcharts3/amcharts/images/dragIconRoundBig.svg";
import "amcharts3/amcharts/images/dragIconRoundBigH.svg";
import "amcharts3/amcharts/images/lens.svg";
export default {
  mounted() {
    let vm = this;
    let AMCharts = (function() {
      return {
        init: function() {
          vm.handle3dCylinderChart();
        }
      };
    })();
    console.log(window.image);
    this.$nextTick(() => {
      AMCharts.init();
    });
  },

  methods: {
    handle3dCylinderChart() {
      var cylinderChart = window.AmCharts.makeChart(
        "3d-cylinder-chart",
        {
          theme: "light",
          type: "serial",

          startDuration: 2,
          dataProvider: [
            {
              country: "USA",
              visits: 4025,
              color: "#FF0F00"
            },
            {
              country: "China",
              visits: 1882,
              color: "#FF6600"
            },
            {
              country: "Japan",
              visits: 1809,
              color: "#FF9E01"
            },
            {
              country: "Germany",
              visits: 1322,
              color: "#FCD202"
            },
            {
              country: "UK",
              visits: 1122,
              color: "#F8FF01"
            },
            {
              country: "France",
              visits: 1114,
              color: "#B0DE09"
            },
            {
              country: "India",
              visits: 984,
              color: "#04D215"
            },
            {
              country: "Spain",
              visits: 711,
              color: "#0D8ECF"
            },
            {
              country: "Netherlands",
              visits: 665,
              color: "#0D52D1"
            },
            {
              country: "Russia",
              visits: 580,
              color: "#2A0CD0"
            },
            {
              country: "South Korea",
              visits: 443,
              color: "#8A0CCF"
            },
            {
              country: "Canada",
              visits: 441,
              color: "#CD0D74"
            },
            {
              country: "Brazil",
              visits: 395,
              color: "#754DEB"
            },
            {
              country: "Italy",
              visits: 386,
              color: "#DDDDDD"
            },
            {
              country: "Taiwan",
              visits: 338,
              color: "#333333"
            }
          ],
          valueAxes: [
            {
              position: "left",
              axisAlpha: 0,
              gridAlpha: 0
            }
          ],
          graphs: [
            {
              balloonText: "[[category]]: <b>[[value]]</b>",
              colorField: "color",
              fillAlphas: 0.85,
              lineAlpha: 0.1,
              type: "column",
              topRadius: 1,
              valueField: "visits"
            }
          ],
          depth3D: 40,
          angle: 30,
          chartCursor: {
            categoryBalloonEnabled: false,
            cursorAlpha: 0,
            zoomable: false
          },
          categoryField: "country",
          categoryAxis: {
            gridPosition: "start",
            axisAlpha: 0,
            gridAlpha: 0
          },
          export: {
            enabled: true
          }
        },
        0
      );
      jQuery(".cylinder_chart_input")
        .off()
        .on("input change", function() {
          var t = jQuery(this).data("property");
          var a = cylinderChart((cylinderChart.startDuration = 0));
          var topRadius =
            t && (a = cylinderChart.graphs[0])((a[t] = this.value));
          cylinderChart.validateNow();
        });
    }
  }
};
</script>
