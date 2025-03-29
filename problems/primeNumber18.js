// Print prime number from 1 to n

let n = 50;

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function printPrimeNum(n) {
  for (let i = 1; i <= n; i++) {
    if (isPrime(i)) {
      console.log(`Prime Number => ${i}`);
    }
  }
}

printPrimeNum(n);
