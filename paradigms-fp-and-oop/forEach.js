const result = []; //create an empty array
const drone = { //create an object with 2 properties
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone); //create an array that contains the names of the properties in the drone object
droneKeys.forEach( function(key) { //iterate through the array
    result.push(key, drone[key]) //pushes the current element in the droneKeys array along with the value of the corresponding property, into the result array
})
console.log(result)

//Although this is possible and works, having to do something like this might mean that you haven't chosen the correct data structure to work with in your code.
//not the best scenario