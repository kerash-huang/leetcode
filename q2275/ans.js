/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function (candidates) {
    let maxnum = Math.max(...candidates)
    let arrs = new Array(Int32Array).fill(0);

    for (let x in candidates) {
        let c = candidates[x].toString(2)
        for (let p in c) {
            if (c[p] == 1) {
                arrs[c.length - 1 - p] += 1;
            }
        }
    }
    return Math.max(...arrs)

};

candidates = [16, 17, 71, 62, 12, 24, 14]
candidates = [8, 8];
console.log(largestCombination(candidates));