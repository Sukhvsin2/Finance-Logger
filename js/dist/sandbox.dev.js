"use strict"; // functions

var circ = function circ(diameter) {
  return diameter * Math.PI;
};

console.log(circ(10)); // Arrays

var names = ['name1', 'name2'];
names.push('name3'); // Error because of type is not same
// names.push(1);
// Objects

var object = {
  name: "Sukh",
  age: 20
}; // Error of type
// object.age = 'as'
// Error of adding new property because it doesn't exist before
// object.skills = ['C++', 'Java', 'Python']
// Correct

object.age = 21; // Correct

object = {
  name: 'Sukhvinder',
  age: 20
}; // Error because have to put all values again & can't add new property into it.
// object = {
//     name: 'Sukh',
//     skills: ['check1', 'check2']
// }

/**
 *
    Explicit types
    arrays
    union
    objects
 *
**/
// explicit types

var character;
var age;
var isLoggedIn; // Error because the type won't match
// age = 'as'

age = 69;
isLoggedIn = true;
character = 'Check these are characters'; // arrays
// let arr: string[];

var arr = []; // Error because it's string array
// arr.push(34);
// Correct but, error cause of not init array. If arr: string is not equals []

arr.push('S1');
arr.push('S2');
arr.push('S3');
arr.push('S4');
arr = ['String1', 'String2', 'String3']; // union types

var mixed = [];
mixed.push('Check String');
mixed.push(69); // Error because we've not specify the boolean value
// mixed.push(true);

var uid;
uid = '123';
uid = 123; // Error
// uid = false
// objects

var sukh;
sukh = {
  name: 'Sukh',
  age: 69,
  course: 'TS'
}; // Correct because array could be considered as an object in TS

sukh = [];
var Sukh;
Sukh = {
  name: 'Sukh',
  "class": 'TS-400',
  loggedIn: true // check: 'noo'

}; // Dynamic data type ANY

var data = 25;
data = '123';
data = true;
data = 4.5;
data = {
  name: 'checkName'
};
data = ['hey'];
var arr2 = [];
arr2.push(23);
arr2.push('23');
arr2.push(['hey2']);
arr2.push({
  name: 'NameCheck'
});
console.log(arr2);
var object3; // function in use
// ? -> for the optional use of that parameter

var greet = function greet(a, b, c) {
  console.log('Hellow');
};

greet(1);