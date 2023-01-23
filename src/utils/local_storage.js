export class LocalStorage {
  constructor(index) {
    this.index = index
  }

  getStateInitialState() {
    return Object.entries(localStorage)
      .filter(data => data[0].startsWith(this.index))
      .map(data => JSON.parse(data[1]))
  }

  key(key) {
    return `${this.index}${key}`
  }

  exist(id) {
    return this.get(id) !== undefined;
  }

  get(id) {
    return localStorage.getItem(this.key(id));
  }

  set(data) {
    return localStorage.setItem(this.key(data.id), JSON.stringify(data));
  }

  del(id) {
    return localStorage.removeItem(this.key(id));
  }
}
