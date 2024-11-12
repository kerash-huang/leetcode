/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function (nums, maximumBit) {
    let n = nums.length;
    let max = (1 << maximumBit) - 1;
    let res = [];
    let xor = 0;
    for (let i = 0; i < n; i++) {
        xor ^= nums[i];
        res.push(max ^ xor);
    }
    return res.reverse();
};


nums = [0, 1, 1, 3];
maximumBit = 2;

nums = [2, 3, 4, 7]
maximumBit = 3
console.log(getMaximumXor(nums, maximumBit)) 