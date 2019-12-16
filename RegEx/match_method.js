/*
JS regex objects.
.match()

*/

let str1 = "Hello, World. This is the RegEx zone.";
let regex1 = /regex/;

// flags: case insensitive 'i'
let regex2 = /regex/i;

let result1 = str1.match(regex1);
let result2 = str1.match(regex2);

console.log(result1);
console.log(result2);

// flags: more than once match found. 'g'
let str3 = "Hello, World. This is the RegEx zone where you learn about regex.";
let regex3 = /regex/ig;

let result3 = str3.match(regex3);
console.log(result3);

// wildcard: . (dot, period)
let str4 = "Fun in the sun and run."
let regex4 = /.un/g;

let result4 = str4.match(regex4);
console.log(result4);

// Character classes:
let str5 = "Learning regex wasn't even considered. But now I realize it is super helpful.";
let regex5 = /[aeiou]/ig;

let result5 = str5.match(regex5);
console.log(result5);

// Character sets: built-in feature '-'
let regex6 = /[a-z]/ig;

let result6 = str5.match(regex6);
console.log(result6);

// Negated character set: '^'
let str7 = "45 times of regex huh?";
let regex7 = /[^0-9aeiou]/ig;

let result7 = str7.match(regex7);
console.log(result7);

// '+' - to look for characters that occur one or more times. 
let str8 = "aabcadaAa";
let regex8 = /a+/ig;

let result8 = str8.match(regex8);
console.log(result8);

let str9 = "aabca";
let regex9 = /a+/;

let result9 = str9.match(regex9);
console.log(result9);