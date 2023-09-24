<?php
class Solution
{

    /**
     * @param int[] $nums
     * @param int $target
     * @return int[]
     */
    function twoSum1($nums, $target)
    {
        foreach ($nums as $index1 => $num1) {
            foreach ($nums as $index2 => $num2) {
                if ($index1 == $index2) {
                    continue;
                }
                if ($num1 + $num2 == $target) {
                    return [$index1, $index2];
                }
            }
        }
    }

    /**
     * @param int[] $nums
     * @param int $target
     * @return int[]
     */
    function twoSum2($nums, $target)
    {
        foreach ($nums as $index1 => $num1) {
            for ($i = $index1 + 1; $i < count($nums); $i++) {
                if ($num1 + $nums[$i] == $target) {
                    return [$index1, $i];
                }
            }
        }
    }

    /**
     * @param int[] $nums
     * @param int $target
     * @return int[]
     */
    function twoSum($nums, $target)
    {
        $rnums = $nums;
        krsort($rnums);
        foreach ($nums as $index1 => $num1) {
            if ($location = array_search($target - $num1, $rnums) and $location != $index1) {
                return [$index1, $location];
            }
        }
    }
}
$a = [3, 2, 4];
$b = 6;
$res = (new Solution())->twoSum($a, $b);
