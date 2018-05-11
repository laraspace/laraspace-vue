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
      ref="dropdownSubGroupItems"
      :class="['dropdown-subgroup-items',{'active':toggle}]"
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
      toggle: false,
      hasChild: true,
      subGroup: false
    }
  },
  mounted () {
  
  },
  methods: {
    isActive () {
    },
    showDropdown () {
      this.toggle = !this.toggle
    }
  }
}
</script>
