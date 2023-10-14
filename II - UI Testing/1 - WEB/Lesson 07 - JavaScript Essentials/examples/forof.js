//====== arrays ========
const array1 = ['a', 'b', 'c'];
for (let value of array1) {
    console.log(value);//'a', 'b', 'c'
}

//======= string =======
const str = "Hello world";
for (const char of str) {
    console.log(char);//'H','e','l','l','o',' ','w','o','r','l','d'
}

//=======map======
const map = new Map([['Igor', 380963334455], ['Dima', 30984443322]]);
for (const line of map) {
    console.log(typeof(line), line);//['Igor', 380963334455], [ 'Dima', 30984443322 ]
}

//=====set=======
const set = new Set(['a', 'b', 'c']);
for (const key of set) {
    console.log(key);//doesn't work
}

