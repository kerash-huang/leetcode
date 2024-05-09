/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
// var maximumHappinessSum = function (happiness, k) {
//     happiness.sort((a, b) => b - a);
//     maximumSum = 0;
//     for (let i = 0; i < k; i++) {
//         let happinessV = happiness.shift();
//         maximumSum += happinessV - i >= 0 ? happinessV - i : 0;
//     }
//     return maximumSum;
// };

var maximumHappinessSum = function (happiness, k) {
    happiness.sort((a, b) => b - a);
    let children = happiness.slice(0, k);
    let maximumSum = 0;
    children.forEach((v, i) => {
        maximumSum += v - i >= 0 ? v - i : 0;
    });
    return maximumSum;
}

// console.log(maximumHappinessSum([3, 5, 8, 7], 2));
console.log(maximumHappinessSum([1, 2, 3], 2));
// console.log(maximumHappinessSum([2,3,4,5], 1));
// console.log(maximumHappinessSum([12, 1, 42], 3));