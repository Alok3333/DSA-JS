// Problem-7
// Given a matrix of dimensions n x n having elements 1 to n*n distinct elements, check whether the matrix is magic square or not.

// Magic square is a square that has the same sum along all rows, columns and diagonals.

// Input format
// There are n + 1 lines of input.

// First line contains integer n.

// The next n lines contain n space separated elements.

// Output format
// Print "Yes" if it is a magic square , "No" otherwise.

// Sample Input 1
// 3

// 4 9 2

// 3 5 7

// 8 1 6

// Sample Output 1
// Yes

// Explanation 1
// All rows, columns and diagonals have sum 15.

// Constraints
// 1 <= n <= 100

// 1 <= element of matrix <= n x n

let mat = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
];

let n = mat.length;

function magicSquare(mat, n) {
  let targetSum = 0;

  for (let col = 0; col < n; col++) {
    targetSum += mat[0][col];
  }

  for (let row = 0; row < n; row++) {
    let sum = 0;
    for (let col = 0; col < n; col++) {
      // console.log(mat[row][col], "before")
      sum += mat[row][col];
    }
    if (sum != targetSum) {
      return "No";
      //   console.log("No");
    }
  }

  for (let col = 0; col < n; col++) {
    let sum = 0;
    for (let row = 0; row < n; row++) {
      // console.log(mat[row][col], "value of col");
      sum += mat[row][col];
    }
    // console.log(sum , "sum of each col");
    if (sum != targetSum) {
      return "No";
    }
  }

  // Get sum value of main diagonal
  let diSum1 = 0;
  for (let i = 0; i < n; i++) {
    diSum1 += mat[i][i];
  }

  if (targetSum != diSum1) {
    return "No";
  }

  // Get sum value of reverse diagonal
  let diSum2 = 0;
  for (let i = 0; i < n; i++) {
    let j = n - 1 - i;
    diSum2 += mat[i][j];
  }

  if (targetSum != diSum2) {
    return "No";
  }

  return "Yes";
}

let result = magicSquare(mat, n);
console.log(result, "result");
