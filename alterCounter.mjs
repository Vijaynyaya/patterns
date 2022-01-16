import singletonCounter from "./counter.mjs";

singletonCounter.increment()
console.log(singletonCounter.getCount())

singletonCounter.getCount = () => 0
/**
*singletonCounter.getCount = () => 0
*                          ^
*TypeError: Cannot add property getCount, object is not extensible
*/

singletonCounter.increment()

console.log(singletonCounter.getCount())