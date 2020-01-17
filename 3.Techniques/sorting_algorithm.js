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

// Helper method to merge sub lists
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
console.log(test1);