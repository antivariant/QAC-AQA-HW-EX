const arrayText = ['Max', 'Igor', 'Dan', 'Igor'];
const arrayNumber = [1, 2, 3, 4, 5, 6];

//===============indexOf() and lastIndexOf============
console.log(arrayText.indexOf('Igor'));//1
console.log(arrayText.lastIndexOf('Igor'));//3

//=============== includes() ========================
console.log(arrayText.includes('Igor'));//true

//===== with labda callback argument ==================
console.log(arrayNumber.every(n => n < 10));//true
console.log(arrayNumber.some(n => n > 3));//true

let arrayFiltered = arrayNumber.filter(n => n > 3);
console.log(arrayFiltered); //[4,5,6]

arrayText.forEach(n => {
    let len = n.length;
    console.log(`Hello, ${n}. In your name there are ${len} symbols`); 
});

let arrayProcessed = arrayText.map(n => `Hello, ${n}. \
In your name there are ${n.length} symbols`);
console.log(arrayProcessed);
