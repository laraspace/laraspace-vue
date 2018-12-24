<template>
  <div class="main-content vue-dropzone">
    <div class="page-header">
      <h3 class="page-title">Vue Dropzone</h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Components</a></li>
        <li class="breadcrumb-item active">Vue Dropzone</li>
      </ol>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <div class="col-sm-12">
            <h5 class="section-semi-title">Simple</h5>
            <vue-dropzone
              id="dropzone"
              ref="myVueDropzone"
              :options="dropzoneOptions1"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-sm-12">
            <h5 class="section-semi-title">with Remove Links</h5>
            <vue-dropzone
              id="dropzone"
              ref="myVueDropzone"
              :options="dropzoneOptions2"
            />
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-sm-12">
            <h5 class="section-semi-title">with Icon Description</h5>
            <vue-dropzone
              id="dropzone"
              ref="myVueDropzone"
              :options="dropzoneOptions3"
            />
          </div>
        </div>
        <div class="row mt-4 manual-demo">
          <div class="col-sm-12">
            <h5 class="section-semi-title">Manually add file</h5>
            <vue-dropzone
              id="dropzone"
              ref="myVueDropzone"
              :options="dropzoneOptions2"
            />
            <button class="btn btn-primary mt-4" @click="AddFile">Add File</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'

export default {
  name: 'App',
  components: {
    vueDropzone: vue2Dropzone
  },
  data: function () {
    return {
      dropzoneOptions1: {
        url: 'https://httpbin.org/post',
        maxFilesize: 0.5,
        headers: { 'My-Awesome-Header': 'header value' }
      },
      dropzoneOptions2: {
        url: 'https://httpbin.org/post',
        maxFilesize: 0.5,
        addRemoveLinks: true,
        dictCancelUpload: 'Cancel File',
        headers: { 'My-Awesome-Header': 'header value' }
      },
      dropzoneOptions3: {
        url: 'https://httpbin.org/post',
        maxFilesize: 0.5,
        addRemoveLinks: true,
        dictCancelUpload: 'Cancel File',
        dictDefaultMessage: "<i class='icon-fa icon-fa-cloud-upload'/></i> Uploads Your File's Here",
        headers: { 'My-Awesome-Header': 'header value' }
      },
      count: 1
    }
  },
  methods: {
    AddFile () {
      let file = { size: 123, name: 'Icon' }
      let url = '/assets/img/demo/gallery/' + this.count + '.jpg'
      this.$refs.myVueDropzone.manuallyAddFile(file, url)
      if (this.count !== 12) {
        this.count = this.count + 1
      } else {
        this.count = 12
      }
    }
  }
}
</script>

<style>
  .manual-demo .dz-image img {
    width: auto !important;
    height: auto !important;
    object-fit: fill !important;
  }
</style>
