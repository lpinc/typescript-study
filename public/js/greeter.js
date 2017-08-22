var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
})();
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.middleInitial + " " + person.lastName + "<br>";
}
var user = new Student("Jane", "M.", "User");
var user2 = new Student("Bill", "Ba", "Oh");
var html = greeter(user) + greeter(user2);
document.body.innerHTML = html;
