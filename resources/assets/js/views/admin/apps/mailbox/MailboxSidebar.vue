<template>
  <div :class="['mailbox-sidebar', {'is-open': isSidebarVisible}]">
    <ul class="sidebar-menu">
      <li>
        <a href="#">
          <i class="icon-fa icon-fa-inbox"/>
          Inbox
          <span class="badge badge-pill badge-danger">5</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="icon-fa icon-fa-send"/>
          Sent
        </a>
      </li>
      <li>
        <a href="#">
          <i class="icon-fa icon-fa-edit"/>
          Draft
          <span class="badge badge-pill badge-primary">3</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="icon-fa icon-fa-star"/>
          Important
        </a>
      </li>
      <li>
        <a href="#">
          <i class="icon-fa icon-fa-trash "/>
          Trash
        </a>
      </li>
    </ul>

    <a class="left-sidebar-btn" @click="toggleSidebar">
      <i
        v-show="isSidebarVisible"
        class="icon-fa icon-fa-angle-right"
      />
      <i
        v-show="!isSidebarVisible"
        class="icon-fa icon-fa-angle-left"
      />
    </a>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSidebarVisible: true
    }
  },
  methods: {
    toggleSidebar () {
      this.isSidebarVisible = !this.isSidebarVisible
    }
  }
}
</script>
