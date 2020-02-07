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


- Two types of sorting

**Type 1. Naive Sorts**

***Bubble Sort***
- Loop through an array by comparing the adjacent indices.
- As you are iterating through the array, swap the greater value to the end.
- It's a very naive sorting approach and wouldn't really want to use this algorithm in real world practice.

***Insertion Sort***
- _TBD_ 

**Type 2. Divide & Conquer Sorts**

***Merge Sort***
- Recursively divide list into sub-lists and start merging them from the base (meaning, it starts sorting until the sub-list becomes a single element).
- Time Complexity: O(n*log(n))
- Note: Recursion for dividing into sub-lists, it is O(log n) time. However, when merging and returning through each stack, it would be sorting linearly with O(n).
- Mergesort is the best sort!

***Quick Sort***
- Very efficient for large data sets.
- Time Complexity: Average O(n*log(n)) | Worst Case O(n^2)
- Performance depends largely on the selection of the "pivot"
- Selection of Pivot (5 approaches)
  - First index element of the data set. (Can be worst performance)
  - Last index element of the data set. (Can be worst performance)
  - Middle index element of the data set.
  - Median index element of the data set.
  - Random index element of the data set. (Usually works the best for large data sets. Also, ensures O(n*log(n) performance))

### Greedy Algorithm
- Always making the "locally" optimal choice.
- Safer to use "Brute Force Approach" rather than the "greedy approach".
- But even so, when datasets are too large, greedy solution although not being the correct solution, still might be the good enough solution. 

### Dynamic Programming Technique ###
- Data optimization technique.
- Breaking problem into optimal substructure which tends to be recursive. (Overlapping subproblems)
- With the repeated overlapping solutions, you can cache those values to avoid repeated calculations.

***2 types of approach***
1. Top-down recursive technique
2. Bottom-up iterative tenique

