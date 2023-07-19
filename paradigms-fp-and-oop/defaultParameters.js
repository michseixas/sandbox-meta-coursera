//ex 1:
function noDefaultParams(number) {
    console.log('Result:', number * number)
}

noDefaultParams(55); //Result: NaN

//ex 2:

function noDefaultParams(number = 10) {
    console.log('Result:', number * number)
}

noDefaultParams(55); //Default params allow me to build a function that will run with default argument values even if I don't pass it any arguments, while still being flexible enough to allow me to pass custom argument values and deal with them accordingly.

// Below is another example of using a default parameter. Notice that it only applies when the value is undefined.

function test(num = 1) {
  
    console.log(num);
    
}
  
test(); 
test(undefined); 
test(null);
test(""); 
test(false); 
test(NaN); 