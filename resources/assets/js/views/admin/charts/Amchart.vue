<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">AM Charts</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Charts</a></li>
        <li class="breadcrumb-item active">AM Charts</li>
      </ol>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h6>Column and Line Chart</h6>
          </div>
          <div class="card-body">
            <column-and-line-chart/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h6>Clustered Bar Chart</h6>
          </div>
          <div class="card-body">
              <cluster-bar-chart></cluster-bar-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h6>Duration on Value Axis Chart</h6>
          </div>
          <div class="card-body">
              <duration-on-value-axis-chart/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h6>Stacked Area Chart</h6>
          </div>
          <div class="card-body">
            <stack-area-chart/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h6>3D Cylinder Chart</h6>
          </div>
          <div class="card-body">
            <cylinder3-d></cylinder3-d>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h6>Animated Time-Line Pie Chart</h6>
          </div>
          <div class="card-body">
            <animated-time-line-pie-chart></animated-time-line-pie-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-header">
              <h6>3D Donut Chart</h6>
            </div>
            <div class="card-body">
              <donut-chart></donut-chart>
            </div>
          </div>
        </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h6>Radar Chart</h6>
          </div>
          <div class="card-body">
            <radar-chart/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h6>Animations along lines Map</h6>
          </div>
          <div class="card-body">
            <animations-along-lines-map></animations-along-lines-map>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h6>Capitals map</h6>
          </div>
          <div class="card-body">
            <capitals-map></capitals-map>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h6>Zoomable Bubble & XY Chart</h6>
          </div>
          <div class="card-body">
            <zoomable-bubble-and-x-y-chart></zoomable-bubble-and-x-y-chart>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-header">
            <h6>Multiple Data Sets Stock Chart</h6>
          </div>
          <div class="card-body">
            <multiple-data-sets-stock-chart/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Cylinder3D from '../../../components/Amcharts/3dCylinderChart.vue'
import DonutChart from '../../../components/Amcharts/3dDonutChart.vue'
import CapitalsMap from '../../../components/Amcharts/CapitalsMap.vue'
import ClusterBarChart from '../../../components/Amcharts/ClusterBarChart.vue'
import RadarChart from '../../../components/Amcharts/RadarChart.vue'
import StackAreaChart from '../../../components/Amcharts/StackAreaChart.vue'
import ZoomableBubbleAndXYChart from '../../../components/Amcharts/ZoomableBubbleAndXYChart.vue'
import DurationOnValueAxisChart from '../../../components/Amcharts/DurationOnValueAxisChart.vue'
import MultipleDataSetsStockChart from '../../../components/Amcharts/MultipleDataSetsStockChart.vue'
import ColumnAndLineChart from '../../../components/Amcharts/ColumnAndLineChart.vue'
import AnimatedTimeLinePieChart from '../../../components/Amcharts/AnimatedTimeLinePieChart.vue'
import AnimationsAlongLinesMap from '../../../components/Amcharts/AnimationsAlongLinesMap.vue'
export default {
  components: {
    Cylinder3D, StackAreaChart ,ZoomableBubbleAndXYChart, DonutChart , AnimatedTimeLinePieChart ,MultipleDataSetsStockChart,RadarChart,AnimationsAlongLinesMap,DurationOnValueAxisChart ,ColumnAndLineChart , CapitalsMap , ClusterBarChart
  }
}
</script>