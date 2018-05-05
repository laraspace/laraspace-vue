<template>
  <div class="skin-tools" :class="{'is-open' : this.isOpen}">
    <a class="skin-tools-action" @click="isOpen = !isOpen">
      <i class="icon-fa icon-fa-cog" />
    </a>
    <div class="skin-tools-content">
      <h5 class="mt-2">Select Skin</h5>
      <div class="row mt-md-4">
        <div class="col-sm-6 skin-item">
          <a
            href="#"
            title="Skin - Default"
            class="skin-radio active"
            @click="selectSkin('default')"
          >
            <img src="/assets/img/skins/skin-default.png" class="img-fluid">
          </a>
        </div>
        <div class="col-sm-6 skin-item">
          <a
            href="#"
            class="skin-radio"
            data-logo="white"
            title="Skin - Tyrell"
            @click="selectSkin('tyrell')"
          >
            <img src="/assets/img/skins/skin-tyrell.png" class="img-fluid">
          </a>
        </div>
      </div>
      <div class="row mt-md-4">
        <div class="col-sm-6 skin-item">
          <a
            href="#"
            class="skin-radio"
            data-logo="white"
            title="Skin - Arryn"
            @click="selectSkin('arryn')"
          >
            <img src="/assets/img/skins/skin-arryn.png" class="img-fluid">
          </a>
        </div>
        <div class="col-sm-6 skin-item">
          <a
            href="#"
            class="skin-radio"
            data-logo="white"
            title="Skin - Lannister"
            @click="selectSkin('lannister')"
          >
            <img src="/assets/img/skins/skin-lannister.png" class="img-fluid">
          </a>
        </div>
      </div>
      <div class="row mt-md-4">
        <div class="col-sm-6 skin-item">
          <a
            href="#"
            class="skin-radio"
            title="Skin - Stark"
            @click="selectSkin('stark')"
          >
            <img src="/assets/img/skins/skin-stark.png" class="img-fluid">
          </a>
        </div>
        <div class="col-sm-6 skin-item">
          <a
            href="#"
            class="skin-radio"
            title="Skin - Targaryen"
            @click="selectSkin('targaryen')"
          >
            <img src="/assets/img/skins/skin-targaryen.png" class="img-fluid">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    selectSkin (skin) {
      this.$utils.setSkin(skin)
    }
  }
}
</script>
