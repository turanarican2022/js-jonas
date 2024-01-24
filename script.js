'use strict';

/********************************************/
/* LOOPIN ARRAYS - forEach(()=>{            */
/********************************************/

const bankMovements = [200, -100, -150, 300, 400];

bankMovements.forEach(mov => {
  const msg = mov > 0 ? ' of $ deposited' : 'of $ withdrawn';
  console.log(`${Math.abs(mov)} ${msg}`);
});
/*
200  of $ deposited
100 of $ withdrawn
150 of $ withdrawn
300  of $ deposited
400  of $ deposited
*/

// with indexes;
bankMovements.forEach((mov, i, arr) => {
  const msg = mov > 0 ? ' of $ deposit' : 'of $ withdraw';
  console.log(`Movement ${i + 1} is a ${Math.abs(mov)} ${msg}`);
});
/*
Movement 1 is a 200  of $ deposit
Movement 2 is a 100 of $ withdraw
Movement 3 is a 150 of $ withdraw
Movement 4 is a 300  of $ deposit
Movement 5 is a 400  of $ deposit
*/

// a fundamental difference from for of loop : WE CANNOT BREAK OR CONTINUE IN forEach
