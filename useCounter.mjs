import singletonCounter from "./counter.mjs";

console.log('instance of the singletong', singletonCounter.getInstance(), '\n\tNotice the empty object')
console.log('get private property', singletonCounter.getPrivateProp())

//console.log("Accessing private properties directly throws an error", singletonCounter.#prop)
/**
*console.log("Accessing private properties directly throws an error", singletonCounter.#prop)
*                                                                                    ^
*SyntaxError: Private field '#prop' must be declared in an enclosing class
*/

let prop = '#prop';
console.log('accessing private properties through [] notation does not throw any error', singletonCounter[prop], '\n\t Notice it returned undefined')
