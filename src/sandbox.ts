
// functions
const circ = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circ(10));

// Arrays
let names = ['name1', 'name2']

names.push('name3')

// Error because of type is not same
// names.push(1);


// Objects
let object = {
    name: "Sukh",
    age: 20
}

// Error of type
// object.age = 'as'

// Error of adding new property because it doesn't exist before
// object.skills = ['C++', 'Java', 'Python']

// Correct
object.age = 21;

// Correct
object = {
    name: 'Sukhvinder',
    age: 20
}

// Error because have to put all values again & can't add new property into it.
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

let character: string;
let age: number;
let isLoggedIn: Boolean;

// Error because the type won't match
// age = 'as'

age = 69;
isLoggedIn = true;
character = 'Check these are characters'

// arrays
// let arr: string[];
let arr: string[] = [];

// Error because it's string array
// arr.push(34);

// Correct but, error cause of not init array. If arr: string is not equals []
arr.push('S1');
arr.push('S2');
arr.push('S3');
arr.push('S4');


arr = ['String1', 'String2', 'String3']

// union types
let mixed: (string | number)[] = [];

mixed.push('Check String');
mixed.push(69);

// Error because we've not specify the boolean value
// mixed.push(true);


let uid: number | string;
uid = '123';
uid = 123;

// Error
// uid = false


// objects

let sukh: Object;
sukh = {
    name: 'Sukh',
    age: 69,
    course: 'TS'
}

// Correct because array could be considered as an object in TS
sukh = [];

let Sukh: {
    name: String,
    class: String,
    loggedIn: Boolean
}

Sukh = {
    name: 'Sukh',
    class: 'TS-400',
    loggedIn: true,
    // check: 'noo'
}


// Dynamic data type ANY
let data: any = 25;

data = '123';
data = true;
data = 4.5;
data = { name: 'checkName' }
data = ['hey']

let arr2: any[] = [];

arr2.push(23);
arr2.push('23');
arr2.push(['hey2']);
arr2.push({ name: 'NameCheck' })

console.log(arr2);

let object3: { name: any, class: any, uid: any };


// function in use

// ? -> for the optional use of that parameter
let greet = (a: number, b: number, c?: string | number) => {
    console.log('Hellow');
}

greet(1, 2);