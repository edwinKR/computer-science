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

// '+' - to look for characters that occur ONE or more times. 
let str8 = "aabcadaAa";
let regex8 = /a+/ig;

let result8 = str8.match(regex8);
console.log(result8);

let str9 = "aabca";
let regex9 = /a+/;

let result9 = str9.match(regex9);
console.log(result9);

// '*' - to look for characters that occur ZERO or more times. 
let str10 = "geeeeeeeeeesh";
let regex10 = /ge*/;

let result10 = str10.match(regex10);
console.log(result10);

let result11 = str10.match(/ge+/);
console.log(result11);

let result12 = "great!".match(regex10);
console.log(result12);

// Greedy match: Finds longest possible part of string 
let str13 = "tomato";
let regex13 = /t[a-z]*o/;

let result13 = str13.match(regex13);
console.log(result13);

// Lazy match: Finds shortest possible part of string ('?') 
let result14 = str13.match(/t[a-z]*?o/);
console.log(result14);

// HTML string pattern matching example
let result15 = "<h1>Hello World!</h1>".match(/<.*?>/);
console.log(result15);

// Match beginning string patterns (^)
let str16 = "Hello World!!!!";
let regex16 = /^Hello/;
let result16 = str16.match(regex16);
let result17 = regex16.test(str16);
console.log(result16);
console.log(result17);

let str18 = "He said Hello World!!!";
let result18 = str18.match(regex16);
console.log(result18);
console.log(regex16.test(str18));

// Match ending string patterns ($)
let result19 = /World.*$/.test(str18);
console.log(result19);

// Match ALL letters and numbers aka 'alphanumerics (\w)
let str20 = "Matching all letters_numbers???";
let regex20 = /[A-Za-z0-9_]+/g; //Long hand version
console.log(str20.match(regex20));
let regex21 = /\w+/g; //Short hand version
console.log(str20.match(regex21));

// Negate alphanumerics (\W)
console.log(str20.match(/\W+/g));