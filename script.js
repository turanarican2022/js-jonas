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

// OPTIONAL CHAINING (?.)
/* evaluates in "NULLISH" way */ /* it means 0 and '' evaluated "existing"... */

// With Objects
console.log(restaurant.openingHours.sat?.open); // 0
console.log(restaurant.openingHours.mon?.close); // undefined

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const openHour = restaurant.openingHours[day]?.open;
  const closeHour = restaurant.openingHours?.[`${day}`]?.close;
  // console.log(openHour);
  /*
undefined
undefined
undefined
12
11
0
undefined
*/

  console.log(
    openHour &&
      closeHour &&
      `the restaurant opens at ${openHour} and closes at ${closeHour}`
  );
  /*
undefined
undefined
undefined
the restaurant opens at 12 and closes at 22
the restaurant opens at 11 and closes at 23
0
undefined
*/
}

// With Methods;
console.log(restaurant.order?.(0, 1) ?? 'method does not exist'); // (2) ['Focaccia', 'Pasta']

// With Arrays;
const cars = [
  { make: 'Citroen', year: 2012 },
  { make: 'Alfa Romeo', year: 2008 },
];
console.log(cars[0]?.['make']); // Citroen
