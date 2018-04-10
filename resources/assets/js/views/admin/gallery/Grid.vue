
<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Gallery Grid</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Gallery</a></li>
        <li class="breadcrumb-item active">Gallery Grid</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Image Gallery</h6>
      </div>
      <div class="card-body">
        <gallery
          :images="images"
          :index="imgIndex"
          @close="imgIndex = null"/>
        <div
          class="my-gallery image-gallery">
          <div class="row">
            <figure
              v-for="(image, bindex) in images"
              :key="bindex"
              class="col-lg-3 col-md-6 col-xs-12">
              <img
                :style="{ backgroundImage: 'url(' + image + ')', width: '480px', height:'280px' }"
                class="image img-fluid"
                @click="imgIndex = bindex">
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Vimeo Video Gallery</h6>
      </div>
      <!-- <div class="card-body">
        <gallery
          :images="videos"
          :index="vidIndex"
          :options="{youTubeVideoIdProperty: 'youtube', youTubePlayerVars: undefined, youTubeClickToPlay: true}"
          @close="vidIndex = null"/>
        <div
          class="my-gallery youtube-video-gallery">
          <div class="row">
            <div class="col-lg-3 col-md-6 ">
              <div
                v-for="(video, aindex) in videos"
                :style="{ backgroundImage: 'url(' + video.poster + ')', width: '300px', height: '200px' }"
                class="my-gallery youtube-video-gallery"
                @click="vidIndex = aindex"/>
            </div>
          </div>
        </div>
      </div> -->
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
      // videos: [
      //   {
      //     title: 'A YouYube video',
      //     href: 'https://www.youtube.com/watch?v=hNdlUHBJDKs',
      //     type: 'text/html',
      //     youtube: 'hNdlUHBJDKs',
      //     poster: 'https://img.youtube.com/vi/hNdlUHBJDKs/maxresdefault.jpg'
      //   },
      //   {
      //     title: 'A YouYube video 2',
      //     href: 'https://www.youtube.com/watch?v=s5iUsaPPtnk',
      //     type: 'text/html',
      //     youtube: 's5iUsaPPtnk',
      //     poster: 'https://img.youtube.com/vi/s5iUsaPPtnk/maxresdefault.jpg'
      //   },
      //   {
      //     title: 'Image',
      //     href: 'https://dummyimage.com/1600/ffffff/000000',
      //     type: 'image/jpeg',
      //     poster: 'https://dummyimage.com/350/ffffff/000000'
      //   }
      // ],
      // vidIndex: null,
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
