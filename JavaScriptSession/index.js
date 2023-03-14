var person = {
    firstName: "Iftikhar",
    lastName: "Ahmad",
    age: 20,
    salary: null,
    allowed: true,
    gadgets: ["watch", "laptop", "mobile"]
}

var students = ["Irfan", "Haseeb", "Yasir", "Zahid"];

students[2] = "Yaseen";

person.age = 12;

var salary = null;

var num1 = 45;
var num2 = 55;

function sum(a, b) {
    return a + b;
}

var result = sum(9, 78);

console.log("result", result);

let email = "ammad@gmail.com"
const password = "123";
let loggedIn = true;

if(loggedIn == true) {
    console.log("Welcome to your account!")
} else {
    console.log("Unauthenticated")
}

let message = "";
let student = {
    name: "Saif Ullah",
    institute: "UET"
}

switch(student.institute) {
    case "CUSIT":
        message = "CUSIT is better";
        break;

    case "Agriculture UNI":
        message = "We the Agriculturians";
        break;

    case "FAST Sahiwal":
        message = "FAST Sahiwal is the king";
        break;

    case "UOP":
        message = "UOP is above the sky";
        break;

    default:
        message = "You are not on our list"
}

console.log(message);

for(let i = 1; i <= 100; i = i + 1) {
    console.log(i)
}
