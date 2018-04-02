<template>
  <div class="collapse-group">
    <div :class="['collapse-group-item' , {active: isActive} ]">
      <slot name="title"></slot>
      <slot></slot>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    // title: {
    //   type: String,
    //   require: true,
    //   default: String
    // },
    // icon: {
    //   type: String,
    //   require: true,
    //   default: String
    // },
    activeUrl: {
      type: String,
      require: true,
      default: String
    },
    
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
