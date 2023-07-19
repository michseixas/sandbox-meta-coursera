var bird = {
    hasWings: true,
    canFly: true,
    hasFeather: true
}

var eagle1 = Object.create(bird);
console.log("eagle1: ", eagle1);

console.log("eagle1 has wings: ", eagle1.hasWings);
console.log("eagle1 can fly: ", eagle1.canFly);
console.log("eagle1 has feathers: ", eagle1.hasFeather);

var eagle2 = Object.create(bird);
console.log("eagle2 has wings: ", eagle2.hasWings);

var penguin1 = Object.create(bird);
penguin1.canFly = false; //set the canFly property to false. this overrides ONLY AFFECTS THE PENGUIN1
console.log("penguin1: ", penguin1.canFly);

console.log("bird prototype can still fly: ", bird.canFly);