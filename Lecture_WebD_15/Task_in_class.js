//1.Single Inheretence
//1parent class and 1child class
class Animal{
    constructor(name){
        this.name=name;

    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal{
    bark(){
        console.log(`${this.name} is barking`)
    }
}

const d1 = new Dog("Tommy");
d1.eat();
d1.bark();

console.log();

//2.multiple Inheritence
// Parent 1: Normal Class
class Car {
    drive() {
        console.log("Driving on the road.");
    }
}

// Parent 2: A Mixin Object
const Airplane = {
    fly() {
        console.log("Flying through the sky!");
    }
};

// Child Class:
class FlyingCar extends Car {
    hover() {
        console.log("Hovering above the ground.");
    }
}

// MULTIPLE INHERITANCE STEP:
Object.assign(FlyingCar.prototype, Airplane);

// Usage
const myVehicle = new FlyingCar();

myVehicle.drive();
myVehicle.fly();
myVehicle.hover();

console.log();

//Multilevel Inheritence
class animal {
    eat(){
        console.log("Eating");
    }
}
class Mammal extends animal{
    walk(){
        console.log("Walking");
    }
}
class Dog1 extends Mammal{
    bark(){
        console.log("Barking");
    }
}
const d2 = new Dog1();
d2.eat();
d2.walk();
d2.bark();

console.log();

//Hiearchical Inheritence
class Animal1{
    eat(){
        console.log("Eating");
    }
}
class cat extends Animal1{
    meow(){
        console.log("Meowing");
    }
}
class horse extends Animal1{
    hinhinana(){
        console.log("HinHin");
    }
}

const c = new cat();
const h = new horse();

c.eat();
c.meow();

h.eat();
h.hinhinana();

console.log();

//Hybrid Inheritence
class Employee{
    work(){
        console.log("Employee is working");
    }
}
class Developer extends Employee{
    code(){
        console.log("Developer is writting the code");
    }
}
class Frontend_developer extends Developer{
    designUI(){
        console.log("Frontend Developer Designs UI");
    }
}
class Backend_developer extends Developer{
    manageDatabase(){
        console.log("Backend Developer manages Database");
    }
}

const frontend = new Frontend_developer();
const backend = new Backend_developer();

frontend.work();
frontend.code();
frontend.designUI();

console.log();

backend.work();
backend.code();
backend.manageDatabase();