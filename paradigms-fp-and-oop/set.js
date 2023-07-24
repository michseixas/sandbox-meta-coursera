// A Set in JavaScript is a data structure that stores unique values. It is similar to an array, but it does not allow duplicate values.

const fruits = new Set(); //creates a new Set object called fruits
fruits.add("Apple");
fruits.add("Orange");
fruits.add("Banana");
fruits.add("Apple"); // This will not be added to the set because it is a duplicate value

console.log(fruits); // Set(3) { "Apple", "Orange", "Banana" }