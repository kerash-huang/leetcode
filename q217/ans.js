/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let stk = [];
    for (let x of nums) {
        if (typeof stk[x] !== 'undefined') {
            return true
        }
        stk[x] = 1;
    }
    return false;
};

let nums = [1, 2, 3, 1];
nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
nums = [1, 2, 3, 4]
console.log(containsDuplicate(nums));