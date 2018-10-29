// Student Type Interface
interface Student{
    name : string,
    age : number,
    course : string,
    address : {
        city : string,
        state : string,
        country : string
    }
}

let student1:Student = {
    name : 'vaibhav',
    age : 22,
    course : 'Engg',
    address : {
        city : 'Aurangabad',
        state : 'Maharashtra',
        country : 'India'
    }
};

function printStudent(student:Student):void{
    console.log(`name : ${student.name},
                age : ${student.age},
                course : ${student.course},
                Address : ${student.address}
    `);
}

printStudent(student1);



