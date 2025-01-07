// Problem - 5
// Given an string madam and check whether this number palindrome or not if yes then return true or false;

// Sample input 1
// madam

// Sample output 1
// true

let str = "madam";

function isPalindromeString(s) {
  let l = s.length;
  for (let i = 0; i < l / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

let result = isPalindromeString(str);
console.log(result, "result");
