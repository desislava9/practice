function extractIncreasing(data) {
  let result = [];
  let biggestOne = data.shift();
  result.push(biggestOne);

  data.forEach(x => {
    if (biggestOne <= x) {
      biggestOne = x;
      result.push(biggestOne);

    }
    
  });
  return result;

}
console.log(extractIncreasing([20, 3, 2, 15, 6, 1]));