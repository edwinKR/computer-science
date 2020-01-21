const twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(target - nums[i])) {
      map.set(nums[i], target - nums[i]);
    } else {
      const idx = nums.indexOf(target - nums[i]);
      return [ idx, i ];
    }
  }

  return "Not existing"
};

const test1 = twoSum([11,7,15,1,3,2], 9);
console.log(test1);
