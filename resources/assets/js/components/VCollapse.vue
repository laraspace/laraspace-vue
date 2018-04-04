<template>
  <div :class="['collapse-group', {active: isCollapse} ]">
    <div 
      class="collapse-group-title"
      @click="showCollapse">
      <slot name="title"></slot>
    </div>
    <transition
      :duration="{ enter:0 }"
      name="slide"
      @after-enter="afterEnter"
      @after-leave="afterLeave">
      <div 
        class="collapse-group-items"
        v-show="isCollapse"
        ref="collapseItems"
        :style="'max-height:'+height+'px'">
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
      height: '',
      originalHeight: '',
      isCollapse: true,
    }
  },
  mounted () {
     isCollapse: true,
    this.height = this.originalHeight = this.$refs.collapseItems.clientHeight
    console.log(this)
    if (this.isActive() == true) {
      this.isCollapse =  true
    } else {
      this.isCollapse = false
    }
  },
  methods: {
    isActive () {
      return this.$route.path.indexOf(this.activeUrl) > -1
    },
    showCollapse () {
      let self = this
      if(this.isCollapse == false) {
        this.$parent.$children.filter(function(value) {
          if(value != self) {
            if(value.isCollapse == true) {
              value.isCollapse = false
            }
          }
        })
      }
      this.isCollapse = !this.isCollapse 
    },
    afterEnter () {
      this.height = this.originalHeight
    },
    afterLeave () {
      this.height = 0
    }
  }
}
</script>
<style scoped>
.collapse-group-items {
  overflow: hidden;
  transition: max-height .3s ease-in-out;
}
.slide-enter-active, .slide-leave-active {
  overflow: hidden;
}
.slide-leave-to {
  max-height: 0px !important;
}
</style>
