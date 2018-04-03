<template>
  <div class="collapse-group">
    <transition
      :duration="{ leave: 8000 }"
      name="slide"
      mode="out-in"
      @after-enter="afterEnter"
      @after-leave="afterLeave">
      <div :class="['collapse-group-items' , {active: isActive()} ]">
        <slot name="title"></slot>
        <slot></slot>
      </div>
    </transition>
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
   isActive () {
      return this.$route.path.indexOf(this.activeUrl) > -1
   },
    afterEnter () {
    },
    afterLeave () {
    }
  }
}
</script>
<style scoped>

</style>
