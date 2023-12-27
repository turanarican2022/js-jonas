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

// SPREAD OPERATOR
const arr = [3, 4, 5];
const newArr = [1, 2, ...arr];
console.log(newArr); // (5) [1, 2, 3, 4, 5]
console.log(...newArr); // 1 2 3 4 5

restaurant.mainMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(restaurant.mainMenu); // (4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// COPY ARRAY USING SPREAD OPERATOR (SHALLOW COPY)
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy); // (4) ['Pizza', 'Pasta', 'Risotto', 'Gnocci']

// JOIN ARRAYS USING SPREAD OPERATOR
const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(fullMenu); // (8) ['Pizza', 'Pasta', 'Risotto', 'Gnocci', 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

/*  SPREAD OPERATOR CAN BU USED WITH ITERABLES 
    array, string, map, set but NOT object
*/ // using SPREAD OPERATOR WITH string
const lettersOfMyName = [...'Nitissa'];
console.log(lettersOfMyName); // (7) ['N', 'i', 't', 'i', 's', 's', 'a']

// SPREAD OPERATOR WITH FUNCTION ARGUMENTS
restaurant.orderPasta(...['Mushrooms', 'Asparagus', 'Cheese']); // Here a pasta with Mushrooms, Asparagus and Cheese

// CONDITIONALLY ADDING PROPERTIES TO AN ARRAY WITH SPREAD OPERATOR
const isSold = true;
let cars = ['Citroen', 'Alfa Romeo'];
cars = [...cars, ...(isSold ? ['Mazda', 'Fiat'] : [])];
console.log('---cond. add. prop. to. arr.--> \n', cars);

// SINCE ES6 THE SPREAD OPERATOR ALSO WORKS WITH OBJECTS
const restaurantCopy = { ...restaurant };
console.log('---deep clone? NO!-->\n', restaurantCopy);
//  YEEEEEYYYY! MADE A "DEEP COPY" --->>> sorry to myself, i did a
//  mistake here, this only copies as shallow, nested objects
//  are copied as references
// {name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), mainMenu: Array(4), …}

// EXPANDING (kind of...)
const advancedRestaurant = {
  foundedIn: 2027,
  ...restaurant,
  name: "Stipotto's Hally", // override the name property's value here
  foundedBy: ['Nitissa', 'Aaron'],
};
console.log(advancedRestaurant);
// {foundedIn: 2027, name: 'Stipotto's Hally', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), …}

// SPREADING OBJECT INTO VARIABLES
const {
  name: restaurantName,
  location: restaurantLocation,
  categories,
  starterMenu,
  mainMenu,
  order,
  orderDelivery,
  orderPasta,
} = restaurant;
console.log(
  '---spread obj into vars-->\n',
  restaurantName,
  restaurantLocation,
  categories,
  starterMenu,
  mainMenu,
  order,
  orderDelivery,
  orderPasta
);

// SPREADING ARRAYS INTO OBJECTS
const arrAy = ['Citroen', 'Alfa Romeo', 'Mazda', 'Fiat'];
const obJ = { ...arrAy };
console.log('---spread arrays into obj-->\n', obJ); // {0: 'Citroen', 1: 'Alfa Romeo', 2: 'Mazda', 3: 'Fiat'}

// CONDITIONALLY ADDING PROPERTIES TO AN OBJECT WITH SPREAD OPERATOR

const isGameOver = false;
let gameScores = { COD: 78, COLIN: 81, CITIES: 13 };
gameScores = {
  ...gameScores,
  ...(!isGameOver ? { TWOSOULS: 90, SKYRIM: 23 } : {}),
  // ALSO THE SAME --> ...(!isGameOver && { TWOSOULS: 90, SKYRIM: 23 })
};
console.log('---cond. add. prop. to. obj.--> \n', gameScores); // {COD: 78, COLIN: 81, CITIES: 13, TWOSOULS: 90, SKYRIM: 23}
