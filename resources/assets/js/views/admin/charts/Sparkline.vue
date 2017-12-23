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
                                    <span class="spl-chart spl-mousespeed"></span>
                                </div>
                                <div class="sparkline-chart-type">
                                    <h5 class="section-semi-title">Line Chart:</h5>
                                    <span class="spl-chart spl-line-chart"></span>
                                </div>
                                <div class="sparkline-chart-type">
                                    <h5 class="section-semi-title">Inline Chart:</h5>
                                    <span class="spl-inline">1,4,4,7,5,9,10</span>
                                </div>

                                <div class="sparkline-chart-type">
                                    <h5 class="section-semi-title">Composite Inline Chart:</h5>
                                    <span class="spl-cp-inline">8,4,0,0,0,0,1,4,4,10,10,10,10,0,0,0,4,6,5,9,10</span>
                                </div>

                                <div class="sparkline-chart-type">
                                    <h5 class="section-semi-title">Bar Charts:</h5>
                                    <span class="spl-bar-chart">6, 10, 5, 2, 0, 6, 15, 13, 1, 4, 2, 3</span>
                                </div>
                                <div class="sparkline-chart-type">
                                    <h5 class="section-semi-title">Negative Bar Charts:</h5>
                                    <span class="spl-bar-chart">5,6,7,2,0,-4,-2,4,2,4,-7,3,-3,5</span>
                                </div>
                                <div class="sparkline-chart-type">
                                    <h5 class="section-semi-title">Stacked Chart:</h5>
                                    <span class="spl-bar-chart">0:2,2:4,4:2,4:1,6:2,3:3,5:7,3,2:6</span>
                                </div>
                                <div class="sparkline-chart-type">
                                    <h5 class="section-semi-title">Composite Inline Bar Chart:</h5>
                                    <span class="spl-cp-bar-chart">4,6,7,7,4,3,2,1,4</span>
                                </div>

                                <div class="sparkline-chart-type">
                                    <h5 class="section-semi-title">Discrete Charts:</h5>
                                    <span class="spl-discreate1">4,6,7,7,4,3,2,1,4,4,5,5,8,3,3</span>
                                </div>

                                <div class="sparkline-chart-type">
                                    <h5 class="section-semi-title">Discrete with threshold:</h5>
                                    <span class="spl-discreate2">4,6,7,7,4,3,2,1,4,4,5,5,8,3,3</span>
                                </div>
                                <div class="sparkline-chart-type">
                                    <h5 class="section-semi-title">Tristate Charts:</h5>
                                    <span class="spl-tristate">1,1,0,1,-1,-1,1,-1,0,0,1,1</span>
                                </div>
                                <div class="sparkline-chart-type">
                                    <h5 class="section-semi-title">Composite Inline Bar Chart:</h5>
                                    <span class="spl-tristate-color">1,2,0,2,-1,-2,1,-2,0,0,1,1</span>
                                </div>

                                <div class="sparkline-chart-type">
                                    <h5 class="section-semi-title">Box Plot:</h5>
                                    <span class="spl-boxplot">4,27,34,52,54,59,61,68,78,82,85,87,91,93,100</span>
                                </div>
                                <div class="sparkline-chart-type">
                                    <h5 class="section-semi-title">Pre-computed box Plot:</h5>
                                    <span class="spl-boxplotraw">1, 3, 5, 8, 10, 15, 18</span>
                                </div>
                                <div class="sparkline-chart-type">
                                    <h5 class="section-semi-title">Bullet charts:</h5>
                                    <span class="spl-bullet">10,12,12,9,7</span>
                                </div>

                                <div class="sparkline-chart-type">
                                    <h5 class="section-semi-title">Pie Chart:</h5>
                                    <span class="spl-pie-chart">4,2,3</span>
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
    import 'jquery-sparkline';

    export default {
        mounted() {
            let vm = this;
            let SparklineCharts = function () {

                return {
                    //main function to initiate the module
                    init: function () {
                        vm.handledrawMouseSpeedChart();
                        vm.handlePieChart();
                        vm.handleLineChart();
                        vm.handleBarChart();
                        vm.handleCompositBarChart();
                        vm.handleCompositeInline();
                        vm.handleInlineChart();
                        vm.handleBarNegativeChart();
                        vm.handleDiscreateChart();
                        vm.handleDiscreateWithThresholdChart();
                        vm.handleTristateChart();
                        vm.handleTristateColorChart();
                        vm.handleBoxplotChart();
                        vm.handleBoxPlotRawChart();
                        vm.handleBulletChart();
                    }
                };

            }();
            this.$nextTick(() => {
                SparklineCharts.init();
            })

        },
        computed: {
            barWidth() {
                if (jquery(window).width() > 440) {
                    return jquery(window).width() / 70;
                }
                else {
                    return jquery(window).width() / 50;
                }
            },
            width() {
                if (jquery(window).width() > 440) {
                    return Math.floor((jquery(window).width()) / 5);
                }
                else {
                    return Math.floor((jquery(window).width()) / 4);
                }
            }
        },
        methods: {
            handledrawMouseSpeedChart() {
                var mrefreshinterval = 500; // update display every 500ms
                var lastmousex = -1;
                var lastmousey = -1;
                var lastmousetime;
                var mousetravel = 0;
                var mpoints = [];
                var mpoints_max = 30;
                jquery('html').mousemove(function (e) {
                    var mousex = e.pageX;
                    var mousey = e.pageY;
                    if (lastmousex > -1) {
                        mousetravel += Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
                    }
                    lastmousex = mousex;
                    lastmousey = mousey;
                });
                var mdraw = function () {
                    var md = new Date();
                    var timenow = md.getTime();
                    if (lastmousetime && lastmousetime != timenow) {
                        var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
                        mpoints.push(pps);
                        if (mpoints.length > mpoints_max)
                            mpoints.splice(0, 1);
                        mousetravel = 0;
                        jquery('.spl-mousespeed').sparkline(mpoints, {
                            width: mpoints.length * 2,
                            tooltipSuffix: ' pixels per second',
                            height: '100',
                            width: '100%'
                        });
                    }
                    lastmousetime = timenow;
                    setTimeout(mdraw, mrefreshinterval);
                };
// We could use setInterval instead, but I prefer to do it this way
                setTimeout(mdraw, mrefreshinterval);
            },

            handlePieChart() {
                jquery(".spl-pie-chart").sparkline('html', {
                    type: 'pie',
                    width: '100%',
                    height: '300'
                });
            },

            handleLineChart() {
                jquery(".spl-line-chart").sparkline([5, 6, 7, 9, 9, 5, 3, 2, 2, 4, 6, 7], {
                    type: 'line',
                    width: '100%',
                    height: '100'
                });
            },

            handleBarChart() {
                jquery(".spl-bar-chart").sparkline('html', {
                    type: 'bar',
                    height: '100',
                    barWidth: this.barWidth,
                    barSpacing: 3,
                });

            },

            handleCompositBarChart() {
                jquery('.spl-cp-bar-chart').sparkline('html', {
                    type: 'bar',
                    barColor: '#aaf',
                    height: '100',
                    barWidth: this.barWidth,
                    barSpacing: 3
                });
                jquery('.spl-cp-bar-chart').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
                    composite: true,
                    fillColor: false,
                    lineColor: 'red',
                    width: '100%',
                    height: '100',
                });
            },

            handleCompositeInline() {
                jquery('.spl-cp-inline').sparkline('html', {
                    fillColor: false,
                    changeRangeMin: 0,
                    chartRangeMax: 10,
                    width: '100%',
                    height: '100'
                });

                jquery('.spl-cp-inline').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
                    composite: true,
                    fillColor: false,
                    lineColor: 'red',
                    changeRangeMin: 0,
                    chartRangeMax: 10,
                    width: '100%',
                    height: '100'
                });
            },

            handleInlineChart() {
                jquery('.spl-inline').sparkline('html', {
                    width: '100%',
                    height: '100'
                });
            },

            handleBarNegativeChart() {
                jquery('.spl-bar-negative').sparkline('html', {
                    type: 'bar',
                    barWidth: '100%',
                    barSpacing: 3,
                    height: '100'
                });
            },

            handleDiscreateChart() {
                jquery(".spl-discreate1").sparkline('html', {
                    type: 'discrete',
                    height: '100',
                    width: this.width,
                });
            },

            handleDiscreateWithThresholdChart() {
                jquery('.spl-discreate2').sparkline('html', {
                    type: 'discrete',
                    lineColor: 'blue',
                    thresholdColor: 'red',
                    thresholdValue: 4,
                    width: this.width,
                    height: '100'
                });
            },

            handleTristateChart() {
                jquery(".spl-tristate").sparkline('html', {
                    type: 'tristate',
                    barWidth: this.barWidth,
                    barSpacing: 3,
                    height: '100'
                });
            },

            handleTristateColorChart() {
                jquery('.spl-tristate-color').sparkline('html', {
                    type: 'tristate',
                    colorMap: {'-2': '#fa7', '2': '#44f'},
                    barWidth: this.barWidth,
                    barSpacing: 3,
                    height: '100'
                });
            },

            handleBoxplotChart() {
                jquery('.spl-boxplot').sparkline('html', {
                    type: 'box',
                    target: 6,
                    width: '80%',
                    height: '70'
                });
            },

            handleBoxPlotRawChart() {
                jquery('.spl-boxplotraw').sparkline('html', {
                    type: 'box',
                    raw: true,
                    showOutliers: true,
                    target: 6,
                    width: '80%',
                    height: '70'
                });
            },

            handleBulletChart() {
                jquery('.spl-bullet').sparkline('html', {
                    type: 'bullet',
                    width: '80%',
                    height: '30'
                });

            },
        }
    }
</script>
