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

const singletonCounter = new Counter()

export default singletonCounter;