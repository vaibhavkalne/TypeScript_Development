/*
---------------------------------------------------------------------------------
 2. Template Strings
---------------------------------------------------------------------------------
 Instead of using String Concatenation Operator for joining two or more
 String Literals Template Strings are best alternative. In this we use ` (back tick).

*/
/*
Create en Employee Object and prepares a Template String using
String Concatenation and Template String.
 */
var employee = {
    name: "Vaibhav",
    age: 22,
    designation: "Web Developer"
};
var stringConcat = '<section style="background-color: deepskyblue">' +
    '<h1>Name:' + employee.name + '</h1>' +
    '<h1>Age:' + employee.age + '</h1>' +
    '<h1>Designation:' + employee.designation + '</h1>' +
    '</section>';
document.querySelector('#container').innerHTML = stringConcat;
var templateString = "<section style=\"background-color: yellow\"> \n                        <h1>Name: " + employee.name + "</h1>\n                        <h1>Age: " + employee.age + "</h1>\n                        <h1>Designation:" + employee.designation + "</h1>\n                        </section>";
document.querySelector('#container').innerHTML = templateString;
