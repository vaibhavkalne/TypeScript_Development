var student1 = {
    name: 'vaibhav',
    age: 22,
    course: 'Engg',
    address: {
        city: 'Aurangabad',
        state: 'Maharashtra',
        country: 'India'
    }
};
function printStudent(student) {
    console.log("name : " + student.name + ",\n                age : " + student.age + ",\n                course : " + student.course + ",\n                Address : " + student.address + "\n    ");
}
printStudent(student1);
