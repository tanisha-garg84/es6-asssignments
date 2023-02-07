class local {
  constructor() {
    this.store = new Map();
  }

  setItem(key, value) {
    if (typeof key !== "string") {
      console.log("Key must be a string.");
    }
    if (value === undefined) {
      console.log("Value must be provided.");
    } else {
      this.store.set(key, value);
    }
  }

  getItem(key) {
    if (this.store.has(key) {
      this.store.get(key);
    } else {
       console.log("Key must be a string.");
    }
  }
  removeItem(key) {
    if (this.store.has(key)) {
      this.store.delete(key);
    } else {
      console.log(`key not present`);
    }
  }
  clear() {
    if (this.store.size) {
      this.store.clear();
    } else {
      console.log(`empty`);
    }
  }
  get length() {
    return this.store.size;
  }
}
const localstorage = new local();
localstorage.setItem("name", "tanisha");
console.log(localstorage.getItem("name"));
localstorage.removeItem("name");
console.log(localstorage.getItem("name"));

localstorage.clear();

localstorage.setItem("name", "tanisha");
localstorage.setItem("age", "20");
console.log(localstorage.getItem("name"));
console.log(localstorage.getItem("age"));

console.log(localstorage);
console.log(localstorage.length);
