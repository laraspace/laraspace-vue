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
        <div class="todo-container mx-auto col-lg-6 ">
          <h5 class="todo-title">TODOS APP</h5>
          <p class="text-sm-center">This Demo showcases a simple workflow with VueJS , Vue Resource and Laravel. </p>
          <input
            v-model="newTodo.title"
            type="text"
            class="form-control todo-field"
            placeholder="New Todo"
            @keyup.enter="addTodo"
          >
          <div class="todo-block scroll-pane">
            <ul v-show="todos.length" class="todo-list">
              <li v-for="(todo,index) in todos" :key="index">
                <input
                  :id="index"
                  :true-value="1"
                  :false-value="0"
                  v-model="todo.completed"
                  type="checkbox"
                  class="toggle"
                  @change="toggleTodoComplete(todo)"
                >
                <label :for="index">{{ todo.title }}</label>
                <a
                  href="#"
                  class="remove-link"
                  @click.prevent="removeTodo(todo)"
                >
                  <i class="icon-fa icon-fa-close"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTodo: {
        id: '',
        title: '',
        completed: false
      },
      todos: [
        {
          title: 'Install the Template',
          completed: false
        }
      ]
    }
  },
  mounted () {
    this.getTodos()
  },
  methods: {
    async addTodo () {
      let vm = this
      let url = '/api/admin/todos'

      if (vm.newTodo.title === '') {
        return
      }

      let response = await window.axios.post(url, vm.newTodo)

      vm.todos.push({
        id: response.data.todo.id,
        title: response.data.todo.title,
        completed: false
      })

      vm.newTodo = {
        id: '',
        title: '',
        completed: false
      }
    },

    async removeTodo (todo) {
      let url = '/api/admin/todos/' + todo.id
      let vm = this
      await window.axios.post(url, { _method: 'DELETE' })

      let index = vm.todos.indexOf(todo)
      vm.todos.splice(index, 1)
    },
    async getTodos () {
      let response = await window.axios.get('/api/admin/todos')

      this.todos = response.data
    },
    async toggleTodoComplete (todo) {
      let url = '/api/admin/todos/toggleTodo/' + todo.id
      try {
        let response = await window.axios.post(url, { completed: todo.completed })
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
.todo-container {
  background-color: #ffde00;
  padding: 50px;
  min-height: 500px;
}

.todo-field:focus {
  border: 1px solid #ccc;
}

.todo-title {
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  text-align: center;
}

.todo-block h6 {
  text-align: center;
  text-transform: uppercase;
  color: gray;
}

.remove-link {
  color: #f35a3d;
  position: absolute;
  top: 0;
  line-height: 50px;
  right: 5px;
}

.remove-link:hover {
  color: #f35a3d;
}
.todo-block {
  background: #fff;
  padding: 0.375rem 0.75rem;
  margin-top: 30px;
  height: 200px;
  overflow: auto;
}

.todo-list {
  list-style: none;
  padding: 0;
  font-size: 20px;
}

.todo-list li {
  border-bottom: 1px solid #d9d9d9;
  padding: 10px;
  position: relative;
}

.todo-list li label {
  padding-left: 70px;
  margin: 0;
  color: #333;
}

.todo-list li input[type="checkbox"] {
  outline: none;
  text-align: center;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  -webkit-appearance: none;
  appearance: none;
}

.todo-list li .toggle:after {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#333" stroke-width="3"/></svg>');
}

.todo-list li .toggle:checked:after {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#333" stroke-width="3"/><path fill="#4fc47f" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
}

@media (max-width: 768px) {
  .todos-container {
    display: none;
  }
}
</style>
