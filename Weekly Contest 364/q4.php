<?php
class Solution {

    /**
     * @param int $n
     * @param int[][] $edges
     * @return array
     */
    function countPaths($n, $edges) {
        $a = array_fill(1, $n, 0);
        print_r($a);
        return [];
    }
}
$n = 6;
$edges = [[1, 2], [1, 3], [2, 4], [3, 5], [3, 6]];
$result= (new Solution())->countPaths($n, $edges);
foreach($result as $row) {
    echo json_encode($row);
    echo "\n";
}
