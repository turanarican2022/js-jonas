'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // PARAMETER DESTRUCTURING
  orderDelivery({ starterIndex, mainIndex, address = 'Sonarella St. 4rd.' }) {
    console.log(
      `order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} should be delivered to the address; ${address}`
    );
  },
  // SPREAD OPERATOR WITH FUNCTION ARGUMENTS
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here a pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

/*************************************/
/* MAPS - TO MAP VALUES TO KEYS      */
/* THE KEY CAN BE ANY TYPE           */
/*************************************/

// ITERATING MAPS

const firstCar = new Map();
firstCar.set('brand', 'Citroen');
firstCar.set(2012, 'year');
firstCar.set(true, 'sold before wrecked');
console.log(firstCar);
/*
Map(3) {
  'brand' => 'Citroen',
  2012 => 'year',
  true => 'sold before wrecked'
}
*/

// adding a key-value pair directly returns the new map
console.log(firstCar.set(false, 'loved it'));
/*
Map(4) {
  'brand' => 'Citroen',
  2012 => 'year',
  true => 'sold before wrecked',
  false => 'loved it'
}
*/

// Creating a map with an array of arrays
const quiz = new Map([
  ['question', 'the programming language you love the most?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct answer, yeeeyy!'],
  [false, 'Try again!'],
]);
console.log(quiz);
/*
Map(7) {
  'question' => 'the programming language you love the most?',
  1 => 'C',
  2 => 'Java',
  3 => 'JavaScript',
  'correct' => 3,
  true => 'Correct answer, yeeeyy!',
  false => 'Try again!'
}
*/

// Creating a map from an object
// for example this is an array of arrays
console.log(Object.entries(restaurant.openingHours));
/*
[
  [ 'thu', { open: 12, close: 22 } ],
  [ 'fri', { open: 11, close: 23 } ],
  [ 'sat', { open: 0, close: 24 } ]
]
*/
const open = new Map(Object.entries(restaurant.openingHours));
console.log(open);
/*
Map(3) {
  'thu' => { open: 12, close: 22 },
  'fri' => { open: 11, close: 23 },
  'sat' => { open: 0, close: 24 }
}
*/

// Converting from map to array (of arrays)
const quizArr = [...quiz];
console.log(quizArr);
/*
[
  [ 'question', 'the programming language you love the most?' ],
  [ 1, 'C' ],
  [ 2, 'Java' ],
  [ 3, 'JavaScript' ],
  [ 'correct', 3 ],
  [ true, 'Correct answer, yeeeyy!' ],
  [ false, 'Try again!' ]
]
*/

const quizKeys = [...quiz.keys()];
console.log(quizKeys); // [ 'question', 1, 2, 3, 'correct', true, false ]

const quizValues = [...quiz.values()];
console.log(quizValues);
/*
[
  'the programming language you love the most?',
  'C',
  'Java',
  'JavaScript',
  3,
  'Correct answer, yeeeyy!',
  'Try again!'
]
*/
