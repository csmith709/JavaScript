const firstName = 'Danny';
const lastName = 'Williams';
const age = 75;
const str = 'the fat cat sat on the mat';
const tags = 'spicy,red hot;mild, needs chaser';

let val;
val = firstName + lastName;
val = firstName + ' ' + lastName;

val = 'Hello I am ' + firstName + ', I am now ' + age + ' years old.';

//Escaping
val = 'Peter\'s fat cat can\'t roll'; //can use \ to avoid errors (ignores following character)

val = firstName.length;

val = firstName.concat(' ', lastName, ' ', age);

val = firstName.toLowerCase();
val = firstName.toUpperCase();

// strings as array
val = firstName[3]; //starts with 0

val = lastName.indexOf('l');

val =lastName.lastIndexOf('1');

val = firstName.charAt(1);
val = firstName.charAt(firstName.length - 2); //will give last 2 charcters

// slice
val = firstName.slice(0,3); //will give Dan in this case
val = firstName.slice(-2);

// split
val = str.split(' '); //divided up string
val = tags.split('i'); // split based by specific letter

val = str.replace('cat', 'bat');

val = str.includes('mat'); //will return booleon (true in this case)

console.log(val);