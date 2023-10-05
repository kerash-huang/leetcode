<?php
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function majorityElement($nums) {
        $count = 1;
        $tmp = PHP_INT_MIN;
        $lmt = (count($nums) / 3);
        sort($nums);
        $list = [];

        foreach ($nums as $index => $number) {
            if ($tmp == PHP_INT_MIN) {
                $tmp = $number;
                $count = 1;
                continue;
            }
            if ($tmp == $number) {
                $count += 1;
            } else {
                if ($count > $lmt) {
                    $list[] = $tmp;
                }
                $count = 1;
                $tmp = $number;
            }
        }
        if ($count > $lmt) {
            $list[] = $number;
        }

        return $list;
    }
}



// $nums = [3, 2, 3];
$nums = [1];
$nums = [1, 2, 3];
$nums = [1, 2];
$res = (new Solution())->majorityElement($nums);
var_dump($res);
