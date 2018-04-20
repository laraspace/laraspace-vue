<template>
  <div :class="['dropdown-group', {active: toggle} ]">
    <div
      class="dropdown-group-title"
      @click="showDropdown">
      <slot name="title"/>
    </div>
    <transition
      :duration="{ enter: 0 }"
      name="slide"
      @after-enter="afterEnter"
      @after-leave="afterLeave"
    >
      <div
        v-show="toggle"
        ref="dropdownItems"
        class="dropdown-group-items"
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
      default: String
    }
  },
  data () {
    return {
      height: '',
      originalHeight: '',
      toggle: true
    }
  },
  mounted () {
    console.log(this)
    if (this.isActive() === true) {
      this.toggle = true
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
      if (this.toggle === false) {
        this.$parent.$children.filter(function (value) {
          if (value !== self) {
            if (value.toggle === true) {
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
.dropdown-group.active .dropdown-group-items{
  display: block;
}
.dropdown-group-items {
  overflow: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 10rem;
  padding: .5rem 0;
  margin: .125rem 0 0;
  font-size: 1rem;
  color: #ffff;
  text-align: left;
  list-style: none;
  background-color: #333;
  background-clip: padding-box;
  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;
  transition: max-height .3s ease-in-out;
}
.slide-enter-active, .slide-leave-active {
  overflow: hidden;
}
.slide-leave-to {
  max-height: 0px !important;
}
</style>
