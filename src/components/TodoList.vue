<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps(['todos'])
const emit = defineEmits(['onRemoveElement'])

const onRemoveElement = id => {
  emit('onRemoveElement', id)
}
</script>

<template>
  <ul>
    <li v-for="todo in props.todos" :key="todo.id">
      <div class="text" :title="todo.text">
        {{ todo.text }}
      </div>
      <input
        class="btn btn-gray"
        type="submit"
        value="x"
        @click="onRemoveElement(todo.id)"
      />
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
ul li {
  margin: 8px 0;
  height: 36px;
  border-radius: 6px;
  transition: all 0.3s;
}
ul li span {
  margin-left: 8px;
  margin-top: 8px;
}
ul li:hover {
  margin: 8px 0;
  background-color: #353535;
}
ul li .btn {
  float: right;
}

ul li .text {
  float: left;
  max-width: 440px;
  margin-top: 10px;
  margin-left: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
white-space: nowrap;

}
</style>
