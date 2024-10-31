/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumScore = function(nums) {
    totalScore = 0;
    preVal = nums[0]
    if(nums.length == 1) {
        return preVal * preVal;
    }
    preIndex = 0
    nums.forEach((v, i) => {
        if(i == 0) {
            return;
        }
        if(v < preVal) {
            return;
        }
        totalScore += (i-preIndex) * preVal
        preIndex = i
        preVal = v
    })
    totalScore += (nums.length - 1 - preIndex) * preVal
    return totalScore
};

nums = [4,3,1,3,2]
// nums = [1]
// nums = [3,2]
// nums  = [1,6,1]
nums = [1,3,1,5]
console.log(findMaximumScore(nums))