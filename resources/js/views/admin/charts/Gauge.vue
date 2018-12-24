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
        <div class="card gauge-charts">
          <div class="card-header">
            <h5>Basic Gauges</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <basic-gauge :gauge-size="'sm'"/>
              </div>
              <div class="col">
                <basic-gauge :gauge-size="'md'"/>
              </div>
              <div class="col">
                <basic-gauge :gauge-size="'lg'"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card gauge-charts">
          <div class="card-header">
            <h6>Donut</h6>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <donut-gauge :gauge-size="'sm'"/>
              </div>
              <div class="col">
                <donut-gauge :gauge-size="'md'"/>
              </div>
              <div class="col">
                <donut-gauge :gauge-size="'lg'"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="card gauge-charts">
          <div class="card-header">
            <h5>Color Gauges</h5>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col">
                <color-gauge :gauge-size="'sm'"/>
              </div>
              <div class="col">
                <color-gauge :gauge-size="'md'"/>
              </div>
              <div class="col">
                <color-gauge :gauge-size="'lg'"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BasicGauge from '../../../components/gauges/BasicGauge.vue'
import ColorGauge from '../../../components/gauges/ColorGauge.vue'
import DonutGauge from '../../../components/gauges/DonutGauge.vue'

export default {
  components: {
    BasicGauge, ColorGauge, DonutGauge
  }
}
</script>
