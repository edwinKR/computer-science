// SEARCHING ALGORITHM

// Task#1 : Linear Search

// Time complexity: O(n)
// Space complexity: O(1)
function linearSearch(list, item) {
  for(let i = 0; i < list.length; i++) {
    if(list[i] ===  item) {
      return i;
    }
  }
  return false;
}

const test1 = linearSearch([2, 6, 7, 90, 103], 90);
console.log(test1);
const test2 = linearSearch([2, 6, 7, 90, 103], 10000);
console.log(test2);

// Task#2: Binary Search
// Time complexity: O(log n)
// Space complexity: O(1)
function binarySearch(list, item, start = 0, end = list.length - 1) {
  let middleIdx;
  
  while (start <= end) {
    middleIdx = Math.floor((start + end) / 2);
    
    if (list[middleIdx] === item) return middleIdx;

    if (list[middleIdx] > item) {
      end = middleIdx - 1;
    } else {
      start = middleIdx + 1;
    }
  }
  
  return false;
}

const test3 = binarySearch([2, 6, 7, 90, 103], 90);
console.log(test3);
const test4 = binarySearch([2, 6, 7, 90, 103], 10000);
console.log(test4);


// Task#3: Binary Search (Recursive)
// Time complexity: O(log n)
// Space complexity: O(n)
function recursiveBinarySearch(list, item, start = 0, end = list.length - 1) {
  // Base case:
  if (start > end) return false;

  let middleIdx = Math.floor((start + end) / 2);

  if(list[middleIdx] === item) return middleIdx;

  // itemNum vs list[middleIdx]
  if(list[middleIdx] < item) {
    return recursiveBinarySearch(list, item, middleIdx + 1, end);
  } else {
    return recursiveBinarySearch(list, item, start, middleIdx - 1);
  }
}

const test5 = recursiveBinarySearch([2, 6, 7, 90, 103], 90);
console.log(test5);
const test6 = recursiveBinarySearch([2, 6, 7, 90, 103], 10000);
console.log(test6);

