alert('Hello World')

// single line comments

/*
multi
line
comments
*/


// option + command + j (in Chrome) to open console with live server
console.log('Hello World')
console.log(123)
console.log(true)
var greeting = 'Hello';
console.log(greeting)
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});

console.error('This is an error')
console.warn('This is a warning');
console.time('Hello')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
    console.log('Hello World')
console.timeEnd('Hello')

// console.clear();



//Variables
// var, let, const (will not be using var!)

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// Init var
var greeting;
console.log(greeting);

// letters, numbers, _, $
// can not start with a number
var _name = 'John' //(for private variables)
var firstName = 'John'; //Camel case
var first_name = 'Sarah'; //underscore
var FirstName = 'Tom'; //pascal case

let breed = 'Chihuahua';
console.log(breed);
breed = 'Visla';
console.log(breed);

// const
const hat = 'beanie'
console.log(hat);
//can't reassign
// hat = 'trucker' //will give error

// const greeting;
//must be defined

const person = {
    name: 'Carlos'
}
console.log(person)

person.name ='Sara';
person.age = 23;

const numbers = [1,2,3,4,5];
numbers.push(6); //adds to an array

console.log(numbers);