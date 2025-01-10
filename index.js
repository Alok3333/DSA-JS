console.log("DSA-Problems");

// function sort(str) {
//     var sorted = str;
//     //Selection sort
//     for (var i = 0; i < str.length; i++) {
//         for(var j = i + 1; j < str.length - 1; j++) {
//             if (str[i] < str[j]) {
//                 str = swap(str, i, j)
//             }
//         }
//     }
//     return str;
// }

// console.log(sort("zaasfweqrouoicxzvjlmmknkniqwerpopzxcvdfaa"));
// //output: aaaaccdeeffiijkklmmnnoooppqqrrsuvvwwxxzzz

let str = "the code. you Love it.";

function capitaliseLetter(w) {
  let val = w.charCodeAt(0);
  val -= 32;
  return String.fromCharCode(val);
}

function capitailseWord(s) {
  let arr = s.split("");

  for (let i = 0; i < arr.length; i++) {
    if (i == 0 || arr[i - 1] == " " || arr[i - 1] == ".") {
      if (arr[i] >= "a" && arr[i] <= "z") {
        arr[i] = capitaliseLetter(arr[i]);
      }
    }
  }
  return arr.join("");
}

let ans = capitailseWord(str);
console.log(ans, '"ans"');
