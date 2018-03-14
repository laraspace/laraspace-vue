<template>
  <li
    :class="{ active : isActive(activeUrl) }"
    @click.stop="isOpen">
    <a
      v-if="routers.length != 0"
      href="#"
      aria-expanded="true">
      <i :class="icon"/>
      {{ title }}
      <span class="icon-fa arrow icon-fa-fw"/>
    </a>
    <router-link
      v-else
      :to="activeUrl"
      tag="li">
      <a>
        <i :class="icon"/>
        {{ title }}
        <span class="icon-fa arrow icon-fa-fw"/>
      </a>
    </router-link>
    <transition
      name="slide"
      mode="out-in">
      <ul
        v-show="showChild&&(routers.length != 0)"
        ref="isCollapse"
        :style="'height:'+height+'px'"
        class="is-collapse"
        aria-expanded="true">
        <router-link
          v-for="(router,index) in routers"
          :to="router.to"
          :key="index"
          tag="li">
          <a>{{ router.title }}</a>
        </router-link>
        <slot name="grand-child"/>
      </ul>
    </transition>
  </li>
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
      showChild: false,
      height: ''
    }
  },
  mounted () {
    if (this.isActive(this.activeUrl) == true) {
      this.showChild = true
    }
    console.log(this.height = (this.$children.length * 45))
  },
  methods: {
    isActive (url) {
      return this.$route.path.indexOf(url) > -1
    },
    isOpen () {
      let vm = this
      if (this.showChild == false) {
        this.$parent.$children.filter(function (value) {
          if (value.showChild == true) {
            value.showChild = false
          }
        })
      }
      vm.showChild = !vm.showChild
    }
  }
}
</script>

<style scoped>
  /* always present */
.side-nav ul.is-collapse {
  transition: height .3s linear;
  overflow: hidden;
}
/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.slide-enter-active, .slide-leave-active {
  height: 0 !important;
}
</style>
