
//First Class Functions

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())

// On the next several lines, I have an if else statement. The if condition is executed when the value of useRandom is set to true. If that's the case, the entire randomNum() function's declaration is saved into the getNumber variable. Otherwise, I'm saving the entire specificNum() function's declaration into the getNumber variable.
// In other words, based on the useRandom being set to true or false, the getNumber variable will be assigned either the randomNum() function declaration or the specificNum() function declaration.
// With all this code set, I can then invoke the addTwoNums() function, passing it the invocation of the getNumber() variables as its first and second arguments.


//-------------------------


// Higher-order functions: pass a function to another function, or to return a function from another function.

function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number

//--------------------------

//Pure functions and side-effects: A pure function returns the exact same result as long as it's given the same values.

function addTwoNums(a, b) {
    console.log(a + b)
}

addTwoNums(5,6); // 11
// This function will always return the same output, based on the input. For example, as long as we give it a specific value, say, a 5, and a 6
//the output will always be the same
// Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself.
// This includes: 
// changing variable values outside of the function itself, or even relying on outside variables 
// calling a Browser API (even the console itself!) 
// calling Math.random() - since the value cannot be reliably repeated 