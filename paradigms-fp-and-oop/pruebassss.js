//Step 1: 
function logDairy() {
    var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    for (prop of dairy){
        console.log(prop);
}}

logDairy();

//Step 2:
function birdCan(){

    const animal = {
        canJump: true
        }
        
    const bird = Object.create(animal);
    bird.canFly = true;
    bird.hasFeathers = true;

    console.log("the Bird object-----:", bird)

    for (prop of Object.keys(bird)){
        console.log(prop + ":" + bird[prop]);
    }


    }

birdCan()

//Step 3
function animalCan(){
    const animal = {
        canJump: true
        };
        
        const bird = Object.create(animal);
        bird.canFly = true;
        bird.hasFeathers = true;

        for (prop in bird) {
            console.log("all the properties---:", prop)
        }
    

}

animalCan();



// Step 1. You are given an array of dairy products:
// var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
// Create a function called logDairy. Within it, console log each of the items in the dairy array, using the for...of loop.
// After you create this function, call it as logDairy() to see the output on the console.
// The expected output should be:
// cheese
// sour cream
// milk
// yogurt
// ice cream
// milkshake

// Step 2. You are given the following starter code:
// const animal = {
// canJump: true
// };
// const bird = Object.create(animal);
// bird.canFly = true;
// bird.hasFeathers = true;
// Create a function called birdCan, within it, loop over the bird object's properties and console log each one, using the for...of loop. Finally call the function as birdCan() to see the output on the console. Remember, you need to console log both the key and the value of each of the bird object's properties.


// Expected output should be:
// canFly: true
// hasFeathers: true


// Step 3. Using the same starter code as in task 2, create a function called `animalCan` and within it, loop over all the properties in both the bird object and its prototype - the animal object - using the for...in loop. Finally call the function as `animalCan()` to see the output on the console.
// Expected outout should be:
// canFly: true
// hasFeathers: true
// canJump: true



