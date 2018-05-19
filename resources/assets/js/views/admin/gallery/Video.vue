
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
      <div class="card-body">
        <gallery
          :images="images"
          :index="VidIndex"
          :options="{youTubeVideoIdProperty: 'youtube', youTubeClickToPlay: true}"
          @close="index = null"
        />
        <div class="my-gallery">
          <div class="row">
            <figure
              v-for="(image, vindex) in images"
              :key="vindex"
              class="col-lg-3 col-md-6 col-xs-12"
            >
              <div
                :style="{ backgroundImage: 'url(' + image.poster + ')', width: '480px', height:'225px' }"
                class="demo image img-fluid"
                @click="VidIndex = vindex"
              />
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
          youtube: 'ZN2SwwfeCRc',
          poster: 'https://img.youtube.com/vi/ZN2SwwfeCRc/0.jpg'
        },
        {
          title: 'Image',
          href: 'https://www.youtube.com/watch?v=DjxEhLTRtPY',
          type: 'text/html',
          youtube: 'DjxEhLTRtPY',
          poster: 'https://img.youtube.com/vi/DjxEhLTRtPY/0.jpg'
        },
        {
          title: 'Image',
          href: 'https://www.youtube.com/watch?v=Ce4tYw6IE70',
          type: 'text/html',
          youtube: 'Ce4tYw6IE70',
          poster: 'https://img.youtube.com/vi/Ce4tYw6IE70/0.jpg'
        },
        {
          title: 'Image',
          href: 'https://www.youtube.com/watch?v=3rHXrA80NH4',
          type: 'text/html',
          youtube: '3rHXrA80NH4',
          poster: 'https://img.youtube.com/vi/3rHXrA80NH4/0.jpg'
        },
        {
          title: 'A YouYube video',
          href: 'https://www.youtube.com/watch?v=3pn2SI4KGJc',
          type: 'text/html',
          youtube: '3pn2SI4KGJc',
          poster: 'https://img.youtube.com/vi/3pn2SI4KGJc/0.jpg'
        },
        {
          title: 'Image',
          href: 'https://www.youtube.com/watch?v=k_GM1JA608Y',
          type: 'text/html',
          youtube: 'k_GM1JA608Y',
          poster: 'https://img.youtube.com/vi/k_GM1JA608Y/0.jpg'
        }
      ],
      VidIndex: null
    }
  }
}
</script>
