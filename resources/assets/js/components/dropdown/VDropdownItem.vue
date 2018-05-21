<template>
  <div class="dropdown-group-item">
    <div
      :class="['dropdown-item-activator' ,{'active':toggle}]"
      @click="showDropdown"
    >
      <slot name="item-activator"/>
    </div>
    <div
      v-show="toggle"
      ref="dropdownSubItems"
      :class="['dropdown-group-items',
               {'active': toggle},
               {'align-right': rightAlign},
               className
      ]"
    >
      <slot name="dropdown-item"/>
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
    },
    className: {
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
      window.addEventListener('resize', e => {
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
      let offsetPos =
        rect.width - this.$refs.dropdownSubItems.offsetParent.offsetWidth
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
