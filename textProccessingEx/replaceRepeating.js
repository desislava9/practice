function replaceRepeating(str) {
let noRepeatStr = '';
let prevChar = '';

for (let char of str) {
    if (curChar !== prevChar) {
        noRepeatStr += curChar;
        prevChar = curChar;
    }

}
console.log(noRepeatStr);
}
replaceRepeating('aaaaabbbbbcdddeeeedssaa');