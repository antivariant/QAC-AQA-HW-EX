let array = [1, 2, 3, 4];
array.push(1); //[1,2,3,4,1]
console.log(array);
array.push(2, 3);//[1,2,3,4,1,2,3]
console.log(array);
array.push([1, 2, 3]); //[ 1, 2, 3, 4, 1, 2, 3, [ 1, 2, 3 ] ]
console.log(array);
let take1 = array.pop();//take1=[1,2,3], array=[1,2,3,4,1,2,3]
console.log("array=", array, "take1=", take1);
let take2 = array.pop();//take2=3, array=[1,2,3,4,1,2]