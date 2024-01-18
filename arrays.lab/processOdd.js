function processOdd(arr) {
 const result = arr.filter((c, i) => i % 2).map(e => e * 2).reverse().join(' ');
console.log(result);
}
processOdd([10, 15, 20, 25]);
processOdd([3, 0, 10, 4, 7, 3]);