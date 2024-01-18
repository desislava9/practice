function biggestElement(arr) {
    let max = arr[0][0];
 for (const element of arr) {
    for (const number of element) {
        if (number > max) {
            max = number;
        }
    }
 }
 console.log(max);
}
biggestElement([[20, 50, 10], [8, 33, 145]]);