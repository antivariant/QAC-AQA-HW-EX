//=======Class declaration, fields, functions=========
class Human{
    firstName;
    age;
    sayHello() {
        console.log(`Hello, my name is ${this.firstName}.`);
    };
    constructor(name, age) {
        this.firstName = name;
        this.age = age;
    }
}

const igor = new Human('Igor', 46);
igor.sayHello();
const vova = new Human('Vova', 65);
vova.sayHello();

//======= Anonymous class ====
const juniorQA = class Employer{
    firstName;//don't use "name" as field name, 'cause juniorQA.name=class name
    salary;
}

juniorQA.firstName = 'Dima';
juniorQA.salary = 1000;

console.log("juniorQA=", juniorQA);
console.log("class name = ", juniorQA.name);

//========= Private fields, static fields, getters/setters  ======
class Monster {
    firstName;//field
    static maxSpeed = 100;//static field
    static maxHeight = 200;
    static maxWeight = 100;
    static getMaxParameters() { //static function
        return {
            maxSpeed: this.maxSpeed,
            maxHeight: this.maxHeight,
            maxWeight: this.maxWeight
        }
    }
    currentSpeed;//field
    #height;//private field
    #weight;
    //private function
    #calcSpeed() {
        this.currentSpeed = Math.floor(Math.random() * this.maxSpeed);
    }
    //getters and setters
    get height() {
        return this.#height;
    }
    set height(value) {
        this.#height = value;
    }
    get weight() {
        return this.#weight;
    }
    set weight(value) {
        this.#weight = value;
    }
    //constructor
    constructor(name) {
        this.firstName = name;
        this.#height = Math.floor(Math.random() * Monster.maxHeight);
        this.#weight = Math.floor(Math.random() * Monster.maxWeight);
    }
    nextMove() {
        this.#calcSpeed();
    }
    sayAaargh() {
        console.log(`Aaaargh! I am ${this.firstName}! And I kill you!!!`);
    }
    showParams() {
        console.log("height", this.#height, "weight", this.#weight);
    }
}

const monster1 = new Monster("Lurrr");//instantiate object
monster1.sayAaargh();//call functiom
let maxParams = Monster.getMaxParameters();//call static function
console.log("maxParams=", maxParams); 
monster1.showParams();//call function
monster1.height = 199; //set with setter
console.log("new height=", monster1.height);//get with getter

