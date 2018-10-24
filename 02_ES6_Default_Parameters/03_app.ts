/*
---------------------------------------------------------------------------------
    1. Default Parameters
---------------------------------------------------------------------------------
    This feature is to provide some default values to optional parameters.
    If any of the parameter is not supplied the program will be using this default
parameters
*/

// Create a function and provide few default parameters using ES6

let greetMsg = '':
function greet(name:string,age:number = 22):string{
    greetMsg = 'Hello ' + name + ' you are ' + age + ' years old ';
    return greetMsg;
 }
 let result = greet("vaibhav",22);
console.log('Result: ' + result);