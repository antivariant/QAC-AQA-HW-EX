//========= Anonymous ==============
let func1 = function (x, y) {
    return x + y;
}

let res = func1(10, 20);
console.log(res);//30

// =========== Lambda =============
let func2 = (x, y) => x + y;
let res2 = func2(10, 10);
console.log(res2);//20

let func3 = x => x ** 2;
let res3 = func3(10);
console.log(res3);

let func4 = () => console.log("Hello world!");
func4();

let func5 = (x, y) => {
    let res = x * y;
    console.log("func5", res);
}
func5(10,10);//100

let func6 = (x, y) => {
    return x + y;
}
let res6 = func6(10, 10);
console.log(res6);//20
