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

// REST OPERATOR
/*  collects elements in contrast to spread operator
    spread operator is used on the right side of equal sign "="
    whereas rest operator is used on the left side
*/

const { name, location, categories, openingHours, ...otherRestaurantInfo } =
  restaurant;
console.log(
  name,
  location,
  categories,
  openingHours,
  '\n---other restaurant info collected with rest in a new object-->\n',
  otherRestaurantInfo
);
// Classico Italiano Via Angelo Tavanti 23, Firenze, Italy (4) ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'] {thu: {…}, fri: {…}, sat: {…}}
// ---other restaurant info collected with rest in a new object-->
//  {starterMenu: Array(4), mainMenu: Array(3), order: ƒ, orderDelivery: ƒ, orderPasta: ƒ}

// USING ... OPERATOR ON BOTH SIDES
const [firstMeal, secondMeal, ...otherMeals] = [
  ...restaurant.starterMenu,
  ...restaurant.mainMenu,
];
console.log(firstMeal, secondMeal, otherMeals);
// Focaccia Bruschetta (5) ['Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// REST OPERATOR IN FUNCTIONS (TO ACCEPT ANY NUMBER OF PARAMETERS!!!)
restaurant.guestCooks = function (...guestCooks) {
  let guestcooks = '';
  for (let i = 0; i < guestCooks.length; i++) {
    guestcooks += `${guestCooks[i]}, `;
  }
  guestcooks = guestcooks.slice(0, -2);
  console.log(`These guest cooks will be cooking today with us; ${guestcooks}`);
};
restaurant.guestCooks('Tim', 'Ton', 'Tuckle'); // These guest cooks will be cooking today with us; Tim, Ton, Tuckle

// REST OPERATOR IN FUNCTION ARGUMENTS AND SPREAD OPERATOR IN FUNCTION CALLS
/*  This may seem useless but in this way we can make a function accepting both
    seperated values and arrays
*/
const todaysGuestCooks = ['Jemmy', 'Jammer', 'JinSlayer'];
restaurant.guestCooks(...todaysGuestCooks); // These guest cooks will be cooking today with us; Jemmy, Jammer, JinSlayer
