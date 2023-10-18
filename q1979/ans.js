/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
    max = Math.max(...nums)
    min = Math.min(...nums)
    var gcd = function (a, b) {
        if (a == 0)
            return b
        return gcd(b % a, a)
    }
    return gcd(min, max);
};

nums = [2, 5, 6, 9, 10];
nums = [7, 5, 6, 8, 3]
console.log(findGCD(nums));