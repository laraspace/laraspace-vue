<template>
  <li
    :class="{ active : activeList }"
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
        <span
          v-if="(routers.length != 0)"
          class="icon-fa arrow icon-fa-fw"/>
      </a>
    </router-link>
    <transition
      name="slide"
      mode="out-in">
      <ul
        v-show="showChild&&(routers.length != 0)"
        ref="isCollapse"
        :style="'max-height:'+height+'px'"
        class="is-collapse"
        aria-expanded="true">
        <router-link
          v-for="(router,index) in routers"
          :to="router.to"
          :key="index"
          tag="li">
          <a>{{ router.title }}</a>
        </router-link>
        <slot name="grandChild"/>
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
      showChild: true,
      height: ''
    }
  },
  computed: {
    activeList () {
      if (this.showChild === true) {
        if (this.isActive(this.activeUrl)) {
          return true
        } else {
          return true
        }
      } else {
        return false
      }
    }
  },
  mounted () {
    this.height = this.$refs.isCollapse.clientHeight
    this.showChild = false
    if (this.isActive(this.activeUrl) === true) {
      this.showChild = true
    }
  },
  methods: {
    isActive (url) {
      return this.$route.path.indexOf(url) > -1
    },
    isOpen () {
      let self = this
      this.showChild = !this.showChild
      this.$parent.$children.filter(function (value) {
        if (value !== self) {
          value.showChild = false
          console.log('self:' + self.showChild)
          console.log('self1:' + value.showChild)
        }
      })
    }
  }
}
</script>
<style scoped>
.is-collapse {
  overflow: hidden;
  transition: max-height .3s ease;
}
.slide-enter-active, .slide-leave-active {
  max-height: 0 !important;
  overflow: hidden;
}
</style>
