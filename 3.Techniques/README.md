## Algorithm Techniques

### Searching algorithm: Divide & Conquer
- Recursion technique that takes larger problems in sub problems to eventually come to a solution.

**Classic example: Binary Search**
- Time Complexity: O(logN) since you are always splitting the search. Reducing work every search.  
- If you have a sorted array... It's going to be binary search.

**Steps**
1. Define base case.
2. Divide: Break down to a sub-problem.
3. Conquer: Work on each sub-problem and get it solved
4. Combine: Final solution or output.


### Sorting algorithm 
- Two types of sorting

**Type 1. Naive Sorts**

***Bubble Sort***
- Loop through an array by comparing the adjacent indices.
- As you are iterating through the array, swap the greater value to the end.

***Insertion Sort***
- 

**Type 2. Divide & Conquer Sorts**

***Merge Sort***
- Recursively divide list into sub-lists and start merging them from the base (meaning, it starts sorting until the sub-list becomes a single element).
- Time Complexity: O(n*log(n))
- Note: Recursion for dividing into sub-lists, it is O(log n) time. However, when merging and returning through each stack, it would be sorting linearly with O(n).
- Mergesort is the best sort!
