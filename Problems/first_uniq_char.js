// Time complexity: O(n)
// Space complexity: O(n)

// function firstUniqChar (s) {
//   const map = {};

//   // { 'l': true, 'e': false }
//   for (let i = 0; i < s.length; i++) {
//     if (map[s[i]] === undefined) {
//       map[s[i]] = true;
//     } else {
//       map[s[i]] = false;
//     }
//   }
//   console.log('map==========')
//   console.log(map)
//   for (let key in map) {
//     if (map[key]) {
//       console.log(map[key])
//       return s.indexOf(key);
//     }
//   }
  
//   return -1;
// }

function firstUniqChar (s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 0);
    }
  }

  for (let key of map.keys()) {
    if (map.get(key) === 0) {
      return s.indexOf(key);
    }
  }

  return -1;
}


const test1 = firstUniqChar('leetcode');
console.log(test1); //return 0

const test2 = firstUniqChar('loveleedcode');
console.log(test2); //return 2

const test3 = firstUniqChar('aabbcccdd');
console.log(test3);  //-1