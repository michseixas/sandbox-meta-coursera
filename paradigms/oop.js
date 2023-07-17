// //creating an object
// var virtualPet = {
//     sleepy: true,
//     nap: function() {
//         this.sleepy = false //The this keyword refers to the current object, which in this case is virtualPet
//     }
// }
// console.log(virtualPet.sleepy) 
// virtualPet.nap() //call the function using the dot notation
// console.log(virtualPet.sleepy) //virtualPet.sleepy changes from true to false after the nap() function is called.

// virtualPet.sleepy = true; //assign a new value 

// console.log (virtualPet.sleepy); 

function styleAndCelebrate() {
    consoleStyler(color, background, fontSize, txt);  
    celebrateStyler(reason);
}

styleAndCelebrate()