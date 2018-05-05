<template>
  <div class="collapse-group">
    <slot/>
  </div>
</template>
<script>
export default {
  props: {
    accordion: {
      type: Boolean,
      require: true,
      default: false
    }
  },
  data () {
    return {
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.EventBus.$emit('accoardion', this.accordion)
    })
  }
}
</script>
