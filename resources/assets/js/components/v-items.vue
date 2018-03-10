<template>
  <ul
    class="side-nav">
    <li
      :class="{ active : isActive(activeUrl) }"
      @click="isOpen">
      <a
        href="#"
        aria-expanded="true">
        <i :class="icon"/>
        {{ title }}
        <span class="icon-fa arrow icon-fa-fw"/>
      </a>
      <transition
        name="fade"
        mode="in-out">
        <ul
          v-if="showChild"
          aria-expanded="true">
          <router-link
            v-for="(router,index) in routers"
            :to="router.to"
            :key="index"
            tag="li">
            <a>{{ router.title }}</a>
          </router-link>
        </ul>
      </transition>
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
  /* always present */
.expand-transition {
  transition: all .3s ease;
  height: 30px;
  padding: 10px;
  background-color: #eee;
  overflow: hidden;
}
/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.expand-enter, .expand-leave {
  height: 0;
  padding: 0 10px;
  opacity: 0;
}
</style>
