<template>
  <div class="collapse-group-item">
    <slot name="item-title"></slot>
    <slot></slot>
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
   
  }
}
</script>
<style scoped>

</style>
