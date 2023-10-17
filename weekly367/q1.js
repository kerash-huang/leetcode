/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function (nums, indexDifference, valueDifference) {
    for (let iindex = 0; iindex < nums.length; iindex++) {
        for (let jindex = 0; jindex < nums.length; jindex++) {
            if (Math.abs(iindex - jindex) < indexDifference) {
                continue;
            }
            const i = nums[iindex]
            const j = nums[jindex]
            if (Math.abs(i - j) >= valueDifference) {
                return [iindex, jindex]
            }
        }
    }
    return [-1, -1]
};

nums = [2, 1];
indexDifference = 0;
valueDifference = 0;

console.log(findIndices(nums, indexDifference, valueDifference));