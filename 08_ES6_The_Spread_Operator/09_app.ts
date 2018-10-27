/*
---------------------------------------------------------------------------------
 7. The Spread Operator
---------------------------------------------------------------------------------
This is looks like var arg method in java but this is more than that.

In this, an array can be expanded and pass it as arguments to an another function which
Accepts '0' or more number of arguments as values.

*/

//Ex:

// Use spread operator to add between another array

let array1 = [30,40,50];
let array2 = [10,20,...array1,60,70,80];

console.log(`array2 : ${array2}`);

// find the Min of numbers
let numbers = [10,20,40,50,31,451,646,4646,464,64];
let min = Math.min(...numbers);
console.log(`min : ${min}`);

// to create a copy of an array
let arr1 = [10,20,30,40,50];
let arr2 = arr1.slice(); // creates a new copy
arr2 = [...arr1]; // Creates a new copy again from ES6
console.log(`arr2 : ${arr2}`);
