<template>
  <div class="dropdown-group-item">
    <slot name="item-title"/>
    <slot name="item-title-divider"/>
    <div
      :class="['dropdown-item-activator' ,{'active':toggle}]"
      @click="showDropdown"
    >
      <slot name="item-activator"/>
      <slot name="item-activator-divider"/>
    </div>
    <slot/>
    <div
      v-show="toggle"
      ref="dropdownSubItems"
      :class="['dropdown-subgroup-items',{'active':toggle},{'align-right':rightAlign}]"
    >
      <slot name="subgroup-item"/>
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
      toggle: true,
      hasChild: true,
      subGroup: false,
      rightAlign: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.setDropdownPosition()
      window.addEventListener('resize', (e) => {
        if (this.toggle === true) {
          this.setDropdownPosition()
        }
      })
      this.toggle = false
    })
  },
  methods: {
    setDropdownPosition () {
      let rect = this.$refs.dropdownSubItems.getBoundingClientRect()
      let offsetPos = (rect.width - this.$refs.dropdownSubItems.offsetParent.offsetWidth)
      let itemPos = rect.right + rect.width + offsetPos
      if (itemPos > window.innerWidth) {
        this.rightAlign = true
      }
      itemPos += offsetPos + rect.width + offsetPos
      if (itemPos < window.innerWidth) {
        this.rightAlign = false
      }
    },
    showDropdown () {
      this.toggle = !this.toggle
    }
  }
}
</script>
