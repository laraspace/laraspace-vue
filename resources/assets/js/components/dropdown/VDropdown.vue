<template>
  <div :class="['dropdown-group', {active: (toggle || isActive() )} ]">
    <div
      class="dropdown-group-title"
      @click="showDropdown"
    >
      <slot name="activator"/>
    </div>
    <div
      v-show="toggle"
      v-if="hasChild"
      ref="dropdownItems"
      class="dropdown-group-items"
    >
      <slot/>
    </div>
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
      toggle: false,
      hasChild: true
    }
  },
  mounted () {
    this.$nextTick(() => {
      if (this.$refs.dropdownItems.children.length === 0) {
        this.hasChild = false
      }
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
            if (value.toggle === true) {
              value.toggle = false
            }
          }
        })
      }
      this.toggle = !this.toggle
    }
  }
}
</script>
