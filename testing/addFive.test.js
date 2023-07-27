const { default: TestRunner } = require("jest-runner");
const addFive = require('./addFive');

test('returns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
})


// The code starts by defining a function called test(). The test() function takes a string as input and returns a boolean value. 
//The string that is passed to the test() function is a description of the test that is being performed. In this case, the description of the test is "returns the number plus 5".
//The test() function then calls the expect() function. The expect() function takes a value as input and asserts that the value is equal to a specific value. In this case, the expect() function asserts that the value of addFive(1) is equal to 6.
//If the value of addFive(1) is not equal to 6, then the test() function will fail. If the value of addFive(1) is equal to 6, then the test() function will pass.
