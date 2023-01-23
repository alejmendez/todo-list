import { defineStore } from "pinia";
import { LocalStorage } from "../utils/local_storage";
import { guid } from "../utils/uuid";

const ls = new LocalStorage('todo_');

export const useTodoListStore = defineStore("todoList", {
  state: () => ({
    todosList: ls.getStateInitialState(),
  }),
  actions: {
    addTodo(item) {
      const todo = { id: guid(), completed: false, ...item };
      this.todosList.push(todo);
      ls.set(todo);
    },
    deleteTodo(id) {
      this.todosList = this.todosList.filter(o => o.id !== id);
      ls.del(id);
    },
    toggleCompleted(id) {
      const todo = this.todosList.find(o => o.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        ls.set(todo);
      }
    },
  },
});
