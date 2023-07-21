const car = {
    engine: true,
    steering: true,
    speed: "slow"
}

const sportsCar =  Object.create(car);
sportsCar.speed = "fast";
console.log("The sportsCar object: ", sportsCar);

console.log("------for-in is unreliable because it iterates over object AND its prototype!:");
for (prop in sportsCar){
    console.log(prop);
}
console.log("------for-of is reliable because it iterates over object's own properties only:")
for (prop of Object.keys(sportsCar)){
    console.log(prop + ": " + sportsCar[prop]);
}
