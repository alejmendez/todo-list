<script setup>
import { storeToRefs } from "pinia"
import { useTodoListStore } from '../store/useTodoListStore'

const store = useTodoListStore()

const { todosList } = storeToRefs(store)
const { toggleCompleted, deleteTodo } = store
</script>

<template>
  <ul>
    <li v-for="todo in todosList" :key="todo.id">
      <div :class="{ completed: todo.completed, text: true }" :title="todo.text" v-text="todo.text" />
      <input class="btn btn-gray toggle" type="submit" value="&#10004;" @click="toggleCompleted(todo.id)" />
      <input class="btn btn-gray delete" type="submit" value="&#10060;" @click="deleteTodo(todo.id)" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0;

  li {
    margin: 8px 0;
    height: 36px;
    border-radius: 6px;
    transition: all 0.3s;

    span {
      margin-left: 8px;
      margin-top: 8px;
    }

    &:hover {
      margin: 8px 0;
      background-color: #353535;
    }

    .btn {
      float: right;
    }

    .text {
      float: left;
      max-width: 440px;
      margin-top: 10px;
      margin-left: 15px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;

      &.completed {
        text-decoration: line-through;
      }
    }
  }
}
</style>
