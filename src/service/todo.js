import { LocalStorage } from "../utils/local_storage";

const ls = new LocalStorage('todo_');

export const getTodos = () => {
  return ls.getState();
}

export const addTodo = text => {
  ls.add({ text })
  return ls.getState();
}

export const removeTodo = (id) => {
  ls.del(id)
  return ls.getState();
}
