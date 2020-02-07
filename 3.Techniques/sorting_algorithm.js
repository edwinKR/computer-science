// Task#1: Merge Sort

// Overall time complexity: O(n * log n)
function mergeSort(list) {
  // base case
  if (list.length < 2) {
    return list;
  }
  // Time complexity when splitting: O(log n)
  const middle = Math.floor(list.length / 2);
  const leftList = list.slice(0, middle);
  const rightList = list.slice(middle);

  const leftSorted = mergeSort(leftList);
  const rightSorted = mergeSort(rightList);

  // Time complexity when using the `merge` helper method: O(n)
  return merge(leftSorted, rightSorted);
}

// Helper function to merge sub lists
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

const test1 = mergeSort([7, 6, 1, 12, 34, 3, 2]);
console.log("Merge Sort Result ====> ", test1);


// Task#2: Bubble Sort (Not a divide & conquer sorting algorithm.)
// Time Complexity: 0(n^2)
// Space Complexity: O(1)
function bubbleSort(list) {
  let isSorted = false;
  let lastListLength = list.length;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < lastListLength; i++) {
      if (list[i] > list[i + 1]) {
        swap(list, i, i + 1);
        isSorted = false;
      }
    }
    lastListLength--;
  }

  return list;
}

// Helper function to swap adjacent elements in a given list.
function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

const test2 = bubbleSort([7, 6, 1, 12, 34, 3, 2]);
console.log("Bubble Sort Result ===> ", test2);


// Task#3: Quick Sort (Divide & conquer sorting algorithm.)
// Time Complexity: Worst Case - 0(n^2) | Average Case - O(n*log(n))
// Space Complexity: Worse Case - O(n) | Average Case - O(log(n))
function quickSort(array, begin = 0, end = array.length - 1) {
  // Base Case
  if (begin >= end) {
    return;
  } 

  let partitionIndex = partition(array, begin, end);
  quickSort(array, begin, partitionIndex - 1); // Sort left partition
  quickSort(array, partitionIndex + 1, end); // Sort right partition
  return array;
}

// Helper function to find the parition inndex on the array.
function partition(array, begin, end) {
  // Need to select a pivot. There are several ways on selecting a pivot. We will select the last index element.
  let pivot = array[end];
  let partitionIndex = begin;

  for (let i = begin; i < end; i++) {
    if (array[i] <= pivot) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(array, partitionIndex, end);
  return partitionIndex;
}

const test3 = quickSort([12, 3, 1, 6, 23, 12]);
console.log("Quick Sort Result ===> ", test3);