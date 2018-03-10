<template>
  <ul
    class="side-nav">
    <li
      :class="{ active : isActive(activeUrl) }"
      @click="isOpen">
      <a
        href="#"
        aria-expanded="true">
        <i class=""/>
        {{ title }}
        <span class="icon-fa arrow icon-fa-fw"/>
      </a>
      <ul
        v-if="showChild"
        aria-expanded="true"
        :style="indent">
        <router-link
          v-for="(router,index) in routers"
          :to="router.to"
          :key="index"
          tag="li">
          <a>{{ router.title }}</a>
        </router-link>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true,
      default: String
    },
    routers: {
      type: Array,
      require: true,
      default: () => []
    },
    icon: {
      type: String,
      require: true,
      default: String
    },
    activeUrl: {
      type: String,
      require: true,
      default: String
    }
  },
  data () {
    return {
      showChild: false
    }
  },
  computed: {
      indent() {
        return { transform: `translate(${this.depth * 50}px)` }
      }
  },
  mounted () {
    console.log(this.routers)
  },
  methods: {
    isActive (url) {
      return this.$route.path.indexOf(url) > -1
    },
    isOpen () {
      this.showChild = !this.showChild
    }
  }
}
</script>

<style scoped>

</style>