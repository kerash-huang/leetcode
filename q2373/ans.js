/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
    let gWidth = grid[0].length
    let gHeight = grid.length
    let newGrid = []; // gWidth - 2 & gHeight - 2
    for (let y = 0; y < gHeight - 2; y++) {
        newGrid.push(new Array());
        for (let x = 0; x < gWidth - 2; x++) {
            // newGrid[y].push(getMaxInMatrix(grid, x, y));
            newGrid[y].push(getMaxInMatrix2(grid, x, y))

        }
    }
    return newGrid;
};

var getMaxInMatrix = function (grid, x, y) {
    let max = 0;
    for (let j = y; j < y + 3; j++) {
        for (let i = x; i < x + 3; i++) {
            max = grid[j][i] >= max ? grid[j][i] : max
        }
    }
    return max;
}

var getMaxInMatrix2 = function (grid, x, y) {
    let convert1dg = []

    for (let j = y; j < y + 3; j++) {
        for (let i = x; i < x + 3; i++) {
            convert1dg.push(grid[j][i]);
        }
    }
    return Math.max( ... convert1dg);
}

var grid = [[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]];
grid = [[1, 1, 1, 1, 1], [1, 1, 1, 1, 1], [1, 1, 2, 1, 1], [1, 1, 1, 1, 1], [1, 1, 1, 1, 1]]
console.log(largestLocal(grid));