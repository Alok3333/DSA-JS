// Problem-12
// Write a program that outputs the string representation of numbers from 1 to N.

// But for multiples of three it should output "Fizz" instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Input format
// First line contains an integer representing the value of N.

// Output format
// Print N lines where each line is a string which is either Fizz or Buzz or FizzBuzz or an integer.

// Sample Input 1
// 15

// Sample Output 1
// 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz

// Explanation
// For n = 1 , 1 is printed. For n = 3 , Fizz is printed. For n = 5 , Buzz is printed. For n = 15 , FizzBuzz is printed.

let n = 15;

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % (3 * 5) === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(n);
