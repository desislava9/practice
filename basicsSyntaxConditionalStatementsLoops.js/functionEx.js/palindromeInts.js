function palindromeInts(arr) {
  for (let num of arr) {
    let isPalindrome = checkIsPalindrome(num);
    console.log(isPalindrome);
  }
       
  function checkIsPalindrome(num) {
        let numStr = String(num);
        let reversedNumStr = '';

        for (let i = numStr.length - 1; i >= 0; i--) {
            let curChar = numStr[i];
            reversedNumStr += curChar;
        }
        let isPalindrome = numStr == reversedNumStr;
        return isPalindrome;
    }

}
palindromeInts([123, 323, 421, 121]);