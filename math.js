const numb1 = 100;
const numb2 = 60;
let val;

//simple math
val = numb1 + numb2
val = numb1 - numb2
val = numb1 * numb2
val = numb1 / numb2
val = numb1 % numb2 //modulus (raminder after division)

val += 10;


// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(3.48);
val = Math.ceil(3.98) //Always round up
val = Math.floor(3.98); //Always round down
val = Math.sqrt(49);
val = Math.abs(-9); //it's distance from 0
val = Math.pow(2, 4);
val = Math.min(3, 5, 56, 43, 129, 16, 87, 12, 1);
val = Math.max(3, 5, 56, 43, 129, 16, 87, 12, 1);

val = Math.random(); //will give decimal between 0 and 1
val = Math.random() * 10; //will give decimal number bt/ 0 and 10
val = Math.floor(Math.random() * 10 + 1) //gives whole num bt 1 and 10

console.log(val);