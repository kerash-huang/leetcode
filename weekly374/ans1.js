/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
    let cycle = true;
    for (h = 0; h < mat.length; h++) {
        for (w = 0; w < mat[h].length; w++) {
            let check_pos = (w + k) % mat[h].length;
            if (mat[h][w] != mat[h][check_pos]) {
                cycle = false;
                break;
            }
        }
    }
    return cycle;
};

mat = [[1, 2]], k = 1
mat = [[1, 2, 1, 2], [5, 5, 5, 5], [6, 3, 6, 3]], k = 2
console.log(areSimilar(mat, k))