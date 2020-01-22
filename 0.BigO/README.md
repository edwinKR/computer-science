## Time & Space Complexity

**Space Complexity**
- How much memory is used?

**Time Complexity**
- How many primitive operations are being executed to solve your problem?
- Generally assumes worst case scenario.
- Generally cares about the input size.
- Usually in the real world, time complexity performance doesn't really matter if you are dealing with a small data set.

***Major Big O Notation***
(From slow to fast)
- O(k^n)   Exponential
- O(n^2)   Quadratic
- O(n)     Linear
- O(log n) Logarithmic(*)
- O(1)     Constant
- Others to know about: O(n * log n), O(n!)

_(*) Logarithmic: As the input increases, the time complexity increases in a fraction. In other words, it grows slow. Operation usually would be a loop that cuts problem in half every iteration._

**Native methods in JavaScript**

***O(n): Constant Time***
- `.pop()` | `.length()` | `.push()` 
- Lookup of an array: Reading an element at a specific i7:00ndex of an array. 
- Lookup of an object: Reading a value for specific key of an object.

***Other***
- `.shift()` | `.unshift()` : O(n)
- Methods like `.forEach()`, `.reduce()`, `.map()` are under the hood really just regular loops. Therefore, it would be Linear: O(n). However! Such methods accept callback functions. Hence, depending on the operation of the callback, the time complexity could change and become more complex.
- `.sort()` : O(n * log n)

