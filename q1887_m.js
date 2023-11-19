/** q1887
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
    if (nums.length == 1 || (nums.length == 2 && nums[0] == nums[1])) {
        return 0
    } else if (nums.length == 2 && nums[0] != nums[1]) {
        return 1
    }
    nums.sort((a, b) => b - a)
    let opnum = 0
    let index = 0;
    do {
        if (nums[index] != nums[index + 1]) {
            opnum += index+1
        }
        index++;
    } while (index < nums.length - 1);
    return opnum;
};

nums = [5, 1, 3]
nums = [1, 1, 2, 2, 3]
console.log(reductionOperations(nums))