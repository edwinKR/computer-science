function reverseString (s) {
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    let temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
  return s;
}

const test1 = ["h","e","l","l","o"];
console.log(reverseString(test1));

const test2 = ["H","a","n","n","a","h"];
console.log(reverseString(test2));