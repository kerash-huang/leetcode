/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let res = nums.sort((a, b) => {
        if (a == 0) {
            return 1
        } else if (b == 0) {
            return -1
        } else {
            return 0
        }
    })
    return res;
};


nums = [0, 1, 0, 3, 12]
console.log(moveZeroes(nums));