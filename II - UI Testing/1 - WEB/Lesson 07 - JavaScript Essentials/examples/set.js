set1 = new Set();
set2 = new Set([1, 2, 3, 4, 5]);
let array = ['Igor', 'Dima', 'Alex', 'Dan'];
set3 = new Set(array);
console.log(set1, set2, set3);

set1.add(1);
set1.add(3).add(4);
console.log("set1=", set1);

console.log(set1, "has(1)=", set1.has(1));

//=========== union========
let union = new Set([...set1, ...set2]);
console.log("union v1=", union);

let union2 = new Set();
set1.forEach(element => union.add(element));
set2.forEach(element => union2.add(element));
console.log("union v2=", union2);

//=========== intersect ========
let intersect = new Set([...set1].filter(n => set2.has(n)));
console.log(set1, " ⋂ ", set2, " = ", intersect);

//========== difference =========
let difference = new Set([...set2].filter(n => !set1.has(n)));
console.log(set2, " ⋂ ", set1, " = ", difference);
