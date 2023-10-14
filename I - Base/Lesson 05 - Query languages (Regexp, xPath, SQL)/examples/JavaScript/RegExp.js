const reg1 = new RegExp("test");
const reg2 = /test/;

//Text
console.log("new RegExp('text'), string=this is test=",
    reg1.test("this is test"));//true
console.log("new RegExp('text'), string=this is Test=",
    reg1.test("this is Test"));//false

console.log("/text/ string=this is test=",
    reg2.test("this is test"));//true
console.log("/text/ string=this is Test=",
    reg2.test("this is Test"));//false

//Character Classes and Quantifiers
const reg3 = /[a-c]*/
console.log("/[a-c]*/ I'll take a cab",
    reg3.test("I'll take a cab"));//true (cab)

const reg4 = /[aetk]{4}/
console.log("/[aetk]]{4}/ I'll take a cab",
    reg4.test("I'll take a cab"));//true (take)

const reg5 = /[a-c]{3}/
console.log("/[a-c]{3}/ I'll take a Cab",
    reg5.test("I'll take a Cab"));//false (Cab - big C)

const reg6 = /[a-z]{4}/
console.log("/[a-z]{4}/ I'll take a cab",
    reg6.test("I'll take a cab"));//true (take)

const reg7 = /\w{4}/
console.log("/\w{4}/ I'll take a cab",
    reg7.test("I'll take a cab"));//true (take)

const reg8 = /\d/
console.log("/\d/ I'll take a cab",
    reg8.test("I'll take a cab"));//false (no numbers)

const reg9 = /[a-z']{4}\s\w{4}\s[a-z]{0,3}\s\w{3}/
console.log("/[a-z']{4}\s\w{4}\s[a-z]{0,3}\s\w{3}/ I'll take a cab",
    reg9.test("I'll take a cab"));//whole sentence
    //[a-z']{4} - I'll
    //\s - space
    //\w{4} - take
    //\s
    //[a-z]{0,3} - a/the
    //\s
    //\w{3} - cab, Cab, car, bag, rat, cat...

const reg10 = /[a-z']+/ig //i - ignore case, g - global (all substrings)
const str1 = "I'll take a cab";
const res10 = str1.match(reg10);
console.log("Examle 10", res10); //[ "I'll", 'take', 'a', 'cab' ]

    
//Groups and assertions    
const regGr1 =/Jack\s(?<name2>\w*)\s(?=White)/;
const str = "Jack William Johnson, Jack Oliver White, Jack Edward Davis";
const res = str.match(regGr1);
console.log("Second name is", res.groups.name2);//Second name is Oliver

