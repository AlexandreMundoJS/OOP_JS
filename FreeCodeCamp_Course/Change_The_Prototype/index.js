function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    numLegs: 4,
    eat: function () {
        console.log("Nom nom nom");
    },
    describe: function () {
        console.log(`My name is ${this.name}`)
    }
};