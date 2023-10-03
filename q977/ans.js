/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let newStk = [];
    for (let x of nums) {
        let n = x * x
        newStk.push(n)
    }
    return newStk.sort((a, b) => {
        return a > b ? 1 : -1;
    })
};

// record ans from solution 
var sortedSquares = function (nums) {
    // use two pointers
    // create a new array
    const result = new Array(nums.length);
    let left = 0,
        right = nums.length - 1;

    // don't want to rearrange the array, so iterating the array in descending order 
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            result[i] = nums[right] ** 2
            right--;
        } else {
            result[i] = nums[left] ** 2
            left++;
        }
    }

    return result;
};

let nums = [-4, -1, 0, 3, 10]
nums = [-7, -3, 2, 3, 11]
console.log(sortedSquares(nums));