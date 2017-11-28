<template>
    <div class="main-content">
        <div class="page-header">
            <h3 class="page-title">Chart JS</h3>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Components</a></li>
                <li class="breadcrumb-item active">Chart JS</li>
            </ol>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-body">
                        <div class="mb-4">
                            <h5 class="section-semi-title">
                                Line Chart
                            </h5>
                            <canvas id="lineChart" width="400" height="400"></canvas>
                        </div>
                        <div class="mb-4">
                            <h5 class="section-semi-title">
                                Bar Chart
                            </h5>
                            <canvas id="barChart" width="400" height="400"></canvas>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <h5 class="section-semi-title">
                                    Pie Chart
                                </h5>
                                <canvas id="pieChart" width="400" height="400"></canvas>
                            </div>
                            <div class="col-md-6 mb-4">
                                <h5 class="section-semi-title">
                                    Doughnut Chart
                                </h5>
                                <canvas id="doughnutChart" width="400" height="400"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {

        methods: {},
        mounted: function () {
            var ChartJS = function () {

                var handleLineChart = function(){

                    var ctx =  $('#lineChart');

                    var data = {
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [
                            {
                                label: "My First dataset",
                                fill: false,
                                lineTension: 0.1,
                                backgroundColor: "rgba(75,192,192,0.4)",
                                borderColor: "rgba(75,192,192,1)",
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: "rgba(75,192,192,1)",
                                pointBackgroundColor: "#fff",
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                                pointHoverBorderColor: "rgba(220,220,220,1)",
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: [65, 59, 80, 81, 56, 55, 40],
                            }
                        ]
                    };

                    var options = {
                        responsive: true,
                        maintainAspectRatio: false,
                    };

                    var myLineChart = new Chart(ctx, {
                        type: 'line',
                        data: data,
                        options: options
                    });
                };

                var handleBarChart = function(){

                    var ctx =  $('#barChart');

                    var data = {
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [
                            {
                                label: "My First dataset",
                                backgroundColor: "rgba(255,99,132,0.2)",
                                borderColor: "rgba(255,99,132,1)",
                                borderWidth: 1,
                                hoverBackgroundColor: "rgba(255,99,132,0.4)",
                                hoverBorderColor: "rgba(255,99,132,1)",
                                data: [65, 59, 80, 81, 56, 55, 40],
                            }
                        ]
                    };

                    var options = {
                        responsive: true,
                        maintainAspectRatio: false,
                    };

                    var myBarChart = new Chart(ctx, {
                        type: 'bar',
                        data: data,
                        options: options
                    });
                };

                var handlePieAndDoughnutChart = function(){

                    var data = {
                        labels: [
                            "Red",
                            "Blue",
                            "Yellow"
                        ],
                        datasets: [
                            {
                                data: [300, 50, 100],
                                backgroundColor: [
                                    "#FF6384",
                                    "#36A2EB",
                                    "#FFCE56"
                                ],
                                hoverBackgroundColor: [
                                    "#FF6384",
                                    "#36A2EB",
                                    "#FFCE56"
                                ]
                            }]
                    };

                    var pieCtx = $('#pieChart'),doughCtx = $('#doughnutChart');

                    var options = {
                        responsive: true,
                        maintainAspectRatio: false,
                    };

                    var myPieChart = new Chart(pieCtx,{
                        type: 'pie',
                        data: data,
                        options: options
                    });

                    var myDoughnutChart = new Chart(doughCtx, {
                        type: 'doughnut',
                        data: data,
                        options: options
                    });
                };

                return {
                    //main function to initiate the module
                    init: function () {
                        handleBarChart();
                        handleLineChart();
                        handlePieAndDoughnutChart();
                    }
                };

            }();

            jQuery(document).ready(function() {
                ChartJS.init();
            });
        }
    }
           </script>
