// Problem-16
// Given two arrays A and B, write a function to compute their intersection.

// Note: Each element in the result should appear as many times as it shows in both arrays. The result needs to be in sorted order.

// Input format

// First line contains one integer N denoting the number of elements in array A

// Next line contains N integers denoting the elements of array A

// Next line contains one integer M denoting the number of elements in array B

// Next line contains M integers denoting the elements of array B

// Output format
// Single line containing the intersection elements of the two arrays in sorted order.

// Sample Input 1

// 4

// 1 2 2 1

// 2

// 2 2

// Sample Output 1
// 2 2

// Explanation
// Since 2 2 are the only elements present in both the arrays.

let arr1 = [20, 10, 30, 10, 30, 50, 30, 50];
let arr2 = [10, 30, 30, 20, 20, 40, 50, 60];

function computeInterSection(a, b) {
  let nums = [];
  let hashMap = new Map();

  for (let i = 0; i < a.length; i++) {
    if (hashMap.has(a[i])) {
      let oldVal = hashMap.get(a[i]);
      hashMap.set(a[i], oldVal + 1);
    } else {
      hashMap.set(a[i], 1);
    }
  }

  //   console.log(hashMap, "hashmap");

  for (let i = 0; i < b.length; i++) {
    if (hashMap.has(b[i])) {
      let getOldVal = hashMap.get(b[i]);
      if (getOldVal > 0) {
        nums.push(b[i]);
        hashMap.set(b[i], getOldVal - 1);
      }
    }
  }
  //   for (let i = 0; i < b.length; i++) {
  //     // console.log(b[i]);
  //     let freq = hashMap.get(b[i]) || 0;
  //     // console.log(freq, "freq start");

  //     if (freq > 0) {
  //     //   console.log(b[i], "freq > 0");
  //       nums.push(b[i]);
  //       hashMap.set(b[i], freq - 1);
  //     }
  //     // console.log(freq, "freq end");
  //   }

  //   console.log(nums, "nums");
  return nums.sort((a, b) => a - b);
}

let ans = computeInterSection(arr1, arr2);
console.log(ans, "ans");
