/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {

    let bk1 = Array(nums.length).fill(0);
    let bk2 = Array(nums.length).fill(0);
    for (i = 0; i < nums.length - 1; i++) {
        console.log("i", i);
        for (j = i + 1; j < nums.length; j++) {
            console.log("j", j);
            if (nums[j] > nums[i]) {
                break;
            }
            bk1[i]++;
        }
    }
    console.log(bk1);

    for (i = nums.length -1; i >= 1; i--) {
        for(j = i - 1; j >= 0; j--) {
            console.log("j", j);
            if (nums[j] <= nums[i]) {
                break;
            }
            bk2[i]++;
        }
    }
    console.log(bk2);

};


nums = [2, 1, 1, 5, 6, 2, 3, 1]
console.log(minimumMountainRemovals(nums));