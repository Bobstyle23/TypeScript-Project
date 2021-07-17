const character = 'mario';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);


inputs.forEach(input => {
    console.log(input);
    
})

const circumference = (diameter:number) => {
    return diameter * Math.PI;
}
console.log(Math.round(circumference(7.5)));


let names = ['MukhammadBobur', 'Bakhtiyor', "Mukhtasar", "Maftuna"];
names.push("Ulugbek");
names.push("Komila");

names.forEach(name => {
    console.log(name);
})

let ages = [25, 22, 16, 13];
ages.push(45);
ages.push(41);

ages.forEach(age => {
    console.log(age);
    
})


let person = {
    name: 'MukhammadBobur',
    hobby: 'Reading',
    age: 25
};

person.name = "Bob";
person.hobby = "Gym";
person.age = 24;

console.log(person);


let char: string;
let personAge: number;
let isLoggedIn: boolean;

let familyNames : string[] = [];

char = 'Bob';
personAge = 25;
isLoggedIn = true;

console.log(char, personAge, isLoggedIn);

familyNames.push("Hello", "World")
console.log(familyNames);

let mixed : (string|number|boolean)[] = [];
mixed.push("Bob", 25, true);
console.log(mixed);

let uid : string|number;

uid = 123;
uid = '123';

let ninja: object;

ninja = {name: "yoshi", belt: 'black', age: 40};
console.log(ninja);


let ninjaOne: {};

ninjaOne = {name: 'mario', belt: 'orange', age: 25}
console.log(ninjaOne);
