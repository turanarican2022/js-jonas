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

/*******************/
/* LOOPING OBJECTS */
/*******************/

const cars = {
  Citroen: {
    model: 'C3',
    year: 2012,
  },
  'Alfa Romeo': {
    model: 156,
    year: 2008,
  },
  Mazda: {
    model: 323,
    year: 1994,
  },
  Fiat: {
    model: 'Marea',
    year: 2005,
  },
};

// looping KEYS (a.k.a. property names)

const carBrands = Object.keys(cars);
console.log(carBrands); // (4) ['Citroen', 'Alfa Romeo', 'Mazda', 'Fiat']

let carModels = [];
Object.keys(cars).forEach(car => {
  carModels.push(cars[car].model);
});
console.log(carModels); // (4) ['C3', 156, 323, 'Marea']

// looping VALUES (a.k.a. property values)

carModels = Object.values(cars);
console.log(carModels); // (4) [{…}, {…}, {…}, {…}]

carModels = [];
Object.values(cars).forEach(car => {
  carModels.push(car.model);
});
console.log(carModels); // (4) ['C3', 156, 323, 'Marea']

// looping ENTRIES
const carsInfo = Object.entries(cars);
for (const [brand, info] of carsInfo) {
  console.log(`I had a ${brand} ${info.model} car of year ${info.year}`);
  /*
I had a Citroen C3 car of year 2012
I had a Alfa Romeo 156 car of year 2008
I had a Mazda 323 car of year 1994
I had a Fiat Marea car of year 2005
*/
}

/* destructuring right at the place */
for (const [brand, { model, year }] of carsInfo) {
  console.log(`I had a ${brand} ${model} car of year ${year}`);
  /*
I had a Citroen C3 car of year 2012
I had a Alfa Romeo 156 car of year 2008
I had a Mazda 323 car of year 1994
I had a Fiat Marea car of year 2005
*/
}
