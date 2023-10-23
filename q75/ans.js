/** 75. Sort Colors
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let sa = new Array(3).fill(0)
    for (let v of nums) {
        sa[v]++
    }
    var index = 0;
    for (let num in sa) {
        while (sa[num] > 0) {
            nums[index] = num
            sa[num]--
            index++
        }
    }
    console.log(nums)
};

var nums = [2, 0, 2, 1, 1, 0]
sortColors(nums)