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
  orderDelivery({ starterIndex, mainIndex, address = 'Sonarella St. 4th.' }) {
    console.log(
      `order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} should be delivered to the address; ${address}`
    );
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

// DESTRUCTURING OBJECTS
const { name, categories, openingHours } = restaurant;
console.log(name, categories, openingHours);
// Classico Italiano (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] {thu: {…}, fri: {…}, sat: {…}}

// DIFFERENT VARIABLE NAMES THAN PROPERTY NAMES
const {
  name: restaurantName,
  categories: restCategories,
  openingHours: restOpeningHours,
} = restaurant;
console.log(restaurantName, restCategories, restOpeningHours);
// Classico Italiano (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] {thu: {…}, fri: {…}, sat: {…}}

// DEFAULT VALUES
const { menu = [], starterMenu: starter = [] } = restaurant;
console.log(menu, starter);
// (0) [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

// MUTATING VARIABLES
let a = 1;
let b = 2;
const obj = { a: '3', b: '4' };
({ a, b } = obj);
console.log(a, b); // 3 4

// NESTED OBJECTS
const {
  thu: { open, close },
  fri: { open: friOpen, close: friClose },
  sat: saturday,
} = restaurant.openingHours;
console.log(open, close, friOpen, friClose, saturday); // 12 22 11 23 {open: 0, close: 24}

// PARAMETER DESTRUCTURING
restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 2,
  address: 'Villa della al Espanolea 21st century',
}); // order received: Garlic Bread and Risotto should be delivered to the address; Villa della al Espanolea 21st century
restaurant.orderDelivery({
  starterIndex: 2,
  mainIndex: 2,
}); // order received: Garlic Bread and Risotto should be delivered to the address; Sonarella St. 4th.
