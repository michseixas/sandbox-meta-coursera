try {
    throw new Error();
    console.log('hello');

}catch(e){
    console.log('Goodbye')
}

// // The code prints "Goodbye" because of the way the code is structured and the behavior of the try...catch statement in JavaScript.
// // In the code you provided, an error is intentionally thrown using throw new Error();. This causes the program execution to stop at that point and immediately jump to the nearest catch block.
// // In the catch block, the statement console.log('Goodbye') is executed, printing "Goodbye" to the console. Since the error is thrown before the console.log('hello') statement, that line is never executed.
// // So, the output of the code will be Goodbye.


//-------------


try {
    Number(5).toPrecision(300)
} catch(e) {
    console.log("There was an error");
}

// The code you provided will catch an error and print "There was an error" to the console.
// In JavaScript, the toPrecision() method is used to format a number to a specified precision. The method takes an argument that specifies the number of significant digits to be displayed. However, the argument must be within the range of 1 to 100.
// In your code, Number(5).toPrecision(300) is attempting to format the number 5 to a precision of 300. Since the argument exceeds the allowed range, it will throw an error.
// The try...catch statement is used to handle potential errors. In this case, the error is caught by the catch block, and the statement console.log("There was an error"); is executed, printing "There was an error" to the console.
// Therefore, when running the code, the output will be "There was an error"
//-------------------


var str='hello';
str.match('jello');

// Since the string "Hello" doesn't contain the string "jello", it cannot be matched, and thus an array object with the matching result cannot be created. Hence, the return value is null, signaling the absence of a matching result.  