let count = 0;

class Counter {
  #prop = 'loki';
  getPrivateProp() {
    return this.#prop;
  }
  getInstance() {
    return this;
  }
  getCount() {
    return count;
  }
  increment() {
    return ++count;
  }

  decrement() {
    return --count;
  }
}

const singletonCounter = Object.freeze(new Counter())

export default singletonCounter;