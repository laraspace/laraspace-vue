<template>
    <ul
			class="side-nav">
			<li :class="{ active : isActive('/admin/dashboard') }">
				<a
					href="#"
					aria-expanded="true">
					<i class="icon-fa icon-fa-dashboard"/>
					{{ title }}
					<span class="icon-fa arrow icon-fa-fw"/>
				</a>
				<ul aria-expanded="true">
					<router-link
						to="/admin/dashboard/basic"
						tag="li">
						<a>Basic</a>
					</router-link>
					<router-link
						to="/admin/dashboard/ecommerce"
						tag="li">
						<a>Ecommerce</a>
					</router-link>
					<router-link
						to="/admin/dashboard/finance"
						tag="li">
						<a>Finance</a>
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
    router: {
      type: String,
      require: true,
      default: String
    },
    icon: {
      type: String,
      require: true,
      default: String
    }
  },
  data () {
    return {
      newTodo: {
        id: '',
        title: '',
        completed: false
      },
    }
  },
  mounted () {
   
  },
  methods: {
   isActive (url) {
      return this.$route.path.indexOf(url) > -1
    }
  }
}
</script>

<style scoped>

</style>
