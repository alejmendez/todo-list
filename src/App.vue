<script setup>
import { reactive } from 'vue'

import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import { addTodo, getTodos, removeTodo } from './service/todo'

const state = reactive({
  todos: getTodos()
})

const formHandled = (todo) => {
  state.todos = [...addTodo(todo.text)]
}

const removeTodoHandled = (id) => {
  state.todos = [...removeTodo(id)]
}
</script>

<template>
  <div class="content">
    <h2>Todo List</h2>
    <TodoForm
      @submit="formHandled"
    />
    <TodoList
      @onRemoveElement="removeTodoHandled"
      :todos="state.todos"
    />
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
}
</style>
