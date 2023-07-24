// const fruits = ['kiwi','mango','apple','pear'];
// function whatever(fruit) {
//     console.log(fruit)
// }
// fruits.forEach(whatever);

//es lo mismo que :
// const fruits = ['kiwi','mango','apple','pear'];
// function appendIndex(fruit, index) {
//     console.log(`${index}. ${fruit}`)
// }
// fruits.forEach(appendIndex);

// //Another example------:
// const veggies = ['onion', 'garlic', 'potato'];
// veggies.forEach( function(veggie, index) {
//     console.log(`${index}. ${fruit}`);
// });

// //The same is cleaner with the arrow funtion:
// const veggies = ['onion', 'garlic', 'potato'];

// veggies.forEach((veggie, index) => {
//   console.log(`${index}. ${veggie}`);
// });

//FILTER
// const nums = [0,10,20,30,40,50];
// const filteredNums =  nums.filter( function(num) {
//     return num > 20;
// })

// console.log(filteredNums);

// // //The same is cleaner with the arrow funtion:
// const nums = [0,10,20,30,40,50];

// const filteredNums = nums.filter((num) => num > 20);

// console.log(filteredNums); // [20, 30, 40, 50]

//MAP
var list = [10, 20, 30, 40, 50, 60];
var mappedList = list.map(function(list){
    return list/10
})
console.log(mappedList);


//TO ARROW
const list = [10, 20, 30, 40, 50, 60];
const mappedList = list.map((list) => list / 10);
console.log(mappedList); // [1, 2, 3, 4, 5, 6]


