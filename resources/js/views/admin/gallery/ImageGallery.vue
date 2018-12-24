
<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Image Gallery</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Gallery</a></li>
        <li class="breadcrumb-item active">Image Gallery</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-body my-gallery">
        <gallery
          :images="images"
          :index="imgIndex"
          :options="{closeOnEscape: true,
                     closeOnSlideClick: true,
                     closeOnSwipeUpOrDown: true,
                     startSlideshow: true,
                     fullScreen: false
          }"
          @close="imgIndex = null"
        />
        <div class="image-gallery">
          <div class="row">
            <figure
              v-for="(image, bindex) in images"
              :key="bindex"
              class="col-xl-3 col-lg-4 col-md-6 col-xs-12"
            >
              <img
                :src="image"
                class="demo image img-fluid"
                @click="imgIndex = bindex"
              >
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VueGallery from 'vue-gallery'

export default {

  components: {
    gallery: VueGallery
  },
  data: function () {
    return {
      images: [
        '/assets/img/demo/gallery/1.jpg',
        '/assets/img/demo/gallery/2.jpg',
        '/assets/img/demo/gallery/3.jpg',
        '/assets/img/demo/gallery/4.jpg',
        '/assets/img/demo/gallery/5.jpg',
        '/assets/img/demo/gallery/6.jpg',
        '/assets/img/demo/gallery/7.jpg',
        '/assets/img/demo/gallery/8.jpg',
        '/assets/img/demo/gallery/9.jpg',
        '/assets/img/demo/gallery/10.jpg',
        '/assets/img/demo/gallery/11.jpg',
        '/assets/img/demo/gallery/12.jpg'
      ],
      imgIndex: null
    }
  }

}
</script>
