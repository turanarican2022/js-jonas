'use strict';

/********************************************/
/* CLOSURES                                 */
/********************************************/

// a function remembers the variable environment of the context it was born in

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const book = secureBooking();
book(); // 1 passengers
book(); // 2 passengers
book(); // 3 passengers
