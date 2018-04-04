<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Sparkline Charts</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Charts</a></li>
        <li class="breadcrumb-item active">Sparkline Charts</li>
      </ol>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="sparkline-chart">
              <div class="row">
                <div class="sparkline-chart-type">
                  <h5 class="section-semi-title">Mouse Speed:</h5>
                  <mouse-speed/>
                </div>
                <div class="sparkline-chart-type">
                  <h5 class="section-semi-title">Line Chart:</h5>
                  <line-chart/>
                </div>
                <div class="sparkline-chart-type">
                  <h5 class="section-semi-title">Inline Chart:</h5>
                  <inline-chart/>
                </div>

                <div class="sparkline-chart-type">
                  <h5 class="section-semi-title">Composite Inline Chart:</h5>
                    <composite-inline-chart/>
                </div>

                <div class="sparkline-chart-type">
                  <h5 class="section-semi-title">Bar Charts:</h5>
                  <bar-chart/>
                </div>
                <div class="sparkline-chart-type">
                  <h5 class="section-semi-title">Negative Bar Charts:</h5>
                  <negative-bar-chart/>
                </div>
                <div class="sparkline-chart-type">
                  <h5 class="section-semi-title">Stacked Chart:</h5>
                  <stacked-chart/>
                </div>
                <div class="sparkline-chart-type">
                  <h5 class="section-semi-title">Composite Inline Bar Chart:</h5>
                  <composite-inline-bar-chart/>
                </div>

                <div class="sparkline-chart-type">
                  <h5 class="section-semi-title">Discrete Charts:</h5>
                  <discrete-chart/>
                </div>

                <div class="sparkline-chart-type">
                  <h5 class="section-semi-title">Discrete with threshold:</h5>
                  <discrete-with-threshold/>
                </div>
                <div class="sparkline-chart-type">
                  <h5 class="section-semi-title">Tristate Charts:</h5>
                  <tristate-chart/>
                </div>
                <div class="sparkline-chart-type">
                  <h5 class="section-semi-title">Composite Inline Bar Chart Color:</h5>
                  <tristate-color-chart/>
                </div>

                <div class="sparkline-chart-type">
                  <h5 class="section-semi-title">Box Plot:</h5>
                  <box-plot/>
                </div>
                <div class="sparkline-chart-type">
                  <h5 class="section-semi-title">Pre-computed box Plot:</h5>
                  <pre-computed-box-plot/>
                </div>
                <div class="sparkline-chart-type">
                  <h5 class="section-semi-title">Bullet charts:</h5>
                  <bullet-chart/>
                </div>

                <div class="sparkline-chart-type">
                  <h5 class="section-semi-title">Pie Chart:</h5>
                  <pie-chart/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '../../../components/SparkLineChart/BarChart.vue'
import BoxPlot from '../../../components/SparkLineChart/BoxPlot.vue'
import BulletChart from '../../../components/SparkLineChart/BulletChart.vue'
import CompositeInlineBarChart from '../../../components/SparkLineChart/CompositeInlineBarChart.vue'
import TristateColorChart from '../../../components/SparkLineChart/TristateColorChart.vue'
import CompositeInlineChart from '../../../components/SparkLineChart/CompositeInlineChart.vue'
import DiscreteChart from '../../../components/SparkLineChart/DiscreteChart.vue'
import DiscreteWithThreshold from '../../../components/SparkLineChart/DiscreteWithThreshold.vue'
import InlineChart from '../../../components/SparkLineChart/InlineChart.vue'
import LineChart from '../../../components/SparkLineChart/LineChart.vue'
import MouseSpeed from '../../../components/SparkLineChart/MouseSpeed.vue'
import NegativeBarChart from '../../../components/SparkLineChart/NegativeBarChart.vue'
import PieChart from '../../../components/SparkLineChart/PieChart.vue'
import PreComputedBoxPlot from '../../../components/SparkLineChart/PreComputedBoxPlot.vue'
import StackedChart from '../../../components/SparkLineChart/StackedChart.vue'
import TristateChart from '../../../components/SparkLineChart/TristateChart.vue'

export default {
  components:{
    NegativeBarChart,PieChart,PreComputedBoxPlot,StackedChart,TristateChart,BarChart,BoxPlot,MouseSpeed,CompositeInlineBarChart,LineChart,InlineChart,DiscreteWithThreshold,DiscreteChart,CompositeInlineChart,BulletChart,TristateColorChart
  }
}
</script>
