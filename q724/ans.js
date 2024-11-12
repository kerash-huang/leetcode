/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let lf_s = []
    let rf_s = []
    for (let x = 0; x < nums.length; x++) {
        let pre_sum = 0;
        if (x > 0) {
            pre_sum = lf_s[x - 1]
        }
        pre_sum += nums[x]
        lf_s.push(pre_sum)
    }

    for (let y = nums.length - 1; y >= 0; y--) {
        let pre_sum = 0;
        if (y < nums.length - 1) {
            pre_sum = rf_s[nums.length - y - 2]
        }
        pre_sum += nums[y]
        rf_s.push(pre_sum)
    }
    for (let z = 0; z < lf_s.length; z++) {
        if (lf_s[z] == rf_s[rf_s.length - z  -1]) {
            return z
        }
    }
    return -1;

};

nums = [1, 7, 3, 6, 5, 6]
nums = [2,1,-1]
console.log(pivotIndex(nums))