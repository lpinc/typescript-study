class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
   firstName: string;
   middleInitial: string;
   lastName: string;
}

function greeter(person : Person) {
   return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName + "<br>";
}

var user = new Student("Jane", "M.", "User");
var user2 = new Student("Bill","Ba","Oh");

var html = greeter(user) + greeter(user2);

document.body.innerHTML = html;