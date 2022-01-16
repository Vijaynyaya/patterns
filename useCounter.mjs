import singletonCounter from "./counter.mjs";

console.log('initial value of the counter is', singletonCounter.getCount())

console.log('incrementing counter by 5')
for (let i = 0; i < 5; i++) {
  singletonCounter.increment()
}
console.log(singletonCounter.getCount())

console.log('decrementing counter by 4')
for (let i = 0; i < 4; i++) {
  singletonCounter.decrement()
}
console.log(singletonCounter.getCount())
