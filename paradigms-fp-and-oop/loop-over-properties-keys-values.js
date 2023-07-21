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

function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();