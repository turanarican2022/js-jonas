'use strict';

/********************************************/
/* IMMEDIATELY INVOKED FUNCTION EXPRESSIONS */
/********************************************/

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

// being called only once and then disappears
// we don't need to save it somewhere

(function () {
  console.log(
    'This function runs immediately and cannot be called elsewhere again'
  );
})(); // This function runs immediately and cannot be called elsewhere again

// also works with arrow functions
(() => console.log('This will neither again runs'))(); // This will neither again runs

// parameters can be used
(myName => console.log(`Hello ${myName} only once!`))('Halit'); // Hello Halit only once!
