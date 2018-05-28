<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Vue Carousel</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item active">Vue Carousel</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-12">
            <h5 class="section-semi-title">Basic</h5>
            <carousel :min-swipe-distance="2" :per-page-custom="[[480, 2],[768, 3], [992, 4]]">
              <slide>
                <img src="/assets/img/demo/gallery/1.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/2.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/3.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/4.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/5.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/6.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/7.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/8.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/9.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/10.jpg" class="img-fluid">
              </slide>
            </carousel>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-sm-12">
            <h5 class="section-semi-title">Responsive</h5>
            <carousel :scroll-per-page="true" :per-page-custom="[[320, 2],[768, 3],[992, 4]]">
              <slide>
                <img src="/assets/img/demo/gallery/11.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/12.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/9.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/4.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/3.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/6.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/2.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/8.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/1.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/10.jpg" class="img-fluid">
              </slide>
            </carousel>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-sm-12">
            <h5 class="section-semi-title">Auto Play</h5>
            <carousel
              :autoplay="true"
              :loop="true"
              :per-page-custom="[[480, 2],[768, 3], [992, 4]]"
            >
              <slide>
                <img src="/assets/img/demo/gallery/9.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/5.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/1.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/7.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/3.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/8.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/2.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/6.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/4.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/10.jpg" class="img-fluid">
              </slide>
            </carousel>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-sm-12">
            <h5 class="section-semi-title">Navigation</h5>
            <carousel
              :navigation-enabled="true"
              :navigation-click-target-size="5"
              :per-page-custom="[[480, 2],[768, 3],[992, 4]]"
              class="with-nav"
            >
              <slide>
                <img src="/assets/img/demo/gallery/4.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/8.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/10.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/12.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/5.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/11.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/2.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/8.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/1.jpg" class="img-fluid">
              </slide>
              <slide>
                <img src="/assets/img/demo/gallery/6.jpg" class="img-fluid">
              </slide>
            </carousel>
          </div>
        </div>
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
