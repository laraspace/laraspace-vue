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
            @click.prevent="selectSkin(skin.slug)"
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
        {title: 'Skin - Default', 'slug': 'default', 'img': '/assets/img/skins/skin-default.png'},
        {title: 'Skin - Tyrell', 'slug': 'tyrell', 'img': '/assets/img/skins/skin-tyrell.png'},
        {title: 'Skin - Arryn', 'slug': 'arryn', 'img': '/assets/img/skins/skin-arryn.png'},
        {title: 'Skin - Lannister', 'slug': 'lannister', 'img': '/assets/img/skins/skin-lannister.png'},
        {title: 'Skin - Stark', 'slug': 'stark', 'img': '/assets/img/skins/skin-stark.png'},
        {title: 'Skin - Targaryen', 'slug': 'targaryen', 'img': '/assets/img/skins/skin-targaryen.png'}
      ]
    }
  },
  methods: {
    selectSkin (skin) {
      this.selectedSkin = skin
      this.$utils.setSkin(skin)
    }
  }
}
</script>
