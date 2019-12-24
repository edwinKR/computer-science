// Time complexity: O(n)
// Space complexity: O(n)

function isAnagram (s, t) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  
  for (let j = 0; j < t.length; j++) {
    if (map.has(t[j])) {
      map.set(t[j], map.get(t[j]) - 1);
    } else {
      map.set(t[j], 1);
    }
  }

  for (let key of map.keys()) {
    if (map.get(key) > 0) {
      return false;
    } 
  }

  return true;
}

const test1 = isAnagram("anagram", "nagaram");
console.log(test1); //true

const test2 = isAnagram("rat", "car");
console.log(test2); //false