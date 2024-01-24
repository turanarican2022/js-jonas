'use strict';

/********************************************/
/* SIMPLE ARRAY METHODS                     */
/********************************************/

let arr = ['a', 'b', 'c', 'd', 'e'];

// slice() method -- end parameter is not included
// does not mutate the original array

let sliced = arr.slice(2);
console.log(sliced); // [ 'c', 'd', 'e' ]
sliced = arr.slice(1, 4);
console.log(sliced); // [ 'b', 'c', 'd' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]
sliced = arr.slice(-3);
console.log(sliced); // [ 'c', 'd', 'e' ]
// slice() method can be used to create a "shallow" copy of an array
let shallow = arr.slice();
console.log(shallow); // [ 'a', 'b', 'c', 'd', 'e' ]

// splice() method -- mutates the original array
// extracted array is gone from the original array

let spliced = arr.splice(2);
console.log(spliced); // [ 'c', 'd', 'e' ]
console.log(arr); // [ 'a', 'b' ]

// reverse() -- mutates the original array
arr = ['j', 'a', 'f', 'b', 'g', 'c', 'd', 'h', 'e', 'i'];
let reversed = arr.reverse();
console.log(reversed);
/*
[
  'i', 'e', 'h', 'd',
  'c', 'g', 'b', 'f',
  'a', 'j'
]
*/
console.log(arr);
/*
[
  'i', 'e', 'h', 'd',
  'c', 'g', 'b', 'f',
  'a', 'j'
]
*/

// concat()
arr = [1, 2, 3];
arr = arr.concat([4, 5, 6]);
console.log(arr); // [ 1, 2, 3, 4, 5, 6 ]

// join()
arr = ['Citroen', 'Alfa Romeo', 'Mazda', 'Fiat'];
console.log(`in the past i had ${arr.join(', ')}`);
// in the past i had Citroen, Alfa Romeo, Mazda, Fiat
