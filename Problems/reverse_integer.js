// Time complexity: O(n)
// Space complexity: O(1)

function reverse (x) {
  let reversed = 0;
    
  while (x !== 0) {
      reversed = reversed * 10 + (x % 10);
      x = x - (x % 10);
      x = x / 10;
  }
  
  if (reversed > Math.pow(2, 31) - 1 || reversed < (-Math.pow(2, 31))) {
      return 0;
  }
  return reversed;
}

const test1 = reverse(123);
console.log(test1); //321

const test2 = reverse(-123);
console.log(test2); //-321

const test3 = reverse(120);
console.log(test3); //21

const test4 = reverse(1);
console.log(test4); //1


// if x = 123
//    reversed = 0 + (123%10) = 0 + 3
//    x = 123 - 3 = 120
//    x = 123 / 10 = 12

// if x = 12
//    reversed = 3 * 10 + (12%10) = 30 + 2 
//    x = 12 - (12%10) = 12 - 2 = 10
//    x = 10 / 10 = 1

// if x = 1
//    reversed = 32 * 10 + (1%10) = 320 + 1 - 321
//    x = 1 - 0 = 1
//    x = 1 / 10 = 0  