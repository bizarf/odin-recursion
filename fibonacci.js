// Fibonacci sequence in an array made using iteration
function fibs(n) {
    let arr = [0, 1]
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 2] + arr[i - 1]
    }
    return arr
}

console.log(fibs(8))

// Fibonacci sequence in an array made using recursion
function fibsRec(n, arr = [0, 1]) {
    if (n < 2) {
        return arr;
    } else {
        arr[n] = (n - 2) + (n - 1)
        return fibsRec(n - 1, arr)
    }
}

console.log(fibsRec(8))