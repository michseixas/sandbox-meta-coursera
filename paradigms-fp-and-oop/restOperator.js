// Rest operator and destructuring

//The rest operator allows you to take items from an array and use them to create a separate sub-array. 
//ex 1
let top7 = [
    "The Colosseum",
    "Roman Forum",
    "The Vatican City",
    "Trevi Fountain",
    "Pantheon",
    "Piazza Venezia",
    "Palatine Hill"
];

const [] = top7;
const [first, second, third, ...secondVisit] = top7;

console.log(first);
console.log(second);
console.log(third);
console.log(secondVisit);

//ex 2


// defines a function called addTaxToPrices. The function takes two arguments: 
//the tax rate and an arbitrary number of items. 
function addTaxToPrices(taxRate, ...itemsBought) {
    return itemsBought.map(item => taxRate * item) //The function returns an array of the prices of the items, with the tax applied.
}

let shoppingCart = addTaxToPrices (1.1, 46, 89, 35, 79);

console.log(shoppingCart);

//The first argument, taxRate, is the tax rate that will be applied to the prices of the items.
// The second argument, ...itemsBought, is an arbitrary number of items. The items are passed to the function as individual arguments.
// The body of the function uses the map() method to iterate through the items and apply the tax rate to each item. The map() method returns a new array with the modified items.
// The function returns the new array.

