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

// set() methods can be chained

// to get values;
console.log(firstCar.get(true));
// sold before wrecked

// check keys;
console.log(firstCar.has('brand')); // true

// delete keys;
firstCar.delete(false);
console.log(firstCar);
/*
Map(3) {
  'brand' => 'Citroen',
  2012 => 'year',
  true => 'sold before wrecked'
}
*/

// there are also .clear() and .size
