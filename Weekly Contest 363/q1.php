<?php
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function sumIndicesWithKSetBits($nums, $k) {
        $total = 0;
        foreach ($nums as $pos => $num) {
            if (array_sum(str_split(decbin($pos))) == $k) {
                $total += $num;
            }
        }
        return $total;
    }
}


$nums = [5, 10, 1, 5, 2];
$k = 1;

// $nums = [4,3,2,1];
// $k = 2;
echo (new Solution())->sumIndicesWithKSetBits($nums, $k);
