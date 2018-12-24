<template>
  <div
    v-click-outside="closeDropdown"
    :class="['dropdown-group',
             {'active': (toggle || isActive() )},
             {'has-child':hasChild},
             {'toggle-arrow':(hasChild)&&(showArrow)},
             {'dropdown-light': themeLight},
    ]"
  >
    <div class="dropdown-activator" @click="showDropdown">
      <slot name="activator"/>
    </div>
    <div
      v-show="(toggle)&&(closeOnSelect)"
      v-if="hasChild"
      ref="dropdownItems"
      :class="['dropdown-container', {'align-right': rightAlign}]"
      @click="closeDropdown"
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
    },
    showArrow: {
      type: Boolean,
      require: true,
      default: true
    },
    themeLight: {
      type: Boolean,
      require: true,
      default: false
    },
    closeOnSelect: {
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
      this.setDropdownPosition()
      window.addEventListener('resize', e => {
        if (this.toggle === true) {
          this.setDropdownPosition()
        }
      })
      if (!this.$slots.default) {
        this.hasChild = false
      }
      this.toggle = false
    })
  },
  methods: {
    setDropdownPosition () {
      let rect = this.$refs.dropdownItems.getBoundingClientRect()
      let offsetPos =
        rect.width - this.$refs.dropdownItems.offsetParent.offsetWidth
      let itemPos = rect.right + rect.width + offsetPos
      if (itemPos > window.innerWidth) {
        this.rightAlign = true
      }
      itemPos += offsetPos + rect.width + offsetPos
      if (itemPos < window.innerWidth) {
        this.rightAlign = false
      }
    },
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
    },
    closeDropdown () {
      if (this.closeOnSelect === false) {
        this.toggle = true
      } else {
        this.toggle = false
      }
    }
  }
}
</script>
