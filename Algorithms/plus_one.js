// Time complexity: O(n)
// Space complexity: O(1)
var plusOne = function(digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
      if (digits[i] + carry > 9) {
          digits[i] = 0;
          carry = 1;
      } else {
          digits[i] = digits[i] + carry;
          carry = 0;
      }   
  }

  if (carry === 1) {
    digits.unshift(carry);
  }

  return digits;
};


const test1 = plusOne([0]);
console.log(test1);

const test2 = plusOne([9]);
console.log(test2);

const test3 = plusOne([1,2,3]);
console.log(test3);

const test4 = plusOne([1,9,9]);
console.log(test4);