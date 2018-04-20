
<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Video Gallery</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Gallery</a></li>
        <li class="breadcrumb-item active">Video Gallery</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Video Gallery</h6>
      </div>
      <div class="card-body">
          <gallery 
            :images="images" 
            :index="VidIndex" 
            :options="{youTubeVideoIdProperty: 'youtube', youTubeClickToPlay: true}"
            @close="index = null"
            ></gallery>
     
        <div class="my-gallery">
          <div class="row">
                <div
                  class="demo"
                  v-for="(image, vindex) in images"
                  :key="vindex"
                  @click="VidIndex = vindex"
                  :style="{ backgroundImage: 'url(' + image.poster + ')', width: '400px', height: '300px' }"
                ></div>
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
        {
          title: 'A YouYube video',
          href: 'https://www.youtube.com/watch?v=3pn2SI4KGJc',
          type: 'text/html',
          youtube: '3pn2SI4KGJc',
          poster: 'https://img.youtube.com/vi/3pn2SI4KGJc/0.jpg'
        },
        {
          title: 'A YouYube video 2',
          href: 'https://www.youtube.com/watch?v=6v2L2UGZJAM',
          type: 'text/html',
          youtube: '6v2L2UGZJAM',
          poster: 'https://img.youtube.com/vi/6v2L2UGZJAM/0.jpg'
        },
        {
          title: 'Image',
          href: 'https://www.youtube.com/watch?v=ZN2SwwfeCRc',
          type: 'text/html',
          youtube:'ZN2SwwfeCRc',
          poster: 'https://img.youtube.com/vi/ZN2SwwfeCRc/0.jpg'
      	}
      ],
      VidIndex: null
    }
   }
}
</script>
