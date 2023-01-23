<script setup>
import { ref } from 'vue'
import { useTodoListStore } from '../store/useTodoListStore'

const store = useTodoListStore()

const todoText = ref('')
const inputText = ref(null)

const formHandled = () => {
  store.addTodo({ text: todoText.value })
  todoText.value = ''
  inputText.value.focus()
}
</script>

<template>
  <form @submit.prevent="formHandled">
    <input
      class="form-control"
      type="text"
      ref="inputText"
      placeholder="Todo Text"
      v-model="todoText"
    />
    <input
      class="btn btn-gray"
      type="submit"
      value="save"
    />
  </form>
</template>

<style scoped>
.form-control {
  width: 78%;
}

.btn {
  width: 15%;
  float: right;
  height: 38px;
}
</style>
