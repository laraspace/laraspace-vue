<template>
  <div class="collapse-group-item">
    <div :class="{ active: isActive }">
      <slot name="item-title"></slot>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
      default: String
    },
    routers: {
      type: Array,
      require: true,
      default: () => []
    }
  },
  data () {
    return {
      showChild: true,
      height: '',
      originaHeight: ''
    }
  },
  computed: {

  },
  mounted () {
   
  },
  methods: {
   isActive (url) {
      return this.$route.path.indexOf(url) > -1
   }
  }
}
</script>
<style scoped>

</style>
