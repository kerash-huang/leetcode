/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let pairs = {};
    nums.forEach(function (val, index) {
        if (typeof pairs[val] === 'undefined') {
            pairs[val] = 0;
        } else {
            pairs[val]++;
        }
    });
    let count = 0;
    (Object.values(pairs)).forEach(v => {
        if (v < 2)
            count += v
        else
            count += (v * (v + 1)) / 2
    });
    return count;
};

var numIdenticalPairs = function (nums) {
    let pairs = {}
    let count = 0
    for (let i in nums) {
        if (typeof pairs[nums[i]] === 'undefined') {
            pairs[nums[i]] = 1
        } else {
            count += pairs[nums[i]]
            pairs[nums[i]]++
        }
    }
    return count
}

let nums = [1, 2, 3, 1, 1, 3];
// nums= [1,2,3]
console.log(numIdenticalPairs(nums));