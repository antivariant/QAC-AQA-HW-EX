function* getOddNumbers(start) {
    for (i = start % 2 * 2; ; i = i + 2){
        yield i;
    }
} 

const generator = getOddNumbers(2);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());