/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
    let bk = [];
    let mm = Number.MIN_SAFE_INTEGER;
    for (var i in nums) {
        for (var j in nums) {
            let a = nums[i]
            let b = nums[j]

            if (Math.abs(a - b) <= Math.min(a, b)) {
                mm = Math.max(mm, a ^ b)
            } else {
                continue;
            }
        }
    }
    return mm

};
nums = [1, 2, 3, 4, 5]
nums = [5, 6, 25, 30]
nums = [10, 100]
console.log(maximumStrongPairXor(nums))

