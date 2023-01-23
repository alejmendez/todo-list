<script setup>
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
</script>

<template>
  <div class="content">
    <h2>Todo List</h2>
    <TodoForm />
    <TodoList />
  </div>
</template>

<style scoped>
h2 {
  text-align: center;
}
</style>
