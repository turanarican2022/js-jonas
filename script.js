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
/* SETS - COLECTION OF UNIQUE VALUES */
/*************************************/

const cars = new Set([
  'Citroen',
  'Alfa Romeo',
  'Citroen',
  'BMW',
  'Fiat',
  'Mazda',
  'BMW',
]);
console.log(cars);
// Set(5) { 'Citroen', 'Alfa Romeo', 'BMW', 'Fiat', 'Mazda' }

// sets are iterables
console.log(new Set('Turan'));
// Set(5) { 'T', 'u', 'r', 'a', 'n' }

console.log(cars.size); // 5

console.log(cars.has('Alfa Romeo')); // true
console.log(cars.has('Mercedes')); // false

cars.add('Porsche');
console.log(cars);
// Set(6) { 'Citroen', 'Alfa Romeo', 'BMW', 'Fiat', 'Mazda', 'Porsche' }

cars.delete('Fiat');
console.log(cars);
// Set(5) { 'Citroen', 'Alfa Romeo', 'BMW', 'Mazda', 'Porsche' }

// in sets there are no indexes ---> cars[0] ---> invalid

// cars.clear();
// console.log(cars); // Set(0) {}

// as sets are iterables;
for (let car of cars) console.log(car);
/*
Citroen
Alfa Romeo
BMW
Mazda
Porsche
*/

// a use case for set is clearing duplicate data from arrays
const carsIhad = [
  'Citroen',
  'Alfa Romeo',
  'Mazda',
  'Alfa Romeo',
  'Fiat',
  'BMW',
  'BMW',
];
const carBrandsIHad = [...new Set(carsIhad)];
console.log(carBrandsIHad);
// [ 'Citroen', 'Alfa Romeo', 'Mazda', 'Fiat', 'BMW' ]
