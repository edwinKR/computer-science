// Task: Simple factorial problem with recursion
// n = 5 => 5! = 5 * 4 * 3 * 2 * 1 = 120

// Time Complexity: O(n)
// Space Complexity: O(n)
const factorial = (n) => {
  // Base case
  if (n === 1) return 1;

  // Recursive
  return n * factorial(n - 1);
}

console.log(factorial(5)); //120