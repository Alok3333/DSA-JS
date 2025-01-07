// Problem - 8
// Given an array of n integers and an integer k, rotate the array k times in clockwise order.

// Input format
// There are three lines of input.

// First line contains integer n.

// Next line contains n space separated integers.

// Next line contains the value of k.

// Output format
// Print the rotated array.

// Sample Input 1
// 5

// 1 2 3 4 5

// 2

// Sample Output 1
// 4 5 1 2 3

// Explanation 1
// After first rotation array will be 5 1 2 3 4

// After second rotation array will be 4 5 1 2 3

// // Apporch - 1 using loop with mod
// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// let n = arr.length;

// let arr2 = [];

// for (let i = 0; i < arr.length; i++) {
//   arr2[(i + k) % n] = arr[i];
// }

// console.log(arr2, "arr");

// Apporch - 2 using reversing subArray

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 2;

function cyclicRotate(arr, k) {
  let n = arr.length;

  k %= n;

  // Reverse the right rotation element from k
  reverse(arr, n - k, n - 1);

  // Reverse the left rotation element from 0
  reverse(arr, 0, n - 1 - k);

  // Reverse the element from 0 to n-1
  reverse(arr, 0, n - 1);
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

cyclicRotate(arr, k);
console.log(arr, "result");
