// Create an Animal class. The class will have name, age, color, legs properties and create different methods
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }
  get getName() {
    return this.name;
  }
  get getAge() {
    return this.age;
  }
  get getLegs() {
    return this.legs;
  }
  set setAge(age) {
    this.age = age;
  }
  evolve() {
    this.legs *= 3;
  }
}

const dog = new Animal("Woofdaddy", 3, "Brown", 4);
console.log(dog.getLegs);
dog.evolve();
console.log(dog.getLegs);

// Override the method you create in Animal class
class Cat extends Animal {
  evolve() {
    this.legs *= 25;
  }
}
const tabby = new Cat("Tabby", 3, "Orange", 4);
console.log(tabby.getLegs);
tabby.evolve();
console.log(tabby.getLegs);
