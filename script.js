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

// LOOPING ARRAYS - FOR OF LOOP

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const meal of menu) {
  console.log(meal); /*
Focaccia
Bruschetta
Garlic Bread
Caprese Salad
Pizza
Pasta
Risotto
*/
}

console.log(menu.entries()); // Array Iterator
console.log([...menu.entries()]); // (7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]

for (const meal of menu.entries()) console.log(meal[0], meal[1]);
/*
0 Focaccia
1 Bruschetta
2 Garlic Bread
3 Caprese Salad
4 Pizza
5 Pasta
6 Risotto
*/

for (const [i, el] of menu.entries()) console.log(`${i} corresponds to ${el}`);
/*
0 corresponds to Focaccia
1 corresponds to Bruschetta
2 corresponds to Garlic Bread
3 corresponds to Caprese Salad
4 corresponds to Pizza
5 corresponds to Pasta
6 corresponds to Risotto
*/
