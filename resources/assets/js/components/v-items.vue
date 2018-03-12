<template>
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
      <transition name="slide-fade" mode="out-in">
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
      showChild: false
    }
  },
  mounted () {
     if( this.isActive(this.activeUrl) == true) {
        this.showChild = true;
     }
  },
  methods: {
    isActive (url) {
      return this.$route.path.indexOf(url) > -1
    },
    isOpen () {
      let vm = this;
      console.log(this.$parent);
      if (this.showChild == false) {
        this.$parent.$children.filter(function(value){
          if (value.showChild == true){
            value.showChild = false;
          }
        });
      }
      this.$nextTick(function(){
        vm.showChild = !vm.showChild
      })
    }
  }
}
</script>

<style scoped>

</style>