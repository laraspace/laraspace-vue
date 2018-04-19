<template>
  <div class="main-content">
    <div class="page-header">
      <h3 class="page-title">Todos
        <small class="text-muted">Built with Vue JS</small>
      </h3>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="">Home</a></li>
        <li class="breadcrumb-item active"><a href="#">Todos</a></li>
      </ol>
    </div>
    <div class="card">
      <div class="card-body">
        <todo-item></todo-item>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from '../../../components/TodoItem.vue'
export default {
  components: {
    TodoItem
  }
}
</script>
