'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

/*************************************/
/* WORKING WITH STRINGS              */
/*************************************/

const airline = 'TAP Air Portugal';
const plane = 'A320';

// index of a letter - returns the first occurence
// returns -1 if not found
console.log(airline.indexOf('P')); // 2

// last index of
console.log(airline.lastIndexOf('t')); // 11

// slice - first index is inclusive, second index is exclusive
// returns a new string
console.log(airline.slice(4, 7)); // Air
console.log(airline.slice(-8)); // Portugal
// instead of hard-coding indexes, for example extract the first word
console.log(airline.slice(0, airline.indexOf(' '))); // TAP

// changing the case of a string
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL
console.log(airline.toLowerCase()); // tap air portugal
let correctCapitalization = 'halit'[0].toUpperCase();
console.log(correctCapitalization); // H
correctCapitalization = 'halit'[0].toUpperCase() + 'halit'.slice(1);
console.log(correctCapitalization); // Halit

// trim() method
console.log('   Halit Turan ARICAN   \n'.trim()); // Halit Turan ARICAN

// replace parts of the strings
// const airline = 'TAP Air Portugal';
const priceInEU = '€224,45';
const priceInEUNormalized = priceInEU.replace('€', '$').replace(',', '.');
const priceInUS = priceInEUNormalized.replace(
  priceInEUNormalized.slice(1),
  String(Number(priceInEUNormalized.slice(1)) * 1.2)
);
console.log(priceInUS); // $269.34

// replaceAll()
const callToGates = 'Please come to door 11, to door 11';
console.log(callToGates.replaceAll('door', 'gate'));
// Please come to gate 11, to gate 11

// includes(), startsWith(), endsWith()
console.log(airline.includes('TAP')); // true
console.log(airline.startsWith('TAP')); // true
console.log(airline.endsWith('t')); // false

// split - split a string based on a divider string
const sentence = 'I_am_gonna make_an_artificial turf for_football';
console.log(sentence.split('_'));
// [ 'I', 'am', 'gonna make', 'an', 'artificial turf for', 'football' ]
const [firstName, lastName] = 'Halit ARICAN'.split(' ');
console.log(firstName, lastName); // Halit ARICAN

// join()
const fullName = 'Halit Turan ARICAN';
const nameWithTitleWithPlus = ['Mr.', ...fullName.split(' ')].join('+');
console.log(nameWithTitleWithPlus); // Mr.+Halit+Turan+ARICAN

// padding a string until a certain desired length
console.log('this is a string'.padStart(30, '+')); // ++++++++++++++this is a string
console.log('another string'.padEnd(30, '#')); // another string################
console.log('string'.padStart(12, '$').padEnd(18, '€')); // $$$$$$string€€€€€€
// a use case, masking a credit card except the last 4 digits
const creditCardNumber = 5468132409567843;
const maskedCreditCardNumber = String(creditCardNumber)
  .slice(-4)
  .padStart(16, '*');
console.log(maskedCreditCardNumber); // ************7843

// repeat()
const att = 'to the door 666 ';
const repeatAtt = att.repeat(3);
console.log(repeatAtt); // to the door 666 to the door 666 to the door 666
