<template>
    <div class="graph-container">
        <canvas id="graph" ref="graph"></canvas>
    </div>
</template>

<script>
    import Chart from 'chart.js';

    export default {

        props: [
            'labels',
            'values',
            'bgColors',
            'hoverBgColors'
        ],

        mounted: function () {

            var context = this.$refs.graph.getContext('2d');

            var options = {
                responsive: true,
                maintainAspectRatio: false,
            };

            var data = {
                labels: this.labels,
                datasets: [
                    {
                        data: this.values,
                        backgroundColor: this.bgColors,
                        hoverBackgroundColor: this.hoverBgColors
                    }]
            };

            var myDoughnutChart = new Chart(context, {
                type: 'doughnut',
                data: data,
                options: options
            });
        }
    }
</script>

<style>
    .graph-container {
        height: 300px;
    }
</style>
