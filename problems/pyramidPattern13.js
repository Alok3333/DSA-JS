// Problem-13
// Given a number n, you have to print a triangle-shaped pattern with n rows using space separated '*'.

// For eg. if n = 4 pattern will be:

let n = 4;

function pyramidPattern(n) {
    let str = "";

    for(let row = 1; row <= n; row++){
        for(let col = 1; col <= row; col++){
            str += "*" + " ";
        }
        str += "\n";
    }

    return str;
}

let ans = pyramidPattern(n);
console.log(ans, "ans");