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
            <img
              src="/assets/img/demo/gallery/13.jpg"
              >
          </slide>
          <slide>
            <img
              src="/assets/img/demo/gallery/16.jpg"
              >
          </slide>
          <slide>
            <img
              src="/assets/img/demo/gallery/15.jpg"
              >
          </slide>
          <slide>
            <img
              src="/assets/img/demo/gallery/16.jpg"
              >
          </slide>
          <slide>
            <img
              src="/assets/img/demo/gallery/13.jpg"
              >
          </slide>
          <slide>
            <img
              src="/assets/img/demo/gallery/15.jpg"
            >
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
