<template>
  <div class="graph-container">
    <canvas
      id="graph"
      ref="graph"/>
  </div>
</template>

<script>
window.Chart = require('chart.js')

export default {
  props: {
    labels: {
      type: String,
      require: true,
      default: ''
    },
    values: {
      type: String,
      require: true,
      default: ''
    },
    bgColors: {
      type: String,
      require: true,
      default: ''
    },
    hoverBgColors: {
      type: String,
      require: true,
      default: ''
    }
  },
  // props: ["labels", "values", "bgColors", "hoverBgColors"],

  mounted () {
    let context = this.$refs.graph.getContext('2d')
    let options = {
      responsive: true,
      maintainAspectRatio: false
    }

    let data = {
      labels: this.labels,
      datasets: [
        {
          data: this.values,
          backgroundColor: this.bgColors,
          hoverBackgroundColor: this.hoverBgColors
        }
      ]
    }

    let myDoughnutChart = new Chart(context, {
      type: 'doughnut',
      data: data,
      options: options
    })
  }
}
</script>

<style>
.graph-container {
  height: 300px;
}
</style>
