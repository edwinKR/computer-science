Recursion

0. Summary
- Very useful in many cases.
- But there's a cost to it.
  - Calling each function and adds it to a stack. Now, calling a function is not free. It costs memory. Imagine you call hundreds and hundreds of functions, that would cost us quite some memory. And if you fall in too deep of a stack with functions, you might end up with a 'stack overflow'.
- Recursions are great in that it makes your code readable. Hence, if you know it works with recursion, go with that approach for good readability. 
- But! If it's going to cost us too much, then that's when you refactor your code. 
- Divide & Conquer approach

1. Writing Code
- Start with a base case. The base case tells when to stop. Without it, you will end up in a stack overflow.

2. Example
- Popular algorithm problem for recursion: fibonacci 

3. Memoization
- Type of 'Caching'
- Memoization is caching the value that a function returns
- In JavaScript environtment, caching in the simplest form is saving something into an object or array
- With caching, you are always making the tradeoff between time and space. It's faster, but takes more space.
- Again, unlike other programming languages where memory has impact on performance, in the JavaScript environtment, we usually think about time complexity unless the data is just massive. Hence, caching is usually a good idea.