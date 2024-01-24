'use strict';

/********************************************/
/* forEach(()=>{}) with maps and sets       */
/********************************************/

// with maps

const currenciesMap = new Map([
  ['USD', 'US Dollar'],
  ['GBP', 'British Pound'],
  ['EUR', 'Euro'],
]);

console.log(currenciesMap);
/*
Map(3) {
  'USD' => 'US Dollar',
  'GBP' => 'British Pound',
  'EUR' => 'Euro'
}
*/

currenciesMap.forEach((val, key, mapItself) => {
  console.log(`${key} is short for ${val}`);
});
/*
USD is short for US Dollar
GBP is short for British Pound
EUR is short for Euro
*/

// with sets
const carsSet = new Set(['Citroen', 'Alfa Romeo', 'Mazda', 'Fiat']);
carsSet.forEach((val, key, setItself) => {
  console.log(`Number ${key} car I bought was ${val}`);
});
/*
Number Citroen car I bought was Citroen
Number Alfa Romeo car I bought was Alfa Romeo
Number Mazda car I bought was Mazda
Number Fiat car I bought was Fiat
*/
