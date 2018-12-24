<template>
  <div :class="{'is-open' :isOpen}" class="skin-tools" >
    <a class="skin-tools-action" @click="isOpen = !isOpen">
      <i class="icon-fa icon-fa-cog" />
    </a>
    <div class="skin-tools-content">
      <h5 class="mt-2">Select Skin</h5>
      <div class="skins">
        <div v-for="skin in skins" :key="skin.slug" class="skin-item">
          <a
            :class="{'active': skin.slug === selectedSkin}"
            :title="skin.title"
            href="#"
            class="skin-radio"
            @click.prevent="selectSkin(skin)"
          >
            <img :src="skin.img" class="img-fluid">
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
      isOpen: false,
      selectedSkin: 'default',
      skins: [
        {title: 'Skin - Default', 'slug': 'default', 'img': '/assets/img/skins/skin-default.png', 'light': false},
        {title: 'Skin - Tyrell', 'slug': 'tyrell', 'img': '/assets/img/skins/skin-tyrell.png', 'light': true},
        {title: 'Skin - Arryn', 'slug': 'arryn', 'img': '/assets/img/skins/skin-arryn.png', 'light': true},
        {title: 'Skin - Lannister', 'slug': 'lannister', 'img': '/assets/img/skins/skin-lannister.png', 'light': true},
        {title: 'Skin - Stark', 'slug': 'stark', 'img': '/assets/img/skins/skin-stark.png', 'light': false},
        {title: 'Skin - Targaryen', 'slug': 'targaryen', 'img': '/assets/img/skins/skin-targaryen.png', 'light': false}
      ]
    }
  },
  methods: {
    selectSkin (skin) {
      this.selectedSkin = skin.slug
      this.$utils.setSkin(skin.slug)
      if (skin.light === true) {
        this.$utils.setLogo('/assets/img/logo_white.png')
      } else {
        this.$utils.setLogo('/assets/img/logo-desk.png')
      }
    }
  }
}
</script>
