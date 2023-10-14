var object1 = new Object();
object1.age = 2;
console.log(object1);//{ age: 2 }

const fieldName = 'firstName';
var object2 = {
    [fieldName]: 'Igor',
    age: 47,
    "skill names": ['JavaScript', 'English'],
    object3: {
        field1: 'Field 1',
        field2: 100
    }
}

console.log(object2["skill names"][0]);//JavaScript
console.log(object2.object3.field1);//Field 1
console.log(object2.firstName);//Igor