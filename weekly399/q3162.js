/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function (nums1, nums2, k) {
    let nc = 0
    nums1.forEach((v1) => {
        nums2.forEach((v2) => {
            if (v1 % (v2 * k) == 0) {
                nc++;
            }
        })
    });
    return nc;
}

nums1 = [1, 3, 4],
    nums2 = [1, 3, 4],
    k = 1

nums1 = [1, 2, 4, 12], nums2 = [2, 4], k = 3
console.log(numberOfPairs(nums1, nums2, k));