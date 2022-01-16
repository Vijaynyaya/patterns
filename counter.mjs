let count = 0;

class Counter {
  getCount() {
    return count
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