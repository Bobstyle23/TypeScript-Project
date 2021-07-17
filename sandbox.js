var character = 'mario';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var circumference = function (diameter) {
    return diameter * Math.PI;
};
console.log(Math.round(circumference(7.5)));
var names = ['MukhammadBobur', 'Bakhtiyor', "Mukhtasar", "Maftuna"];
names.push("Ulugbek");
names.push("Komila");
names.forEach(function (name) {
    console.log(name);
});
var ages = [25, 22, 16, 13];
ages.push(45);
ages.push(41);
ages.forEach(function (age) {
    console.log(age);
});
var person = {
    name: 'MukhammadBobur',
    hobby: 'Reading',
    age: 25
};
person.name = "Bob";
person.hobby = "Gym";
person.age = 24;
console.log(person);
var char;
var personAge;
var isLoggedIn;
var familyNames = [];
char = 'Bob';
personAge = 25;
isLoggedIn = true;
console.log(char, personAge, isLoggedIn);
familyNames.push("Hello", "World");
console.log(familyNames);
var mixed = [];
mixed.push("Bob", 25, true);
console.log(mixed);
var uid;
uid = 123;
uid = '123';
var ninja;
ninja = { name: "yoshi", belt: 'black', age: 40 };
console.log(ninja);
var ninjaOne;
ninjaOne = { name: 'mario', belt: 'orange', age: 25 };
console.log(ninjaOne);
