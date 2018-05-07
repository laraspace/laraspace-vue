<template>
  <div :class="['mailbox-sidebar', {'is-open': isSidebarVisible}]">
    <button class="btn btn-theme btn-sm btn-block" @click="openComposeModal">Compose</button>

    <ul class="sidebar-menu mt-4">
      <li
        v-for="category in categories"
        :key="category.id"
        :class="{'active': selectedCategory === category.slug}"
        @click="selectCategory(category)"
      >
        <a href="#">
          <i :class="category.icon"/>
          {{ category.name }}
          <span class="badge badge-pill badge-danger" v-if="category.unread">{{ category.unread }}</span>
        </a>
      </li>
    </ul>

    <a class="left-sidebar-btn" @click="toggleSidebar">
      <i
        v-show="!isSidebarVisible"
        class="icon-fa icon-fa-angle-right"
      />
      <i
        v-show="isSidebarVisible"
        class="icon-fa icon-fa-angle-left"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: ['categories', 'selectedCategory'],
  data () {
    return {
      isSidebarVisible: true
    }
  },
  methods: {
    toggleSidebar () {
      this.isSidebarVisible = !this.isSidebarVisible
    },
    selectCategory (category) {
      this.$emit('selected', category.slug)
    },
    openComposeModal () {
      this.$parent.openComposeModal()
    }
  }
}
</script>
