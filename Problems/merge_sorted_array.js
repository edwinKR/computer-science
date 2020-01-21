function merge (nums1, m, nums2, n) {
  nums1 = nums1.slice(0, m);
  nums2 = nums2.slice(0, n);
  
  if (n === 0 && m > 0) return nums1;
  
  let p1 = 0;
  let p2 = 0;
  
  while (p1 < nums1.length && p2 < nums2.length) {
      if (nums1[p1] > nums2[p2]) {
          nums1.splice(p1, 0, nums2[p2]);
          p2++;
      }
      p1++;
  }
  
  return p1 === nums1.length ? [...nums1, ...nums2.slice(p2)] : nums1;
}

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
const m1 = 3;
const n2 = 3;

const test1 = merge(nums1, m1, nums2, n2);
console.log("Test1 Result: ", test1);

let nums3 = [0];
let nums4 = [2, 5, 6];
const m3 = 0;
const n4 = 3;

const test2 = merge(nums3, m3, nums4, n4);
console.log("Test2 Result: ", test2);

let nums5 = [1, 2, 3, 0, 0, 0];
let nums6 = [0, 0, 0];
const m5 = 3;
const n6 = 0;

const test3 = merge(nums5, m5, nums6, n6);
console.log("Test2 Result: ", test3);
