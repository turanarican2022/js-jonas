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

// DESTRUCTURING ARRAYS
let [firstCategory, secondCategory] = restaurant.categories;
console.log(firstCategory, secondCategory);

// SWITCHING ELEMENTS
[firstCategory, secondCategory] = [secondCategory, firstCategory];
console.log(firstCategory, secondCategory);

// RECEIVE 2 RETURN VALUES FROM A FUNCTION
const [starterMeal, mainMeal] = restaurant.order(2, 0);
console.log(starterMeal, mainMeal);

// DESTRUCTURING NESTED ARRAYS
const [a, b = 7, [c, d], , e] = [1, 2, [3, 4, 5], 6, 9];
console.log(a, b, c, d, e);

// DEFAULT VALUES
const [f = 1, g = 7, h] = [3, , 4];
console.log(f, g, h);
