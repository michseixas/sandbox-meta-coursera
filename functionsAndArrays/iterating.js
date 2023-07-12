var veggies = ['onion', 'parsley', 'carrot'];

console.log(veggies.length); // I get   3 that represents array length

console.log(veggies[0]); //onion
console.log(veggies[1]); //parsley

for (var i = 0 ; i < veggies.length; i++) {
    console.log(veggies[i]); // onion, parsley, carrot, from iterating the array.
}


//-------
console.log("------")

var veggies = "Healthy"

console.log(veggies.length); // I get 3 that represents string length

console.log(veggies[0]); //H
console.log(veggies[1]); //E

for (var i = 0 ; i < veggies.length; i++) {
    console.log(veggies[i]); // H E A L T H Y  from iterating the string.
}

//-------
console.log("------")

//Strings are not arrays!!

var greet = "Hello ";
var user = "Lisa";
// console.log(greet.pop()); =====>> obviamente esta vaina no existe

console.log(greet + user); // Hello Lisa
console.log (greet.concat(user)); // Hello Lisa





