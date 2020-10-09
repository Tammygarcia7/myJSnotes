//* BOOLEANS - either have to be T or F
let on = true;
console.log(on);

let off = false;
console.log (off);

//* NULL - means empty
let empty = null;
console.log(empty);

//* UNDEFINED
let undef = undefined;
console.log(undef);

let x;
console.log(x)

//* NUMBERS when u get to 16 digits js acts wierd--not a good calculator

let degrees = 90;
console.log(degrees)

let precise = 999999999999999;
console.log(precise)

let rounded = 9999999999999999;
console.log(rounded);

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard)

let a = Number('123');
console.log(a);

//* STRINGS use a backslash when using a word with an ' or `..js thinks it's breaking the strings
let stringOne = "double quotes";
let stringtwo = 'single quotes';
let stringThree = 'I\'m home';
let stringFour = `I'm home`;
let stringFive = `You can use ${stringOne} or ${stringtwo}!`

console.log(stringFive)

let first = 1050 + 100;
let second = '1050' + '100';

console.log(first);
console.log(second);

//* Good for when using API;s and you are not sure what you are using
console.log(typeof first);
console.log(typeof second);


//* this is string interpolation
let animal = 'dog';

console.log('I have a ' + animal);
console.log(`I have a ${animal}`);

//*OBJECTS-can store lots of stuff in an object

let frodo = {
    race: 'hobbit',
    rings: 1,
    isShort: true,
};

//* key = race or rings.. value pair

console.log(frodo);
console.log(typeof frodo);

//* ARRAYS
let tacos = ['large', 4, true];
console.log(tacos);
console.log(typeof tacos);

//* arrays are there own specifc types in JS are in numbers classified as objects