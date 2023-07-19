function meal(animal) {
    animal.food = animal.food + 10;
}

var dog = {
    food: 10
};
meal(dog);
meal(dog);

console.log(dog.food);
//The food value starts at 10. The meal function is called twice which 
//adds 10 to the food value each time. Therefore, 30 is printed.

//-----------

function two(){
    return 2;
}

function one(){
    return 1;
}

function calculate(initialValue, incrementValue){
    return initialValue() + incrementValue () + incrementValue();
}

console.log (calculate(two, one))

//The  two  function is passed as the first parameter to the  
//calculate  function and the  one  function is passed as the second 
//parameter. Therefore, when the  calculate  function runs, 
//it will call  two() + one() + one() . The result is then  4 .
