<template>
  <div
    v-click-outside="closeDropdown"
    :class="['dropdown-group',
             {'active': (toggle || isActive() )},
             {'has-child':hasChild},
             {'toggle-arrow':(hasChild)&&(toggleArrow)}]"
  >
    <div
      class="dropdown-group-title"
      @click="showDropdown"
    >
      <slot name="activator"/>
    </div>
    <slot/>
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
    toggleArrow: {
      type: Boolean,
      require: true,
      default: true
    }
  },
  data () {
    return {
      toggle: true,
      hasChild: true,
      rightAlign: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (!this.$slots.default) {
        this.hasChild = false
      }
      this.toggle = false
    })
  },
  methods: {
    isActive () {
      if (this.activeUrl) {
        return this.$route.path.indexOf(this.activeUrl) > -1
      }
      return false
    },
    showDropdown () {
      let self = this
      if (this.toggle === false) {
        this.$parent.$children.filter(function (value) {
          if (value !== self) {
            if ((value.$children[0].toggle === true)&&(value.toggle === true)) {
              value.toggle = false
              value.$children[0].toggle = false
            }
          }
        })
      }
      this.toggle = !this.toggle
      this.$children[0].toggle = !this.$children[0].toggle
    },
    closeDropdown () {
      this.$children[0].toggle = false
      this.toggle = false
    }
  }
}
</script>
