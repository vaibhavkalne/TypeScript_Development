/*
---------------------------------------------------------------------------------
 3. Let & Const
---------------------------------------------------------------------------------
 This 'let' is an ES6 Feature to declare variables like 'var' in javascript.

*/
// Usage of let vs Var inside for loop created variables
for (var i = 0; i <= 10; i++) {
    //console.log(i);
}
console.log(i);
for (var j = 0; j <= 10; j++) {
    //some statement
}
//console.log(j); //Error: cannot find the name 'j'
// Usage of let vs var inside if block
var course = 'Engineering';
if (course === 'Engineering') {
    var job1 = 'Software Engineering';
    var job2 = 'Goverment';
}
console.log(job1);
//console.log(job2); //Error: cannnot find the 'Job2'
// Usage Const variable creation
var APP_NAME = 'TS App';
//APP_NAME = 'JS App'; //cananot assign to read-only property
