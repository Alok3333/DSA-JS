// Problem-14
// You are given a string which comprises lower case alphabets (a-z), upper case alphabets (A-Z), numbers, (0-9) and special characters like !,-.; etc.

// You are supposed to find out which character occurs the maximum number of times and its occurrence count in the given string. If two characters occur equal number of times, you have to output the character with the lower ASCII value.

// For example, if your string was: aaaaAAAA, your output would be: A 4, because A has lower ASCII value than a.

// Input format
// One line of input containing the string S.

// Output format
// You will have to output two space separated values:

// The character which occurs the maximum number of times.

// The number of its occurrence.

// Sample Input 1
// Statements are unique.

// Sample Output 1
// e 4

// Constraints
// 1 <= |S| <= 100

let s = "aaaabbbbbAAAABBBB";

function mostFrequent(s) {
  let hashMap = new Map();
  let maxVal = 0;
  let maxChar = "";

  for (let i = 0; i < s.length; i++) {
    if (hashMap.has(s[i])) {
      let oldVal = hashMap.get(s[i]);
      hashMap.set(s[i], oldVal + 1);
    } else {
      hashMap.set(s[i], 1);
    }
  }

  console.log(hashMap, "hashmap");

  for (let [one, two] of hashMap) {
    // console.log(one, "char", two, "val");
    if(maxVal < two){
        maxVal = two
        maxChar = one
    } else if(maxVal == two) {
        if(maxChar > one){
            maxChar = one
            maxVal = two
        }
    }
  }

  console.log(maxChar, "=>maxChar", maxVal,"=>maxVal")
}

let ans = mostFrequent(s);
