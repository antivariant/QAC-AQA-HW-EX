const string1 = "This is a string";
//String length
console.log("String length", string1.length);//16
console.log("Index of first 'is' = ", string1.indexOf("is"));//2 (ThIS...)
console.log("Index of second 'is' from 5 = ", string1.indexOf("is", 5));//5 (.. is ...)
console.log("Last index of 'is' = ", string1.lastIndexOf("is"));//5
console.log("Last index of 'is' from 3 = ", string1.lastIndexOf("is", 3));//2
console.log("Index of 'the' = ", string1.lastIndexOf("the"));//-1
console.log("Includes is = ", string1.includes("is"));//true
console.log("Includes the = ", string1.includes("the"));//false
console.log("Includes 'is' from 5 = ", string1.includes("is", 7));//false
console.log("Strarts with This=", string1.startsWith("This"));//true
console.log("Strarts with That=", string1.startsWith("That"));//false
console.log("Ends with ing = ", string1.endsWith("ing"));//true
console.log("Ends with ed =", string1.endsWith("ed"));//false
var subs1 = string1.substring(0, 4);
console.log("subs1=", subs1);//This
var slice1 = string1.slice(0, 4);
console.log("slice1=", slice1);//This
console.log("To upper case = ", string1.toUpperCase());//THIS IS A STRING
console.log("To lower case = ", string1.toLowerCase());//this is a string
const string2 = "  Text with    spaces    ";
console.log("trim = ", string2.trim());//"Text with    spaces"
console.log("trimStart = ", string2.trimStart());//"Text with    spaces    "
console.log("trimEnd = ", string2.trimEnd());//"  Text with    spaces"
console.log("padStart = ", string1.padStart(20));//"    This is a string"
console.log("padEnd = ", string1.padEnd(20));//"This is a string    "
//This is a string  Text with    spaces    
console.log("concat=", string1.concat(string2));
//This is the string
console.log("replace a with the = ", string1.replace(" a ", " the "));
//Thas as a strang
console.log("replace all i to a", string1.replaceAll("i", "a"));
const splittedString = string1.split(" ");
console.log("splittedString=", splittedString);//[ 'This', 'is', 'a', 'string' ]
//This is a stringThis is a stringThis is a string
console.log(string1.repeat(3));