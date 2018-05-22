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
        <div class="row">
          <div class="col-sm-12">
            <h5 class="section-semi-title">Basic</h5>
            <carousel :minSwipeDistance="2" :perPageCustom="[[480, 2],[768, 3]]">
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
            <carousel :scrollPerPage="true" :perPageCustom="[[320, 1],[768, 2],[992, 3]]">
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
            <carousel :autoplay="true" :loop="true" :perPageCustom="[[480, 2],[768, 3]]">
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
            <carousel :navigationEnabled="true" :navigationClickTargetSize="5" :perPageCustom="[[480, 2],[768, 3],[992, 3]]">
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
<style>
/* .VueCarousel-slide {
  position: relative;
  text-align: center;
  min-height: 100px !important;
} */

</style>
