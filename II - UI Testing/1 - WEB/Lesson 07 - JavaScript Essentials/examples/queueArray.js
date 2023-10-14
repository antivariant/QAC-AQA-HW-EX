let array = [1, 2, 3, 4];

//Add to queue
array.push(1); //[1,2,3,4,1]
console.log("array", array);

//Get next value
let next = array.shift(); //1 [2,3,4,1]
console.log("next", next, "array", array);

//Return next value to queue
array.unshift(next);
console.log("array", array);