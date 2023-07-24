let bestBoxers = new Map(); 
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");


console.log(bestBoxers);

//The first line of code, let bestBoxers = new Map(), creates a new object 
//called bestBoxers that is a map. A map is a data structure 
//that allows you to store key-value pairs. 
//In this case, the keys in the map are the numbers 1, 2, and 3, 
//and the values are the strings "The Champion", "The Runner-up", and "The third place".


//The second, third, and fourth lines of code use the set() method to add the key-value pairs to the map. 
//The set() method takes two arguments: the key and the value. 
//In this case, the key is the number, and the value is the string.

//The console output will be a representation of the map.

//To get a specific value, you need to use the get() method. For example:  
// bestBoxers.get(1); // 'The Champion' 