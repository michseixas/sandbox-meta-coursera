// class Car {
//     constructor (color, speed) {
//         this.color = color;
//         this.speed = speed;
//     }

//     turboOn() {
//         console.log("Turbo is on!!!")
//     }
// }

// const car1 = new Car ("red", 120);

// car1.turboOn();
// console.log(car1.color);

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

var train4 = new Train('red', false);

train4.toggleLights();

// there are four methods on your Train class: 
// toggleLights(), lightsStatus(),  getSelf() and getPrototype().
// The toggleLights method uses the logical not operator, !. This operator will change the value stored in the lightsOn property of the future instance object of the Train class; hence the !this.lightsOn. And the = operator to its left means that it will get assigned to this.lightsOn, meaning that it will become the new value of the lightsOn property on that given instance object.
// The lightsStatus() method on the Train class just reports the current status of the lightsOn variable of a given object instance.
// The getSelf() method prints out the properties on the object instance it is called on.
// The getPrototype() console logs the prototype of the object instance of the Train class. The prototype holds all the properties shared by all the object instances of the Train class. To get the prototype, you'll be using JavaScript's built-in Object.getPrototypeOf() method, and passing it this object - meaning, the object instance inside of which this method is invoked.


train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

// The result of calling toggleLights() is the change of true to false and vice-versa, for the lightsOn property.
// The result of calling lightsStatus() is the console logging of the value of the lightsOn property
// The result of calling getSelf() is the console logging the entire object instance in which the getSelf() method is called. In this case, the returned object is the train4 object. Notice that this object gets returned only with the properties ("data") that was build using the constructor() function of the Train class. That's because all the methods on the Train class do not "live" on any of the instance objects of the Train class - instead, they live on the prototype, as will be confirmed in the next paragraph.
// Finally, the result of calling the getPrototype() method is the console logging of all the properties on the prototype. When the class syntax is used in JavaScript, this results in only shared methods being stored on the prototype, while the constructor() function sets up the mechanism for saving instance-specific values ("data") at the time of object instantiation.
// Thus, in conclusion, the class syntax in JavaScript allows us to clearly separate individual object's data - which exists on the object instance itself - from the shared object's functionality (methods), which exist on the prototype and are shared by all object instances.


class HighSpeedTrain extends Train { //To inherit from one class to a new sub-class, JavaScript provides the extends keyword
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn); //super is used to specify what property gets inherited from the super-class in the sub-class.
        this.passengers = passengers; // add the additional properties of the HighSpeedTrain class inside its constructor, namely, the passengers and highSpeedOn properties.
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() { //add another method that will be specific to the HighSpeedTrain class
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() { //Additionally, imagine you realized that you don't like how the toggleLights() method from the super-class works, and you want to implement it a bit differently in the sub-class. You can add it inside the HighSpeedTrain class. 
        super.toggleLigths(); //the HighSpeedTrain method should reuse the existing behavior of the original toggleLights() method, and so you used the super.toggleLights() syntax to inherit the entire super-class' method.
        super.lightsStatus(); //you also inherit the behavior of the super-class' lightsStatus() method - because you realize that you want to have the updated status of the lightsOn property logged to the console, whenever you invoke the toggleLights() method in the sub-class.
        console.log('Lights are 100% operational.');//you also add the third line in the re-implemented toggleLights()
    }

}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}

// The prototype object of the train5 object was created when you defined the class Train. You can access the prototype using Train.prototype syntax and get the prototype object back. 
// The prototype object of the highSpeed1 object is this object: {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}. In turn this object has its own prototype, which can be found using the following syntax: HighSpeedTrain.prototype.__proto__. Running this code returns: {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}.
// Prototypes seem easy to grasp at a certain level, but it's easy to get lost in the complexity. This is one of the reasons why class syntax in JavaScript improves your developer experience, by making it easier to reason about the relationships between classes. However, as you improve your skills, you should always strive to understand your tools better, and this includes prototypes. After all, JavaScript is just a tool, and you've now "peeked behind the curtain".