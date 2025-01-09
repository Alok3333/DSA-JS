// Problem Description
// Given a string, count the total number of vowels present in that string.

// Note: The string contains uppercase and lowercase english alphabets only.

// Input format
// One line of input, which contains the given string.

// Output format
// Print the total number of vowels.

// Sample Input 1
// language

// Sample Output 1
// 4

// Explanation 1
// There are a total of 4 vowels in the string "language" i.e. 'a', 'u', 'a', 'e'.

let str = "language";

function countVowels(s) {
    let sl = s.toLowerCase();
    let count = 0;

    for(let i = 0; i < sl.length; i++){
        if(sl[i] === "a" || sl[i] === "e" || sl[i] === "i" || sl[i] === "o" || sl[i] === "u"){
            count += 1;
        }
    }

    return count;
}

let result = countVowels(str);
console.log(result, "result");