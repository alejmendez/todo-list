import { guid } from "./uuid";

export class LocalStorage {
  constructor(index) {
    this.index = index
    this.state = this.getStateInitialState()
  }

  getState() {
    return this.state;
  }

  getStateInitialState() {
    return Object.entries(localStorage)
      .filter(data => data[0].startsWith(this.index))
      .map(data => JSON.parse(data[1]))
  }

  genKey(key) {
    return `${this.index}${key}`
  }

  genId() {
    return guid()
  }

  get(id) {
    const index = this.findIndex(id);
    if (index === -1) {
      return null;
    }
    return this.state[index];
  }

  add(input) {
    const data = {
      id: this.genId(),
      ...input,
    }
    this.state.push(data);
    localStorage.setItem(this.genKey(data.id), JSON.stringify(data));
    return data;
  }

  edit(id, input) {
    const index = this.findIndex(id);
    const data = {
      id,
      ...input,
    }

    if (index === -1) {
      return null;
    }

    this.state[index] = data;
    localStorage.setItem(this.genKey(id), JSON.stringify(data));
    return data;
  }

  set(id, input) {
    const result = this.edit(id, input);
    if (result === null) {
      return this.add(input.id, input);
    }

    return result;
  }

  del(id) {
    const index = this.findIndex(id);
    if (index === -1) {
      return false;
    }
    this.state.splice(index, 1);
    localStorage.removeItem(this.genKey(id));
    return this;
  }

  findIndex(id) {
    return this.state.findIndex(o => o.id === id);
  }

  exist(id) {
    return this.get(id) !== undefined;
  }
}
