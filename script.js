'use strict';

/********************************************/
/* at() METHOD                              */
/********************************************/

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr[0] === arr.at(0)); // true

// for axample, makes getting the last element of an array shorter

console.log(arr[arr.length - 1] === arr.at(-1)); // true

// for example, slice() method gets the last value as an array with one
// element inside but at() returns it as a single value

console.log(arr.slice(-1)); // [ 'e' ]
console.log(arr.at(-1)); // e

// also works on string

const newName = 'Halide Tuğba';
console.log(newName.at(-5)); // T
