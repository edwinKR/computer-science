// Time complexity: O(n + m)
var intersect = function(nums1, nums2) {
  const map = new Map();
  for (const num of nums1) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }

  const result = [];
  for (const num of nums2) {
    if (map.has(num) && map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    } 
  }

  return result;
};

const test1 = intersect([1,2,2,1], [2,2])
console.log(test1)