/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function (root) {
    result = [];
    var tree2d = []
    var bfs = (node, lv) => {
        var val = node.val
        if (val === null) {
            return -1
        }
        tree2d[lv] = tree2d[lv] ? tree2d[lv] : []
        tree2d[lv].push(val)
        if (node.left) {
            bfs(node.left, lv + 1)
        }
        if (node.right) {
            bfs(node.right, lv + 1)
        }
    }
    bfs(root, 0);
    for (var lvs of tree2d) {
        result.push(Math.max(...lvs))
    }
    return result
};
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
lv3ll = new TreeNode(5, null, null)
lv3lr = new TreeNode(3, null, null)
lv3rl = new TreeNode(null, null, null)
lv3rr = new TreeNode(9, null, null)
lv2r = new TreeNode(2, lv3rl, lv3rr)
lv2l = new TreeNode(3, lv3ll, lv3lr)
root = new TreeNode(1, lv2l, lv2r)
// root = [1, 3, 2, 5, 3, null, 9]
root = new TreeNode(0, null, null)
console.log(largestValues(root))