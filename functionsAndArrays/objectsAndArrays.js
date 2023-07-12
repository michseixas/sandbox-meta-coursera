var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

// Using the fact that brackets notation can evaluate expressions, I accessed the arrOfKeys[i] property on the drone object. 
// This value changed on each loop while the for loop was running.
// Specifically, the first time it ran, it was evaluated: 
// The value of i was 0 
// The value of arrOfKeys[i] was arrOfKeys[0], which was "speed" 
// Thus, drone[arrOfKeys[i]] was evaluated to drone["speed"] which is equal to 100
// This allowed me to loop over each of the values stored inside the drone object, based on each of its properties' keys.

