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
      originalHeight: '',
      slotHeight: ''
    }
  },
  computed: {
    activeList () {
      if (this.showChild == true) {
        if (this.isActive(this.activeUrl)) {
          return true
        } else {
          return true
        }
      } else {
        return false
      }
    },
    height () {
      let ht = 0
      if (this.$slots.grandChild) {
        for (let i = 0; this.$slots.grandChild.length > i; i++) {
          console.log(this.$slots)
          if (this.$slots.grandChild[i].showChild === false) {
            ht += this.originalHeight - this.$slots.grandChild[i].originalHeight
          }
        }
      } else {
        ht = this.originalHeight
      }
      return ht
    }
  },
  mounted () {
    console.log(this.originalHeight = this.$refs.isCollapse.clientHeight)
   
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
      if (this.showChild === false) {
        this.$parent.$children.filter(function (value) {
          if (value.showChild === true) {
            value.showChild = false
          }
        })
      }
      this.showChild = !this.showChild
    }
  }
}
</script>
<style scoped>
  /* always present */
.side-nav ul.is-collapse {
  overflow: hidden;
  transition: height .3s ease;
}
/* .expand-enter defines the starting state for entering */
/* .expand-leave defines the ending state for leaving */
.slide-enter-active, .slide-leave-active {
  height: 0 !important;
  overflow: hidden;
}
/* .slide-fade-leave-active below version 2.1.8 */
/* .slide-enter, .slide-leave-to {
} */
</style>
