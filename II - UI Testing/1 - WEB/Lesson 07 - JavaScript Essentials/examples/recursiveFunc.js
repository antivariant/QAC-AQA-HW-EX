function recurcieve(x) {
    if (x === 1) {
        console.log("end");    
        return x;
    }
    else {
        console.log(x);
        recurcieve(x - 1);
        return x;
    }
}

console.log(recurcieve(5));

//recursive(5) = 5
//  recursive(4) = 4
//      recursive(3) = 3
//          recursive(2) = 2
//              recursive(1) = 1
//              end
//              return(1)
//          return(2)
//       return(3)
//   return(4)
//return(5)       


//======= Factorial example ===========

function factorial(x) {
    if (x === 1){
        return 1;
    }
    else{
        console.log(`${x}*factorial(${x - 1})`)
        return x * factorial(x - 1);
    }
}
let result = factorial(5);
console.log(result);
//5*factorial(4)
//  4*factorial(3)
//      3*factorial(2)
//          2*factorial(1)
//              return (1)
//          return 2*1
//       return 3*2*1
//  return 4*3*2*1
//return 5*4*3*2*1

//sum all numbers from 1 to n. Base = sum(0)=0, recursive = sum(x)=x+(x-1)
function sumn(x) {
    if (x == 0) {
        return 0;
    }
    else
    {
        return (x + (sumn(x - 1)));    
    }
}

console.log(sumn(3));//6 x*(x+1)/2=3*(3+1)/2=3*2/2=6
console.log(sumn(10));//55 10*(10+1)/2=10*11/2=55 
