// Time complexity: O(n)
// Space complexity: O(1)

var removeDuplicates = function(nums) {
  var uniqIdx = 0;
  
  for (var currentIdx = 0; currentIdx < nums.length; currentIdx++) {
      if (nums[currentIdx] !== nums[uniqIdx]) {
          nums[uniqIdx + 1] = nums[currentIdx];
          uniqIdx++;
      }
  }

  // Result: Can just return the 'uniqIdx + 1' if just looking for the length of the new duplicate array.
  nums = nums.slice(0, uniqIdx + 1);
  console.log(nums);

  return nums.length;
};

const test1 = removeDuplicates([0,0,1,1,1,2,2,3]); //[0,1,2,3] => length 4
console.log(test1);

const test2 = removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
console.log(test2);