/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function (s1, s2, s3) {
    let count = 0;
    if (s1 == s2 && s2 == s3) {
        return 0;
    }
    do {
        if (s1[0] == s2[0] && s1[0] == s3[0]) {
            count++
            s1 = s1.substring(1)
            s2 = s2.substring(1)
            s3 = s3.substring(1)
        } else {
            break;
        }
    } while (s1.length > 0 && s2.length > 0 && s3.length > 0);
    if(count == 0) {
        return -1;
    }
    let sum = [s1.length, s2.length, s3.length].reduce((acc, a) => acc + a, 0);
    return sum;

};

s1 = "abc", s2 = "abb", s3 = "ab"
s1 = "dac", s2 = "bac", s3 = "cac"
s1 = "a"
s2 = "aabc"
s3 = "a"
console.log(findMinimumOperations(s1, s2, s3))