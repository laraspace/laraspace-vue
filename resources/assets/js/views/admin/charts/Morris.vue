<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Morris Charts</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Charts</a></li>
        <li class="breadcrumb-item active">Morris Charts</li>
      </ol>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6>Line Chart</h6>
          </div>
          <div class="card-body">
            <line-chart />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6>Area Chart</h6>
          </div>
          <div class="card-body">
            <area-chart />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6>Donut Chart</h6>
          </div>
          <div class="card-body">
            <donut-chart />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6>Bar Chart</h6>
          </div>
          <div class="card-body">
            <bar-chart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'raphael/raphael.js'
import 'requirejs/require.js'
import DonutChart from '../../../components/MorrisCharts/DonutChart.vue'
import AreaChart from '../../../components/MorrisCharts/AreaChart.vue'
import LineChart from '../../../components/MorrisCharts/LineChart.vue'
import BarChart from '../../../components/MorrisCharts/BarChart.vue'
export default {
  components:{
    DonutChart , AreaChart , LineChart ,BarChart
  }
}
</script>
