/** q2807
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
    let start = head
    while (start.next !== null) {
        let cV = start.val
        let nV = start.next.val
        let iV = gcd(cV, nV)

        let new_node = new ListNode(iV, start.next)
        start.next = new_node;
        start = start.next.next
    }
};
function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

nail = new ListNode(3);
prev = new ListNode(10, nail)
prev = new ListNode(6, prev)
head = new ListNode(18, prev)
insertGreatestCommonDivisors(head)
console.log(head);
