/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
    let sortset = []
    arr.forEach((v, i) => {
        arr.forEach((v2, j) => {
            if (i < j) {
                sortset.push([v, v2]);
            }
        });
    });

    sortset.sort((a, b) => {
        return a[0] / a[1] - b[0] / b[1];
    });
    return sortset[k - 1];
};

// console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3));
// console.log(kthSmallestPrimeFraction([1, 7], 1));
