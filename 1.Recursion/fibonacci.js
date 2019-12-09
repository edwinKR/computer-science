// Approach#1: Recursive
// Time Complexity: O(2^n)
// Space Complexity: O(n)

function fibonacci (n) {
  // Exception errors: To prevent negative numbers. 
  if (n < 0) {
    return 0;
  }

  // base case
  if (n < 2) {
    return 1;
  } 

  return fibonacci(n - 1) + fibonacci(n - 2);
}

const test1 = fibonacci(5);  // 1, 1, 2, 3, 5, 8 => returns 8 
const test2 = fibonacci(-2); // return 0
console.log(test1);
console.log(test2);

