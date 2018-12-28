<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Chart JS</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Charts</a></li>
        <li class="breadcrumb-item active">Chart JS</li>
      </ol>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6>Chartjs</h6>
          </div>
          <div class="card-body">
            <div class="mb-4">
              <h5 class="section-semi-title">
                Line Chart
              </h5>
              <line-chart
                :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                :values="[65, 59, 80, 81, 56, 55, 40]"
              />
            </div>
            <div class="mb-4">
              <h5 class="section-semi-title">
                Bar Chart
              </h5>
              <bar-chart
                :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
                :values="[65, 59, 80, 81, 56, 55, 40]"
              />
            </div>
            <div class="row">
              <div class="col-md-6 mb-4">
                <h5 class="section-semi-title">
                  Pie Chart
                </h5>
                <pie-chart
                  :labels="pieAndDoughtnut.labels"
                  :values="pieAndDoughtnut.data"
                  :bg-colors="pieAndDoughtnut.bgColors"
                  :hover-bg-colors="pieAndDoughtnut.hoverBgColors"
                />
              </div>
              <div class="col-md-6 mb-4">
                <h5 class="section-semi-title">
                  Doughnut Chart
                </h5>
                <doughnut-chart
                  :labels="pieAndDoughtnut.labels"
                  :values="pieAndDoughtnut.data"
                  :bg-colors="pieAndDoughtnut.bgColors"
                  :hover-bg-colors="pieAndDoughtnut.hoverBgColors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
import LineChart from '../../../components/chartjs/LineChart.vue'
import BarChart from '../../../components/chartjs/BarChart.vue'
import PieChart from '../../../components/chartjs/PieChart.vue'
import DoughnutChart from '../../../components/chartjs/DoughnutGraph.vue'

export default {
  components: {
    LineChart,
    BarChart,
    PieChart,
    DoughnutChart
  },
  data () {
    return {
      pieAndDoughtnut: {
        labels: ['Red', 'Blue', 'Yellow'],
        data: [300, 50, 100],
        bgColors: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBgColors: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ]
      }
    }
  }
}
</script>
