numArray = [6, 3, 1, 5, 8, 7, 2, 4]

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    // cuts the array in half
    let half = Math.ceil(arr.length / 2)
    let leftArray = arr.slice(0, half)
    let rightArray = arr.slice(half)

    // recursion stuff to split the array up and then merge
    let sortedLeft = mergeSort(leftArray)
    let sortedRight = mergeSort(rightArray)
    return merge(sortedLeft, sortedRight)
}

function merge(left, right) {
    let newArr = []

    // indexes for left and right
    let i = 0
    let j = 0

    // compares values and then pushes to the new array
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            newArr.push(left[i])
            i++
        } else {
            newArr.push(right[j])
            j++
        }
    }

    // goes through each single array and joins them up
    while (i < left.length) {
        newArr.push(left[i])
        i++
    }

    while (j < right.length) {
        newArr.push(right[j])
        j++
    }

    return newArr
}

console.log(mergeSort(numArray))