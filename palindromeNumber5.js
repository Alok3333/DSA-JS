// Problem - 5
// Given an number 121 and check whether this number palindrome or not if yes then return true or false;

// Sample input 1
// 1991

// Sample output 1
// true

let num = 1991;

function isPalindromeNumber(num) {
    let palNum = num;
    let reverse = 0;

    while(num > 0){
        reverse = (reverse * 10) + num%10;
        num = Math.floor(num/10);
    }
    
    if(palNum === reverse){
        return true;
    } else {
        return false;
    }
}

let result = isPalindromeNumber(num);
console.log(result, "result");