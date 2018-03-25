<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Vue Carousel</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item active">vue-carousel</li>
      </ol>
    </div>
      <div class="card">
          <div class="card-body">
            <carousel>
              <slide>
                <img src="/images/vendor/vue-carousel/slide1.jpg" style="height: 100%;">
              </slide>
              <slide>
                <img src="/images/vendor/vue-carousel/slide2.jpg" style="height: 100%;">
              </slide>
              <slide>
                <img src="/images/vendor/vue-carousel/slide3.jpg" style="height: 100%;">
              </slide>
              <slide>
                <img src="/images/vendor/vue-carousel/slide4.jpg" style="height: 100%;">
              </slide>
              <slide>
                <img src="/images/vendor/vue-carousel/slide5.jpg" style="height: 100%;">
              </slide>
              <slide>
                <img src="/images/vendor/vue-carousel/slide6.jpg" style="height: 100%;">
              </slide>
            </carousel>
          </div>
        </div>
      </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
 components: {
    Carousel,
    Slide
  }
}
</script>

<style>

</style>
