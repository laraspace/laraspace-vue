<template>
  <div :class="['collapse-group-item', { active: isCollapseOpen } ]">
    <div
      class="collapse-item-title"
      @click="showCollapse"
    >
      <slot name="item-title"/>
    </div>
    <transition
      :duration="{ enter: 0 }"
      name="slide"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <div
        v-show="isCollapseOpen"
        ref="collapseItems"
        :style="'max-height:' + height + 'px'"
        class="collapse-group-items"
      >
        <slot/>
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
      default: ''
    }
  },
  data () {
    return {
      height: '',
      originalHeight: '',
      isCollapseOpen: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.height = this.originalHeight = this.$refs.collapseItems.clientHeight
    })
    if (this.$slots) {
      console.log(this.$slots['itemTitle'])
    }
    if (this.activeUrl) {
      if (this.isActive() === true) {
        this.isCollapseOpen = true
      } else {
        this.isCollapseOpen = false
      }
    } else {
      this.isCollapseOpen = false
    }
  },
  methods: {
    isActive () {
      return this.$route.path.indexOf(this.activeUrl) > -1
    },
    showCollapse () {
      let self = this
      if (this.isCollapseOpen === false) {
        this.$parent.$children.filter((value) => {
          if (value !== self) {
            if (value.isCollapseOpen === true) {
              value.isCollapseOpen = false
            }
          }
        })
      }
      this.isCollapseOpen = !this.isCollapseOpen
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
