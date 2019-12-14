// Time complexity: O(n)
// Space complexity: O(1)
const moveZeroes = function (nums) {
  let lastNonZeroIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[lastNonZeroIdx] = nums[i];
      lastNonZeroIdx++;
    }
  }

  for (let j = lastNonZeroIdx; j < nums.length; j++) {
    nums[j] = 0;
  }
 
  return nums;
}

const test1 = moveZeroes([0,1,0,3,12]);
console.log(test1);