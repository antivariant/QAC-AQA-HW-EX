const person = {
    name: 'Igor',
    age: 45
}

const skills = {
    english: 'B2',
    programming: 4
}

//{ name: 'Igor', age: 45, english: 'B2', programming: 4 }
const prog = Object.assign({}, person, skills);
console.log("prog=", prog);

var prog2 = {};
//{ name: 'Igor', age: 45, english: 'B2', programming: 4 }
Object.assign(prog2, person, skills);
console.log("prog2=", prog2);//false

console.log("prog?prog2=", prog == prog2);//false
console.log("prog?prog2=", prog === prog2);//false
console.log("prog?prog2=", Object.is(prog, prog2));//false

const prog3 = { ...prog };
//{ name: 'Igor', age: 45, english: 'B2', programming: 4 }
console.log("prog3=", prog3);

console.log("prog?prog3=", prog == prog3);//false
console.log("prog?prog3=", prog === prog3);//false
console.log("prog?prog3=", Object.is(prog, prog3));//false

var prog4 = prog;
//{ name: 'Igor', age: 45, english: 'B2', programming: 4 }
console.log("prog4=", prog);

console.log("prog?prog4=", prog == prog4);//true
console.log("prog?prog4=", prog === prog4);//true
console.log("prog?prog4=", Object.is(prog, prog4));//true

prog4.name = 'Vova';
console.log("prog.name=", prog.name);
console.log("prog4 type", typeof(prog4));
console.log("prog?prog4=", prog == prog4);//true
console.log("prog?prog4=", prog === prog4);//true
console.log("prog?prog4=", Object.is(prog, prog4));//true

