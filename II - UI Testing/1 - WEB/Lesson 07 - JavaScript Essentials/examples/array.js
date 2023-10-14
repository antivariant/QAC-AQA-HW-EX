const array = [1, 'a', 2, 3, 4, 5];
console.log("array[1]=", array[1]);//'a'
console.log("array.length=", array.length);//6. length - не функция!
console.log("array=", array);

//============= ... (spread) =======================
console.log("array spred=", ...array); //1 'a' 2 3 4 5
//[1,'a',2,3,4,5,'-',1,2,3,4,5]
let spreadCreatedArray = [...array, '-', ...array];

function sum(a, b, c) { return a + b + c };
let funArgsArray = [1, 2, 3];
let funResult = sum(...funArgsArray); //sum(1,2,3)=6
console.log("sum(...funArgsArray)", funResult);

funResult = sum(funArgsArray); //sum([1,2,3], undefined, undefined)=
console.log("sum(funArgsArray)", funResult);//=1,2,3undefinedundefined


//================= slice() ========================
//Поверхностное копирование (shallow copy)
let a = [1, 2, 3, 4];
let b = a;
a[0] = 5;//[5, 2, 3, 4]
console.log("b=", b);//[5, 2, 3, 4]

//Глубокое копирование (deep copy)
let arrayA = [1, 2, 3, 4];
let arrayB = arrayA.slice();//[1, 2, 3, 4]
arrayA[0] = 5;
console.log("arrayA", arrayA);//[5, 2, 3, 4]
console.log("arrayB", arrayB);//[1, 2, 3, 4]

//Копирование части массива
let arrayC = [1, 2, 3, 4];
let arrayD = arrayC.slice(1, 3);//from, to (not including 3!) [2,3]
console.log("arrayC", arrayC, "arrayD", arrayD);

//========== Splice()=============================
let arrayE = [1, 2, 3, 4];
let arrayF = arrayE.splice(1, 2);//from, count(!) [1,4] and [2, 3]
console.log("arrayE", arrayE, "arrayF", arrayF);

//========== Concat() =============================
let arrayG = ['Max', 'Igor', 'Dan'];
let arrayH = ['Sam', 'John'];
let arrayJ = arrayG.concat(arrayH); //['Max','Igor','Dan','Sam','John' ]
console.log("arrayJ", arrayJ);

//========== Join()===============================
let people = arrayJ.join("; ");
console.log("people=", people);//"Max; Igor; Dan; Sam; John"


//========== Sort() and Reverse() =================
arrayJ.sort();//[ 'Dan', 'Igor', 'John', 'Max', 'Sam' ]
console.log("arrayJ sorted=", arrayJ);
arrayJ.reverse();//[ 'Sam', 'Max', 'John', 'Igor', 'Dan' ]
console.log("arrayJ sorted reverse=", arrayJ);

//=========== flat() ============================
let arrayK = [1, 2, 3, [4, 5, 6], 7, 8, 9];
let arrayL = arrayK.flat();
console.log(arrayL);// [ 1, 2, 3, 4, 5, 6, 7, 8, 9]