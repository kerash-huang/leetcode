/** q2849
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function (sx, sy, fx, fy, t) {
    if (sx == fx && sy == fy && t > 0 && t < 2) {
        return false;
    }
    let xDist = Math.abs(sx - fx)
    let yDist = Math.abs(sy - fy)

    let step = 0;
    if (xDist > yDist) {
        step = yDist
        xDist -= yDist
        yDist = 0
    } else {
        step = xDist
        yDist -= xDist
        xDist = 0
    }
    if (step > t) {
        return false;
    }
    if (xDist == 0) {
        return step + yDist > t ? false : true;
    } else {
        return step + xDist > t ? false : true;
    }
};

sx = 2, sy = 4, fx = 7, fy = 7, t = 6
sx = 3, sy = 1, fx = 7, fy = 3, t = 3
sx = 1, sy = 1, fx = 1, fy = 1, t = 3
sx = 1, sy = 2, fx = 1, fy = 2, t = 1
sx = 1, sy = 4, fx = 1, fy = 2, t = 1
sx = 1, sy = 2, fx = 3, fy = 1, t = 2
sx = 320059507, sy = 123987292, fx = 635316577, fy = 658270268, t = 781103198
// sx = 1, sy = 1, fx = 2, fy = 2, t = 1

console.log(isReachableAtTime(sx, sy, fx, fy, t))