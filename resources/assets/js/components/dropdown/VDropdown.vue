<template>
  <div :class="['dropdown-group', {active: (toggle || isActive() ) } ]">
    <div
      class="dropdown-group-title"
      @click="showDropdown">
      <slot name="title"/>
    </div>
    <div
      v-show="toggle" 
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
      toggle: false
    }
  },
  mounted () {
   
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
  }
}
</script>
