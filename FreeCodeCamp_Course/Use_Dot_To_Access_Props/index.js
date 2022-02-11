let dog = {
    name: "Spot",
    numLegs: 4
};

console.log(dog.name);
console.log(dog.numLegs);

for (var prop in dog){
    console.log(dog[prop])
}