// Binary Search

let arr = [2, 4, 5, 7, 9, 12, 20, 22, 25];
let target = 9;

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    console.log(arr[mid], "mid");

    if (target === arr[mid]) {
      return mid;
    }

    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}

let result = binarySearch(arr, target);
console.log(result, "result");
