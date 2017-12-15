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
                    <div class="card-block">
                        <div class="morris" id="morris-line-chart"></div>
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
                    <div class="card-block">
                        <div class="morris" id="morris-area-chart"></div>
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
                    <div class="card-block">
                        <div class="morris" id="morris-donut-chart"></div>
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
                    <div class="card-block">
                        <div class="morris" id="morris-bar-chart"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Morris from 'morris.js/morris';
    import 'morris.js/morris.css';

    export default {

        mounted() {
            let vm = this;
            let MorrisChart = function () {
                return {
                    //main function to initiate the module
                    init: function () {
                        vm.handleLineChart();
                        vm.handleAreaChart();
                        vm.handleBarChart();
                        vm.handleDonutChart();
                    }
                };
            }();
            this.$nextTick(() => {
                MorrisChart.init();
            });
        },
        methods: {
            //Handle Line Chart
            handleLineChart() {

                window.Morris.Line({
                    element: 'morris-line-chart',
                    data: [
                        {
                            PERIOD: '2011 Q1'
                            , Iphone: 2666
                            , Ipad: 1791
                            , Itouch: 2647
                        }
                        , {
                            PERIOD: '2011 Q2'
                            , Iphone: 2778
                            , Ipad: 2294
                            , Itouch: 2441
                        }
                        , {
                            PERIOD: '2011 Q3'
                            , Iphone: 4912
                            , Ipad: 1969
                            , Itouch: 2501
                        }
                        , {
                            PERIOD: '2011 Q4'
                            , Iphone: 3767
                            , Ipad: 3597
                            , Itouch: 5689
                        }
                        , {
                            PERIOD: '2012 Q1'
                            , Iphone: 6810
                            , Ipad: 1914
                            , Itouch: 2293
                        }
                        , {
                            PERIOD: '2012 Q2'
                            , Iphone: 5670
                            , Ipad: 4293
                            , Itouch: 1881
                        }
                        , {
                            PERIOD: '2012 Q3'
                            , Iphone: 4820
                            , Ipad: 3795
                            , Itouch: 1588
                        }
                        , {
                            PERIOD: '2012 Q4'
                            , Iphone: 15073
                            , Ipad: 5967
                            , Itouch: 5175
                        }
                        , {
                            PERIOD: '2013 Q1'
                            , Iphone: 10687
                            , Ipad: 4460
                            , Itouch: 2028
                        }
                        , {
                            PERIOD: '2013 Q2'
                            , Iphone: 8432
                            , Ipad: 5713
                            , Itouch: 5713
                        }
                    ],
                    xkey: 'PERIOD',
                    ykeys: ['Iphone', 'Ipad', 'Itouch'],
                    labels: ['Iphone', 'Ipad', 'Itouch'],
                    hideHover: true,
                    resize: true
                });
            },

            //Handle Area Chart
            handleAreaChart() {

                window.Morris.Area({
                    element: 'morris-area-chart',
                    data: [
                        {
                            PERIOD: '2011 Q1'
                            , Iphone: 2666
                            , Ipad: 1791
                            , Itouch: 2647
                        }
                        , {
                            PERIOD: '2011 Q2'
                            , Iphone: 2778
                            , Ipad: 2294
                            , Itouch: 2441
                        }
                        , {
                            PERIOD: '2011 Q3'
                            , Iphone: 4912
                            , Ipad: 1969
                            , Itouch: 2501
                        }
                        , {
                            PERIOD: '2011 Q4'
                            , Iphone: 3767
                            , Ipad: 3597
                            , Itouch: 5689
                        }
                        , {
                            PERIOD: '2012 Q1'
                            , Iphone: 6810
                            , Ipad: 1914
                            , Itouch: 2293
                        }
                        , {
                            PERIOD: '2012 Q2'
                            , Iphone: 5670
                            , Ipad: 4293
                            , Itouch: 1881
                        }
                        , {
                            PERIOD: '2012 Q3'
                            , Iphone: 4820
                            , Ipad: 3795
                            , Itouch: 1588
                        }
                        , {
                            PERIOD: '2012 Q4'
                            , Iphone: 15073
                            , Ipad: 5967
                            , Itouch: 5175
                        }
                        , {
                            PERIOD: '2013 Q1'
                            , Iphone: 10687
                            , Ipad: 4460
                            , Itouch: 2028
                        }
                        , {
                            PERIOD: '2013 Q2'
                            , Iphone: 8432
                            , Ipad: 5713
                            , Itouch: 5713
                        }
                    ],
                    xkey: 'PERIOD',
                    ykeys: ['Iphone', 'Ipad', 'Itouch'],
                    labels: ['Iphone', 'Ipad', 'Itouch'],
                    pointSize: 4,
                    hideHover: true,
                    resize: true
                });
            },

            //Handle Bar Chart
            handleBarChart() {

                window.Morris.Bar({
                    element: 'morris-bar-chart',
                    data: [
                        {
                            PERIOD: '2011 Q1'
                            , Iphone: 2666
                            , Ipad: 1791
                            , Itouch: 2647
                        }
                        , {
                            PERIOD: '2011 Q2'
                            , Iphone: 2778
                            , Ipad: 2294
                            , Itouch: 2441
                        }
                        , {
                            PERIOD: '2011 Q3'
                            , Iphone: 4912
                            , Ipad: 1969
                            , Itouch: 2501
                        }
                        , {
                            PERIOD: '2011 Q4'
                            , Iphone: 3767
                            , Ipad: 3597
                            , Itouch: 5689
                        }
                        , {
                            PERIOD: '2012 Q1'
                            , Iphone: 6810
                            , Ipad: 1914
                            , Itouch: 2293
                        }
                        , {
                            PERIOD: '2012 Q2'
                            , Iphone: 5670
                            , Ipad: 4293
                            , Itouch: 1881
                        }
                        , {
                            PERIOD: '2012 Q3'
                            , Iphone: 4820
                            , Ipad: 3795
                            , Itouch: 1588
                        }
                        , {
                            PERIOD: '2012 Q4'
                            , Iphone: 15073
                            , Ipad: 5967
                            , Itouch: 5175
                        }
                        , {
                            PERIOD: '2013 Q1'
                            , Iphone: 10687
                            , Ipad: 4460
                            , Itouch: 2028
                        }
                        , {
                            PERIOD: '2013 Q2'
                            , Iphone: 8432
                            , Ipad: 5713
                            , Itouch: 5713
                        }
                    ],
                    xkey: 'PERIOD',
                    ykeys: ['Iphone', 'Ipad', 'Itouch'],
                    labels: ['Iphone', 'Ipad', 'Itouch'],
                    hideHover: true,
                    resize: true
                });
            },

            //Handle Donut Chart
            handleDonutChart() {

                window.Morris.Donut({
                    element: 'morris-donut-chart',
                    data: [
                        {
                            label: 'iphone'
                            , value: 65615
                        }
                        , {
                            label: 'itouch'
                            , value: 31956
                        }
                        , {
                            label: 'ipad'
                            , value: 35793
                        }
                    ],
                    resize: true
                });
            },
        },
    }
</script>
