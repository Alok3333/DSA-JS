// Problem - 9
// Given a paragraph of words, capitalise the first character of each word and return the updated paragraph.

// Note : No inbuilt function such as split() to be used.

// Input format
// One line of input which contains a string, the paragraph.

// Output format
// Return the paragraph after capitalising each word.

// Sample Input 1
// the quick Brown fox jumps over The lazy dog.

// Sample Output 1
// The Quick Brown Fox Jumps Over The Lazy Dog.

// Explanation 1
// The first letter of each word has been capitalised and other permitted characters(dot ‘.’) have remained the same.

// Sample Input 2
// the quick Brown .... fox jumps over The lazy dog

// Sample Output 2
// The Quick Brown .... Fox Jumps Over The Lazy Dog.

let string = "the quick Brown .... fox jumps over The lazy dog.";

function capitaliseWord(s) {
    let arr = s.split(" ");

    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}

let result = capitaliseWord(string);
console.log(result, "result");