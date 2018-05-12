<template>
  <div class="dropdown-group-item">
    <slot name="item-title"/>
    <div
      :class="['dropdown-item-activator' ,{'active':toggle}]"
      @click="showDropdown"
    >
      <slot name="item-activator"/>
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
    console.log(this.$slots)
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
      let itemPos = rect.right + this.$refs.dropdownSubItems.offsetParent.offsetWidth
      if (itemPos > window.innerWidth) {
        this.rightAlign = true
      } else {
        this.rightAlign = false
      }
    },
    showDropdown () {
      this.toggle = !this.toggle
    }
  }
}
</script>
