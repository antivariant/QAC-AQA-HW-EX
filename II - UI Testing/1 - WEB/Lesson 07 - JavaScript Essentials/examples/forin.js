//==== objects ===
const object1 = {
    firstName: 'Igor',
    age: 46,
    location: 'Ukraine'
}
for (var field in object1) {
    console.log(field); //firstName, age, location
}

for (const field in object1) {
    console.log(`${field}:${object1[field]}`); //firstName, age, location
}


const object2 = {
    firstName: 'Igor',
    age: 46,
    sayHello: function () {
        console.log(`Hello ${this.firstName}`);
    }
}
object2.sayHello();
for (var field in object2) {
    console.log(field); //firstName, age, location
}


//====== arrays ========
const array1 = ['a', 'b', 'c'];
for (let index in array1) {
    console.log(index);//0, 1, 2
}

//======= string =======
const str = "Hello world";
for (const index in str) {
    console.log(index);//0,1,2,3,4,5,6,7,8,9,10
}

//=======map======
const map = new Map([['Igor', 380963334455], ['Dima', 30984443322]]);
for (const key in map) {
    console.log(key);//doesn't work
}
//380963334455 Igor, 30984443322 Dima
map.forEach((key, value) => console.log(key, value)); 

//=====set=======
const set = new Set(['a', 'b', 'c']);
for (const key in set) {
    console.log(key);//doesn't work
}
set.forEach((value) => console.log(value));//'a', 'b', 'c'
