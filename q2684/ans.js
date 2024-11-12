/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
    let maxStep = 0;
    let stepGrid = [];

    for (let i = 0; i < grid.length; i++) {
        let row = [];
        for (let j = 0; j < grid[0].length; j++) {
            row.push(0);
        }
        stepGrid.push(row);
    }

    var moveIt = function (grid, last, x, y, step) {
        if(stepGrid[y][x] > 0) {
            return stepGrid[y][x];
        }
        if (y < 0 || x >= grid[0].length || y >= grid.length) {
            return step;
        }
        let val = grid[y][x];
        if (last >= val) {
            return step;
        }
        if (x + 1 < grid[0].length) {
            let fa = y > 0 ? moveIt(grid, val, x + 1, y - 1, step + 1) : step;
            let fb = moveIt(grid, val, x + 1, y, step + 1);
            let fc = y < grid.length - 1 ? moveIt(grid, val, x + 1, y + 1, step + 1) : step;
            let getMax = Math.max(fa, fb, fc);
            stepGrid[y][x] = getMax;
            return getMax;
        } else {
            return step + 1
        }
    }

    for (let y = 0; y < grid.length; y++) {
        curr = grid[y][0];
        let findMaxA = y - 1 >= 0 ? moveIt(grid, curr, 1, y - 1, 0) : 0;
        let findMaxB = moveIt(grid, curr, 1, y, 0);
        let findMaxC = y + 1 < grid.length ? moveIt(grid, curr, 1, y + 1, 0) : 0;
        maxStep = Math.max(maxStep, findMaxA, findMaxB, findMaxC);
    }
    return maxStep;
};

grid = [[2, 4, 3, 5], [5, 4, 9, 3], [3, 4, 2, 11], [10, 9, 13, 15]]

grid = [[3, 2, 4], [2, 1, 9], [1, 1, 7]]

grid = [
    [1000000, 92910, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068],
    [1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118]
]

console.log(maxMoves(grid))