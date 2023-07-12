function listArrayItems(arr) {
   for ( var i = 0; i < arr.length; i++ ){
    //To start the count from one instead of zero, +1
    console.log(i+1, arr[i])
   }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors); 


function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        //adding control flow right inside my function, based on whether a 
        //specific array member matches a specific value - in this case the string "red".
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}


console.log("-------")
//__________________


function letterFinder(word, match) {
    for (var i = 0; i < word.length ;i++){
        if (word[i] == match){
             //check if the current characater, word[i], is equal to the match
            console.log('Found the', match, 'at', i)
        } else {
            console.log('---No match found at', i)
        }
    }
}

letterFinder("avalanche", "l")