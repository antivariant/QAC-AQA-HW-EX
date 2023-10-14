//========= Declare and call ============
function fn1(param1, param2) {
    console.log(param1 + param2);
}

fn1(2, 3);

function fn2() {
    console.log("Hello world!");
}

//========== Parameters =============
//by value
let param1 = 10;
console.log("param1 before=", param1);
//declare
function fn3(par) {
    par--;
}
//call
fn3(param1);
console.log("param1 after=", param1);

//by reference
let param2 = [10, 20];
console.log("param2 before=", param2);
//declare
function fn4(par) {
    par[0] = 5;
}
//call
fn4(param2);
console.log("param2 after=", param2);

let param3 = { name: 'Igor', age: 46 };
console.log("param3", param3);
//reclare
function fn5(par) {
    par.name = 'Vova';
}
//call
fn5(param3);
console.log("param3", param3);//param3 { name: 'Vova', age: 46 }

//===========default values===========
function fn5(par1, par2=5){
    console.log(par1 + par2);
}
fn5(10);//=(10,5)=15
fn5(10, 10);//20

function fn6(x = 1, y = x + 5) {
    console.log(x + y + 10);
}
fn6();//(x=1, y=6)=17
fn6(10);//(x=10,y=10+5)=35
fn6(5, 10);//(x=5,y=10)=25

//========= many params ============
function fn7(name, ...phones) {
    console.log(name, "have next phones:");
    for (let phone of phones) {
        console.log(phone);
    }
}

fn7('Igor', 38096534343, 38575736373, 38557575);

function fn8() {
    for (let param of arguments) {
        console.log(param);
    }
}
fn8(1, 2, 3, 4, 5, 6, 7);

//=========== function as parameter, return values ================
function sum(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function calc(x, y, func) {
    result = func(x, y);
    console.log(func, result);
}

calc(1, 2, sum);


//================== return function ==============
function selectFunction(fn) {
    if (fn == 1) return function(x, y) { return x + y; }
    if (fn == 2) return function (x, y) { return x * y; }
}
let oper = selectFunction(1);
let res = oper(10, 10);
console.log(res); //10+10
oper = selectFunction(2);
res = oper(10, 10); //10*10
console.log(res);
