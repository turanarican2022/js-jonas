'use strict';

/*************************************/
/* THE bind() METHOD                 */
/*************************************/

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} booked a seat on ${this.iataCode}${flightNum} from ${this.airline}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      passengerName,
    });
  },
};

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// does not immediately call the bound function

const bookEW = lufthansa.book.bind(eurowings);

bookEW(546, 'Halide Tuğba');
// Halide Tuğba booked a seat on EW546 from Eurowings

const book = lufthansa.book;

// some of the arguments can be set in stone beforehand
const bookEW657 = book.bind(eurowings, 657);
bookEW657('Turan ARICAN');
// Turan ARICAN booked a seat on EW657 from Eurowings

// bind() method with event listeners
// normally, the callback function's "this" refer to the
// HTML element calling the function upon event

lufthansa.numOfPlanes = 300;
lufthansa.buyNewPlane = function () {
  console.log(`number of planes before buy: ${this.numOfPlanes}`);
  this.numOfPlanes++;
  console.log(`a new one bought and now it is ${this.numOfPlanes}`);
};

const newPlaneBtnLF = document.querySelector('.lf-buy');

newPlaneBtnLF.addEventListener('click', lufthansa.buyNewPlane.bind(lufthansa));
/* number of planes before buy: 300
   a new one bought and now it is 301
*/

eurowings.numOfPlanes = 120;

const newPlaneBtnEW = document.querySelector('.ew-buy');

newPlaneBtnEW.addEventListener('click', lufthansa.buyNewPlane.bind(eurowings));
/*
number of planes before buy: 120
a new one bought and now it is 121
*/
