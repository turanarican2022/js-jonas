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

// SHORT CIRCUITING WITH OR OPERATOR
/* Use ANY datatype, return ANY datatype */
// SHORT CIRCUITING WITH THE "OR" || OPERATOR
/* if the first value is TRUTHY, it will immediately return the first value */
/* if none of the values are TRUTHY, it will return the last FALSY value */
/* if there are multiple values, the first found TRUTHY is returned */
console.log('----OR----');
console.log('Halit' || 38); // Halit
console.log(38 || 'Halit'); // 38
const age = 38;
console.log(false || age >= 18); // true
console.log(0 || undefined); // undefined
console.log(undefined || null || age === 12 || 'Halit' || 'Turan' || 0); // Halit
restaurant.orderPasta(...['mushroom', 'spinach', 'cheese']) || false; //Here a pasta with mushroom, spinach and cheese --- !!! this one works but useless

// SHORT CIRCUITING WITH THE "AND" && OPERATOR
/* if the first value is FALSY, it will immediately be returned */
/* if none of the values are FALSY, the last TRUTHY value will be returned */
/* if there are multiple values, the first found FALSY is returned */
console.log('----AND----');
console.log(false && 'Halit'); // false
console.log('Halit' && 'Turan' && undefined && 38 && null); // undefined
console.log('first' && 'second' && 'third is returned'); // third is returned
/*  a practical use case of this is checking if a function exists before
    attempting to call it */
restaurant.orderPasta &&
  restaurant.orderPasta(...['mushroom', 'spinach', 'cheese']); // Here a pasta with mushroom, spinach and cheese

restaurant.orderSomeOtherThing && restaurant.orderSomeOtherThing('some thing'); // never runs, no return
