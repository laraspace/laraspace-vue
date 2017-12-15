<template>
    <div class="main-content">
        <div class="page-header">
            <h3 class="page-title">Graphs</h3>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Components</a></li>
                <li class="breadcrumb-item active">Graphs</li>
            </ol>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <h6>Chartjs</h6>
                    </div>
                    <div class="card-block">
                        <div class="mb-4">
                            <h5 class="section-semi-title">
                                Line Chart
                            </h5>
                            <line-graph :labels="['Jan','Feb','Mar','June']" :values="[20,30,40,60]"></line-graph>
                        </div>
                        <div class="mb-4">
                            <h5 class="section-semi-title">
                                Bar Chart
                            </h5>
                            <bar-graph :labels="['Jan','Feb','Mar','June']" :values="[20,30,40,60]"></bar-graph>
                        </div>
                        <div class="row">
                            <div class="col-md-6 mb-4">
                                <h5 class="section-semi-title">
                                    Pie Chart
                                </h5>
                                <pie-graph
                                        :labels="pieAndDoughtnut.labels"
                                        :values="pieAndDoughtnut.data"
                                        :bg-colors="pieAndDoughtnut.bgColors"
                                        :hover-bg-colors="pieAndDoughtnut.hoverBgColors"
                                ></pie-graph>
                            </div>
                            <div class="col-md-6 mb-4">
                                <h5 class="section-semi-title">
                                    Doughnut Chart
                                </h5>
                                <doughnut-graph
                                        :labels="pieAndDoughtnut.labels"
                                        :values="pieAndDoughtnut.data"
                                        :bg-colors="pieAndDoughtnut.bgColors"
                                        :hover-bg-colors="pieAndDoughtnut.hoverBgColors"
                                ></doughnut-graph>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">

    import LineGraph from '../../../components/LineGraph.vue'
    import BarGraph from '../../../components/BarGraph.vue'
    import PieGraph from '../../../components/PieGraph.vue'
    import DoughnutGraph from '../../../components/DoughnutGraph.vue'

    export default {
        data() {
            return {
                pieAndDoughtnut : {
                    labels : ['Red','Blue','Yellow'],
                    data : [300, 50, 100],
                    bgColors : [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ],
                    hoverBgColors : [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }
            }
        },
        components : {
            LineGraph , BarGraph , PieGraph , DoughnutGraph
        }
    }
</script>