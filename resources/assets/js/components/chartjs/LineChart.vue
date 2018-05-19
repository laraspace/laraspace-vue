<template>
  <div class="graph-container">
    <canvas id="graph" ref="graph"/>
  </div>
</template>

<script>
import Chart from 'chart.js'

export default {
  props: {
    labels: {
      type: Array,
      require: true,
      default: Array
    },
    values: {
      type: Array,
      require: true,
      default: Array
    }
  },

  mounted () {
    let context = this.$refs.graph.getContext('2d')
    let options = {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      }
    }
    let data = {
      labels: this.labels,
      datasets: [
        {
          label: 'Sales',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(0,125,204,0.4)',
          borderColor: 'rgba(0,125,204,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: this.values
        }
      ]
    }

    this.myLineChart = new Chart(context, {
      type: 'line',
      data: data,
      options: options
    })
  },

  beforeDestroy () {
    this.myLineChart.destroy()
  }
}
</script>

<style scoped>
.graph-container {
  height: 300px;
}
</style>
