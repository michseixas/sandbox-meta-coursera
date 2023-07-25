//run it on the browser console!!!

let answer = prompt('What is your name?'); // built-in prompt() method: prompts the user to enter their name and stores the value in the answer variable.
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1') //creates a new <h1> element 
    h1.innerText = answer; // sets h1's inner text to the value of the answer variable. 
    document.body.innerText = ''; //clears the text content of the document.body element.
    document.body.appendChild(h1); //appends the <h1> element to the document.body element.
}