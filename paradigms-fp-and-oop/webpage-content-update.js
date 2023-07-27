//run it on the browser console!!!

let answer = prompt('What is your name?'); // built-in prompt() method: prompts the user to enter their name and stores the value in the answer variable.
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1') //creates a new <h1> element 
    h1.innerText = answer; // sets h1's inner text to the value of the answer variable. 
    document.body.innerText = ''; //clears the text content of the document.body element.
    document.body.appendChild(h1); //appends the <h1> element to the document.body element.
}

//------

//Exercise:

// Task 2: Get h1 into a variable
// Use the document.querySelector() method to query the h1 element on the page and assign it to the variable named h1.

// Task 3: Code an array
// Declare a new variable, name it arr, and save the following array into it:

// [
//     'Example Domain',
//     'First Click',
//     'Second Click',
//     'Third Click'
// ]

// Task 4: Write a click-handling function
// Write a new function declaration, named handleClicks. It should not accept any parameters.
// Inside of it, code a switch statement, and pass a single parameter to it, h1.innerText.
// The body of the switch statement should have a total of 4 cases (the fourth being the default case).
// The first case should start with case arr[0]:. It should set the h1.innerText to arr[1]. In other words, it should assign the value of arr[1] to the h1.innerText property. The next line should have only the break keyword.
// The second case should start with case arr[1]:. It should set the h1.innerText to arr[2]. In other words, it should assign the value of arr[2] to the h1.innerText property. The next line should have only the break keyword.
// The third case should start with case arr[2]:. It should set the h1.innerText to arr[3]. In other words, it should assign the value of arr[3] to the h1.innerText property. The next line should have only the break keyword.
// The default case should set the value of the h1.innerText property to arr[0].
// Task 5: Add an event listener
// You've created an h1 variable in Task 2. Now, use that variable to run the addEventListener() method on it. Pass two arguments to the addEventListener() method: 'click' and handleClicks.

// My answer (run on browser console at www.example.com)
const h1 = document.querySelector("h1");
const arr = ["Example Domain", "First Click", "Second Click", "Third Click"];

function handleClicks() {
  switch (h1.innerText) {
    case arr[0]:
      h1.innerText = arr[1];
      break;
    case arr[1]:
      h1.innerText = arr[2];
      break;
    case arr[2]:
      h1.innerText = arr[3];
      break;
    default:
      h1.innerText = arr[0];
      break;
  }
}

h1.addEventListener("click", handleClicks);


//This code will first get the h1 element on the page using the document.querySelector() method. Then, it will create an array called arr and save the following values into it:

// "Example Domain"
// "First Click"
// "Second Click"
// "Third Click"

// Next, it will create a function called handleClicks(). This function will not accept any parameters. Inside of the function, it will code a switch statement. The switch statement will take a single parameter, which is the value of the h1.innerText property.
// The body of the switch statement will have a total of 4 cases (the fourth being the default case). The first case will start with case arr[0]:. It will set the h1.innerText to arr[1]. In other words, it will assign the value of arr[1] to the h1.innerText property. The next line will have only the break keyword.
// The second case will start with case arr[1]:. It will set the h1.innerText to arr[2]. In other words, it will assign the value of arr[2] to the h1.innerText property. The next line will have only the break keyword.
// The third case will start with case arr[2]:. It will set the h1.innerText to arr[3]. In other words, it will assign the value of arr[3] to the h1.innerText property. The next line will have only the break keyword.
// The default case will set the value of the h1.innerText property to arr[0].
// Finally, the code will add an event listener to the h1 element. The event listener will listen for clicks on the h1 element. When the h1 element is clicked, the handleClicks() function will be called.