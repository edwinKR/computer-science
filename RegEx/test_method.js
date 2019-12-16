/*
JS regex objects.
.test()

*/

let myString = "Hello, World!";
let myRegex = /Hello/;

let result = myRegex.test(myString);
console.log(result); //Should return true

// flags: case insensitive 'i'
let str1 = "Hello, World. This is the RegEx zone.";
let regex1 = /regex/i;

let result1 = regex1.test(str1);
console.log(result1);