/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var position = 1;
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] != nums[i + 1]) {
            nums[position] = nums[i + 1]
            position++;
        }
    }
    return position;
};
nums = [1, 1, 2]
// nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDuplicates(nums))
console.log(nums)