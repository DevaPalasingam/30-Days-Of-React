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
  set setAge(age) {
    this.age = age;
  }
}

// Create a Dog and Cat child class from the Animal Class.
class Dog extends Animal {
  saySomething() {
    console.log("Woof woof, I love humans");
  }
}

class Cat extends Animal {
  saySomething() {
    console.log("Meow, I am mildly annoyed at humans");
  }
}

const monkey = new Animal("Coco", 10, "Brown", 2);
const spike = new Dog("Spike", 2, "White", 4);
const tabby = new Cat("Tabby", 4, "Orange", 4);

console.log(monkey.getName);
console.log(monkey.getAge);

console.log(spike.getName);
console.log(spike.getAge);
spike.setAge = 80;
console.log(spike.getAge);
console.log(spike.saySomething());

console.log(tabby.getName);
console.log(tabby.getAge);
tabby.setAge = 24;
console.log(tabby.getAge);
console.log(tabby.saySomething());
