<template>
  <div :class="['collapse-group', {active: isActive} ]">
    <div 
      class="collapse-group-title"
      @click="showCollapse">
      <slot name="title"></slot>
    </div>
    <transition
      :duration="{ leave: 80 }"
      name="slide"
      mode="out-in"
      @after-enter="afterEnter"
      @after-leave="afterLeave">
      <div 
        class="collapse-group-items"
        v-show="isCollapse">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>

export default {
  props: {
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
      originaHeight: '',
      isCollapse: false
    }
  },
  computed: {
    isActive () {
        return this.$route.path.indexOf(this.activeUrl) > -1
    },
  },
  mounted () {
    if (this.isActive == true) {
        this.isCollapse =  true; 
      } else {
        this.isCollapse =  false;
      }
  },
  methods: {
   
    showCollapse () {
      if(this.isCollapse == true) {
      }
      this.isCollapse = !this.isCollapse 
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
