const str = "Hello world\nhello class\nhello regular expression."

const regexp1 = /hello/
const regexp2 = new RegExp("hello")
const regexpG = /hello/g
const regexpM = /hello/m
const regexpI = /hello/i
const regexpGMI = /hello/gmi
const regexp2GMI = new RegExp("hello", "gmi");

//===== Declaration========
const res1 = regexp1.test(str);
console.log("test //", res1);//true

const res2 = regexp1.test(str);
console.log("test new RegExp", res2);//true



//=========Test===============
const testG = regexpG.test(str);
console.log("test /g", testG);//true

const testM = regexpM.test(str);
console.log("test /m", testM);//true

const testI = regexpI.test(str);
console.log("test /i", testI);//true

const testGMI = regexpGMI.test(str);
console.log("test /gmi", testGMI);//true

//======= Exec=================
const res3 = regexp1.exec(str);

//['hello', 
//index: 12, 
//input: 'Hello world\nhello class\nhello regular expression.',
//groups: undefined]
console.log("exec1 //", res3);
console.log("exec2 //", res3.index);//12


//-----------------------

const execG = regexpG.exec(str);
console.log("exec1 /g", execG.index);//24

// //['hello', 
// //index: 24, 
// //input: 'Hello world\nhello class\nhello regular expression.',
// //groups: undefined]
// console.log("exec2 /g", execG);//true

// //['hello', 
// //index: 24, 
// //input: 'Hello world\nhello class\nhello regular expression.',
// //groups: undefined]
// console.log("exec3 /g", execG);//true

// const execM = regexpM.exec(str);

// //['hello', 
// //index: 12, 
// //input: 'Hello world\nhello class\nhello regular expression.',
// //groups: undefined]
// console.log("exec1 /m", execM);//true


// //['hello', 
// //index: 12, 
// //input: 'Hello world\nhello class\nhello regular expression.',
// //groups: undefined]
// console.log("exec3 /m", execM);//true

// const execI = regexpI.exec(str);
// console.log("exec1 /i", execI);//true
// console.log("exec2 /i", execI);//true
// console.log("exec3 /i", execI);//true

// const execGMI = regexpGMI.exec(str);
// console.log("exec1 /gmi", execGMI);//true
// console.log("exec2 /gmi", execGMI);//true
// console.log("exec3 /gmi", execGMI);//true





