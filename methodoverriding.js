
class Person {
    greet() {
        console.log("Hello. I am a person.");
        };
}
class Employee extends Person {
    greet() {
        super.greet(); 
        console.log("Hello. I am an employee.");
    }
}
    let per = new Person(); 
    let emp = new Employee(); 
    per.greet();
    emp.greet();