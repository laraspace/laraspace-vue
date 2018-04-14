<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Gauge Charts</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Charts</a></li>
        <li class="breadcrumb-item active">Gauge Charts</li>
      </ol>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h5>Basic Gauges</h5>
          </div>
          <div class="card-body">
            <basic-gauge/>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h6>Donut</h6>
          </div>
          <div class="card-body">
            <donut-gauge />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card">
          <div class="card-header">
            <h5>Color Gauges</h5>
          </div>
          <div class="card-body">
            <color-gauge />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicGauge from '../../../components/Gauges/BasicGauge.vue'
import ColorGauge from '../../../components/Gauges/ColorGauge.vue'
import DonutGauge from '../../../components/Gauges/DonutGauge.vue'


export default {
 components:{
   BasicGauge , ColorGauge , DonutGauge
 }
}
</script>
