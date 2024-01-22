'use strict';

/*************************************/
/* THE FUNCTIONS call() METHOD       */
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

lufthansa.book(945, 'Halide Tuğba');
// Halide Tuğba booked a seat on LH945 from Lufthansa
console.log(lufthansa.bookings);
// [ { flight: 'LH945', passengerName: 'Halide Tuğba' } ]

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 45, 'Halide Tuğba');
// Halide Tuğba booked a seat on EW45 from Eurowings
console.log(eurowings.bookings);
// [ { flight: 'EW45', passengerName: 'Halide Tuğba' } ]

lufthansa.book.call(eurowings, 26, 'Turan ARICAN');
// Turan ARICAN booked a seat on EW26 from Eurowings
console.log(eurowings.bookings);
/*
[
  { flight: 'EW45', passengerName: 'Halide Tuğba' },
  { flight: 'EW26', passengerName: 'Turan ARICAN' }
]
*/
