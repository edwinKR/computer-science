// Time complexity: O(n)
// Space complexity: O(1)

function myAtoi(str) {
  if (str === "" || str ==="-") {
    return 0;
  } 

  let newString = str.split(" ").join("");
  if (newString[0] === "+") {
    newString.substring(1);
  }
  let strToInteger = "";

  for (let i = 0; i < newString.length; i++) {
    if (isNaN(newString[i]) && newString[i] !== "-") {
      return 0;
    }

    if (newString[i] === "-" && !isNaN(newString[i + 1])) {
      strToInteger += newString[i];
    }

    if (!isNaN(newString[i])) {
      strToInteger += newString[i];
    }
    
    if(isNaN(newString[i + 1])) {
      break;
    }
  }
  
  let result = parseInt(strToInteger, 10);
  if (result > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  } else if (result < -(Math.pow(2, 31))) {
    return -(Math.pow(2, 31));
  } else {
    return result;
  }
}


const test1 = myAtoi("42");
console.log(test1); //42

const test2 = myAtoi("    -42");
console.log(test2); //-42

const test3 = myAtoi("4193 with words");
console.log(test3); //4193

const test4 = myAtoi("words and 987");
console.log(test4); //0

const test5 = myAtoi("-91283472332");
console.log(test5); //-2147483648 or -2^31(INT_MIN)

const test6 = myAtoi("-54893$$ words");
console.log(test6); //-54893

const test7 = myAtoi("");
console.log(test7); //0

const test8 = myAtoi("-");
console.log(test8); //0

const test9 = myAtoi("+1");
console.log(test9); //1