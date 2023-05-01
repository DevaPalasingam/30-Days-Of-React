let dog = {
    name: 'rex',
    legs: 'long',
    color: 'black',
    age: 4,
    bark: function() {
        return 'woof woof'
    },
    breed: 'alien',
    getDogInfo: function() {
        return `I am ${this.name}. I am ${this.age} years old`
    }
};
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark())
console.log(dog.getDogInfo())
