<template>
  <div :class="['dropdown-group', {active: toggle} ]">
    <div 
      class="dropdown-group-title"
      @click="showDropdown">
      <slot name="title"></slot>
    </div>
    <transition
      name="fade"
      mode="in-out">
      <div
        class="dropdown-group-items"
        v-show="toggle"
        ref="dropdownItems"
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
      toggle: true,
    }
  },
  mounted () {
    this.$nextTick(function(){
        this.height = this.originalHeight = this.$refs.dropdownItems.clientHeight
    })
    console.log(this);
    if (this.isActive() == true) {
      this.toggle =  true
    } else {
      this.toggle = false
    }
  },
  methods: {
    isActive () {
      return this.$route.path.indexOf(this.activeUrl) > -1
    },
    showDropdown () {
      let self = this
      if(this.toggle == false) {
        this.$parent.$children.filter(function(value) {
          if(value != self) {
            if(value.toggle == true) {
              value.toggle = false
            }
          }
        })
      }
      this.toggle = !this.toggle 
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
.dropdown-group-items {
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
