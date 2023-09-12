<?php
class Solution {

    /**
     * @param int[][] $nums
     * @return int
     */
    function numberOfPoints($nums) {
        $return = [];
        foreach ($nums as $subarr) {
            $return = $return + array_fill($subarr[0], $subarr[1] - $subarr[0] + 1, '0');
        }
        return count($return);
    }
}
