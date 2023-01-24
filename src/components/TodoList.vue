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
      <button class="btn btn-gray toggle" @click="toggleCompleted(todo.id)">
        <font-awesome-icon icon="fa-solid fa-xmark" />
      </button>
      <button class="btn btn-gray delete" @click="deleteTodo(todo.id)">
        <font-awesome-icon icon="fa-solid fa-check" />
      </button>
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
      margin: 8px 0;
    }

    &:hover {
      margin: 8px 0;
      background-color: #353535;
    }

    .btn {
      float: right;
      width: 36px;
      padding: 0 10px;
      &.delete  {
        margin-right: 5px;
      }
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
