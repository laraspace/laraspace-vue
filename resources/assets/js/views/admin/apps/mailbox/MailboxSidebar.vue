<template>
  <div class="mailbox-sidebar">
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
          <span v-if="category.unread" class="badge badge-pill badge-danger" >{{ category.unread }}</span>
        </a>
      </li>
    </ul>

    <a class="left-sidebar-btn" @click="$emit('toggle')">
      <i
        v-show="!isLeftSidebarVisible"
        class="icon-fa icon-fa-angle-right"
      />
      <i
        v-show="isLeftSidebarVisible"
        class="icon-fa icon-fa-angle-left"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    },
    selectedCategory: {
      type: String,
      required: true
    },
    isLeftSidebarVisible: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    selectCategory (category) {
      this.$emit('selected', category.slug)
    },
    openComposeModal () {
      this.$parent.openComposeModal()
    }
  }
}
</script>
