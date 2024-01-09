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

// LOGICAL ASSIGNMENT OPERATORS

// the OR assignment operator
const restaurant1 = {
  resName: 'Capricorn',
  numTables: 23,
  otoparkCapacity: 0,
};
const restaurant2 = {
  resName: 'Gemini',
  owner: 'Nerisenco',
};
restaurant1.numTables ||= 10; // equals restaurant1.numTables = restaurant1.numTables || 10
restaurant2.numTables ||= 10; // // assign a value to a variable if it is currently falsy
console.log(restaurant1.numTables, restaurant2.numTables); // 23 10

// the NULLISH assignment operator
restaurant1.otoparkCapacity ??= 12; // assign a value to a variable if it is currently nullish
console.log(restaurant1.otoparkCapacity); // 0

// the AND assignment operator
restaurant2.owner &&= 'ANONYMOUS'; // assign a value to a variable if it is currently truthy
console.log(restaurant2.owner); // ANONYMOUS
