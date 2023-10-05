
function Person1(name, age, number) {
    console.log(name, age, number ,"-----using function")
}Person1('abc',20,123456789)
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    myAge() {
        console.log(`Hello my age is ${this.age}`)
    }
}
const john = new Person2('John', 30);
john.sayHello(); // logs "Hello, my name is John and I am 30 years old."
john.myAge();


