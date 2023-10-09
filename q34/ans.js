/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = 0
    let right = nums.length - 1
    if (nums[left] == target && nums[right] == target) {
        return [left, right]
    }
    left = binSearch(nums, target, true)
    right = binSearch(nums, target, false)
    return [left, right]
};

var binSearch = function (nums, t, findLeft) {
    let left = 0
    let right = nums.length - 1
    let out = -1
    while (left <= right) {
        mid = Math.floor((left + right) / 2)
        if (nums[mid] > t) {
            right = mid - 1
        } else if (nums[mid] < t) {
            left = mid + 1
        } else {
            out = mid;
            if (findLeft) {
                right = mid -1
            } else {
                left = mid +1 
            }
        }
    }
    return out;
}

nums = [5, 7, 7, 8, 8, 10]
target = 8
nums = [1,1,1,1,1]
target = 1
// nums = [1,3]
// target = 1
console.log(searchRange(nums, target));