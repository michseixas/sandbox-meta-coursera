//loop over any object's own property keys and values

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
};

for (key of Object.keys(clothingItem)) {
    console.log(key, ":", clothingItem[key]);
}


//getting either one or the other value from an object's key, based on the string that got assigned to the dynamicKey variable, and accessed without issues, using the brackets notation.

function testBracketsDynamicAccess() { //The testBracketsDynamicAccess function is defined.
    var dynamicKey; // A variable dynamicKey is declared without an initial value.
    if(Math.random() > 0.5) { // A random number is generated using Math.random() to decide which property of the drone object (speed or color) should be accessed.
      dynamicKey = "speed"; // If the random number is greater than 0.5, dynamicKey is assigned the value "speed".
     }else{
       dynamicKey = "color"; // If the random number is less than or equal to 0.5, dynamicKey is assigned the value "color".
     }
  
      var drone = { // The drone object is created with two properties: speed with a value of 15 and color with a value of "orange".
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]); // The value of drone[dynamicKey] is logged to the console. This is equivalent to drone["speed"] or drone["color"] depending on the value of dynamicKey.
  }
  testBracketsDynamicAccess();

  





